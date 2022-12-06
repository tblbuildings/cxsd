// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types = require('../types');
/** <xsd:complextype> */
var ComplexType = (function (_super) {
    __extends(ComplexType, _super);
    function ComplexType() {
        _super.apply(this, arguments);
    }
    ComplexType.mayContain = function () { return [
        types.Annotation,
        SimpleContent,
        ComplexContent,
        types.Attribute,
        types.AnyAttribute,
        types.Sequence,
        types.Choice,
        types.AttributeGroup,
        types.Group
    ]; };
    return ComplexType;
}(types.TypeBase));
exports.ComplexType = ComplexType;
var ContentBase = (function (_super) {
    __extends(ContentBase, _super);
    function ContentBase() {
        _super.apply(this, arguments);
    }
    ContentBase.prototype.resolve = function (state) {
        state.parent.xsdElement.parent = this.parent;
        // Pass elements and attributes defined in child extension or restriction
        // onwards to the parent type definition.
        this.scope.addAllToParent('element');
        this.scope.addAllToParent('attribute');
        this.scope.addAllToParent('group');
        this.scope.addAllToParent('attributeGroup');
    };
    ContentBase.mayContain = function () { return [
        types.Extension,
        types.Restriction
    ]; };
    return ContentBase;
}(types.Base));
exports.ContentBase = ContentBase;
/** <xsd:simplecontent> */
var SimpleContent = (function (_super) {
    __extends(SimpleContent, _super);
    function SimpleContent() {
        _super.apply(this, arguments);
    }
    return SimpleContent;
}(ContentBase));
exports.SimpleContent = SimpleContent;
/** <xsd:complexcontent> */
var ComplexContent = (function (_super) {
    __extends(ComplexContent, _super);
    function ComplexContent() {
        _super.apply(this, arguments);
    }
    return ComplexContent;
}(ContentBase));
exports.ComplexContent = ComplexContent;
