// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types = require('../types');
/** <xsd:anyAttribute> */
var AnyAttribute = (function (_super) {
    __extends(AnyAttribute, _super);
    function AnyAttribute() {
        _super.apply(this, arguments);
        this.namespace = null;
        this.processContents = 'strict';
    }
    AnyAttribute.prototype.init = function (state) {
        this.name = '*';
        _super.prototype.init.call(this, state);
    };
    AnyAttribute.prototype.resolve = function (state) {
        this.typeRef = this.resolveType('anytype', state);
    };
    return AnyAttribute;
}(types.Attribute));
exports.AnyAttribute = AnyAttribute;
