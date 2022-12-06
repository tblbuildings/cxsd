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
var Context = (function (_super) {
    __extends(Context, _super);
    function Context() {
        _super.call(this, Namespace_1.Namespace);
    }
    return Context;
}(cxml.ContextBase));
exports.Context = Context;
