// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types = require('../types');
var TypedBase_1 = require('./TypedBase');
/** <xsd:list> */
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.apply(this, arguments);
        this.itemType = null;
    }
    List.prototype.resolve = function (state) {
        var type = this.resolveType(this.itemType, state);
        this.scope.addContentToParent('list', type, 0, Infinity);
    };
    List.mayContain = function () { return [
        types.SimpleType
    ]; };
    return List;
}(TypedBase_1.TypedBase));
exports.List = List;
