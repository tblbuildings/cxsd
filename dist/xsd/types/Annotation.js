// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types = require('../types');
/** <xsd:annotation> */
var Annotation = (function (_super) {
    __extends(Annotation, _super);
    function Annotation() {
        _super.apply(this, arguments);
    }
    Annotation.mayContain = function () { return [
        types.Documentation
    ]; };
    return Annotation;
}(types.Base));
exports.Annotation = Annotation;
