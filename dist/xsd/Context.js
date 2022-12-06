// This file is part of cxsd, copyright (c) 2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cxml = require('cxml');
var Namespace_1 = require('./Namespace');
var Source_1 = require('./Source');
var State_1 = require('./State');
var QName_1 = require('./QName');
var Primitive_1 = require('./types/Primitive');
/** XML parser context, holding definitions of all imported namespaces. */
var Context = (function (_super) {
    __extends(Context, _super);
    function Context(schemaContext) {
        _super.call(this, Namespace_1.Namespace);
        /** Scope containing XML primitive types.
          * Parent of global scopes of all other namespaces. */
        this.primitiveScope = null;
        this.primitiveSpace = this.registerNamespace('xml-primitives');
        this.primitiveSpace.init(null, 'Primitive');
        this.primitiveScope = this.populatePrimitives(this.primitiveSpace, schemaContext);
        this.xmlSpace = this.registerNamespace('http://www.w3.org/XML/1998/namespace');
        this.xmlSpace.init('http://www.w3.org/2001/xml.xsd', 'xml');
        this.xsdSpace = this.registerNamespace('http://www.w3.org/2001/XMLSchema');
        this.xsdSpace.init('http://www.w3.org/2009/XMLSchema/XMLSchema.xsd', 'xsd');
    }
    Context.prototype.registerNamespace = function (name, url) {
        var namespace = _super.prototype.registerNamespace.call(this, name);
        if (url)
            namespace.updateUrl(null, url);
        return (namespace);
    };
    Context.prototype.getPrimitiveScope = function () {
        // While primitiveSpace is still being initialized, this must return null.
        return (this.primitiveScope);
    };
    /** Initialize special namespace containing primitive types. */
    Context.prototype.populatePrimitives = function (primitiveSpace, schemaContext) {
        var scope = primitiveSpace.getScope();
        var spec = [
            [
                'boolean',
                'boolean'
            ], [
                'date dateTime',
                'Date'
            ], [
                'byte decimal double float int integer long short ' +
                    'unsignedLong unsignedInt unsignedShort unsignedByte ' +
                    'negativeInteger nonNegativeInteger nonPositiveInteger positiveInteger ',
                'number'
            ], [
                'Name NCName QName anyURI language normalizedString string token ' +
                    'ENTITY ENTITIES ID IDREF IDREFS NMTOKEN NMTOKENS ' +
                    'gDay gMonth gMonthDay gYear gYearMonth ' +
                    'hexBinary base64Binary ' +
                    'duration time',
                'string'
            ], [
                'anytype',
                'any'
            ]
        ];
        // TODO: these lines are ugly!
        var source = new Source_1.Source('', this, primitiveSpace);
        var state = new State_1.State(null, null, source);
        state.setScope(scope);
        schemaContext.copyNamespace(primitiveSpace).isPrimitiveSpace = true;
        for (var _i = 0, spec_1 = spec; _i < spec_1.length; _i++) {
            var typeSpec = spec_1[_i];
            var type = new Primitive_1.Primitive(null);
            type.name = typeSpec[1];
            type.init(new State_1.State(state, null));
            var outType = type.getOutType(schemaContext);
            outType.primitiveType = outType;
            outType.safeName = type.name;
            for (var _a = 0, _b = typeSpec[0].split(' '); _a < _b.length; _a++) {
                var name = _b[_a];
                scope.add(new QName_1.QName().parsePrimitive(name, primitiveSpace).nameFull, 'type', type, 1, 1);
            }
        }
        return (scope);
    };
    return Context;
}(cxml.ContextBase));
exports.Context = Context;
