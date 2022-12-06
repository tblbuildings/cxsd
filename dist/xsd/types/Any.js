// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types = require('../types');
// <xsd:any>
var Any = (function (_super) {
    __extends(Any, _super);
    function Any() {
        _super.apply(this, arguments);
        this.namespace = null;
        this.processContents = 'strict';
    }
    Any.prototype.init = function (state) {
        this.name = '*';
        _super.prototype.init.call(this, state);
    };
    Any.prototype.resolve = function (state) {
        this.typeRef = this.resolveType('anytype', state);
    };
    return Any;
}(types.Element));
exports.Any = Any;
