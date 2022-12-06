// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types = require('../types');
/** <xsd:enumeration> */
var Enumeration = (function (_super) {
    __extends(Enumeration, _super);
    function Enumeration() {
        _super.apply(this, arguments);
        this.value = null;
    }
    Enumeration.prototype.init = function (state) {
        var parent = state.parent.xsdElement;
        if (parent instanceof types.Restriction)
            parent.addEnumeration(this.value);
    };
    Enumeration.mayContain = function () { return [
        types.Annotation
    ]; };
    return Enumeration;
}(types.Base));
exports.Enumeration = Enumeration;
