// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TypeBase_1 = require('./TypeBase');
/** Primitive types map directly to JavaScript equivalents. */
var Primitive = (function (_super) {
    __extends(Primitive, _super);
    function Primitive() {
        _super.apply(this, arguments);
    }
    return Primitive;
}(TypeBase_1.TypeBase));
exports.Primitive = Primitive;
