// This file is part of cxsd, copyright (c) 2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cxml = require('cxml');
var MemberRef = (function (_super) {
    __extends(MemberRef, _super);
    function MemberRef() {
        _super.apply(this, arguments);
    }
    return MemberRef;
}(cxml.MemberRefBase));
exports.MemberRef = MemberRef;
