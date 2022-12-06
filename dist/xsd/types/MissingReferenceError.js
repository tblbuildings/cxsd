// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MissingReferenceError = (function (_super) {
    __extends(MissingReferenceError, _super);
    function MissingReferenceError(type, ref) {
        _super.call(this);
        this.name = 'MissingReferenceError';
        this.message = 'Missing ' + type + ': ' + ref.format();
        _super.call(this, this.message);
    }
    return MissingReferenceError;
}(Error));
exports.MissingReferenceError = MissingReferenceError;
