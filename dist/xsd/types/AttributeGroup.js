// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QName_1 = require('../QName');
var types = require('../types');
/** <xsd:attributeGroup>
  * Defines several attributes that can be included together in type definitions. */
var AttributeGroup = (function (_super) {
    __extends(AttributeGroup, _super);
    function AttributeGroup() {
        _super.apply(this, arguments);
        this.id = null;
        this.name = null;
        this.ref = null;
    }
    AttributeGroup.prototype.init = function (state) {
        this.define(state, 'attributeGroup', 0, 0);
    };
    AttributeGroup.prototype.resolve = function (state) {
        var attributeGroup = this;
        if (this.ref) {
            var ref = new QName_1.QName(this.ref, state.source);
            attributeGroup = this.scope.lookup(ref, 'attributeGroup');
        }
        // Named attribute groups are only models for referencing elsewhere.
        if (!this.name) {
            if (attributeGroup) {
                // if(attributeGroup != this && !attributeGroup.resolved) console.log('OH NOES! AttributeGroup ' + attributeGroup.name);
                // attributeGroup.scope.addAllToParent('attribute', 1, 1, this.scope);
                attributeGroup.define(state, 'attributeGroup', 1, 1, this.scope);
            }
            else
                throw new types.MissingReferenceError('attributeGroup', ref);
        }
    };
    AttributeGroup.mayContain = function () { return [
        types.Annotation,
        types.Attribute,
        AttributeGroup
    ]; };
    return AttributeGroup;
}(types.Base));
exports.AttributeGroup = AttributeGroup;
