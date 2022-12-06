// This file is part of cxsd, copyright (c) 2015 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types = require('../types');
/** <xsd:include> */
var Include = (function (_super) {
    __extends(Include, _super);
    function Include() {
        _super.apply(this, arguments);
        this.id = null;
        this.schemaLocation = null;
    }
    Include.prototype.init = function (state) {
        if (this.schemaLocation) {
            var urlRemote = state.source.urlResolve(this.schemaLocation);
            state.stateStatic.addImport(state.source.targetNamespace, urlRemote);
        }
    };
    Include.mayContain = function () { return [
        types.Annotation
    ]; };
    return Include;
}(types.Base));
exports.Include = Include;
/** <xsd:import> */
var Import = (function (_super) {
    __extends(Import, _super);
    function Import() {
        _super.apply(this, arguments);
        this.namespace = null;
    }
    Import.prototype.init = function (state) {
        if (this.schemaLocation) {
            // TODO: handle importing namespaces like http://www.w3.org/XML/1998/namespace
            // without a schemaLocation.
            var urlRemote = state.source.urlResolve(this.schemaLocation);
            state.stateStatic.addImport(state.stateStatic.context.registerNamespace(this.namespace), urlRemote);
        }
    };
    return Import;
}(Include));
exports.Import = Import;
