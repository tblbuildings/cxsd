// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QName_1 = require('../QName');
var MemberBase_1 = require('./MemberBase');
var types = require('../types');
/** <xsd:element> */
var Element = (function (_super) {
    __extends(Element, _super);
    function Element() {
        _super.apply(this, arguments);
        this.minOccurs = "1";
        this.maxOccurs = "1";
        this.default = null;
        /** Abstract elements are disallowed in the XML document,
          * and another member of the same substitution group should be used. */
        this.abstract = null; // boolean
        this.substitutionGroup = null;
    }
    Element.prototype.init = function (state) {
        this.min = +this.minOccurs;
        if (this.maxOccurs == 'unbounded')
            this.max = Infinity;
        else
            this.max = +this.maxOccurs;
        this.define(state, 'element', this.min, this.max);
    };
    Element.prototype.resolve = function (state) {
        var element = this.resolveMember(state, 'element');
        if (this.substitutionGroup) {
            // Add this as an alternative to the substitution group base element.
            var ref = new QName_1.QName(this.substitutionGroup, state.source);
            var groupBase = this.scope.lookup(ref, 'element');
            if (!groupBase)
                throw new types.MissingReferenceError('element', ref);
            this.substitutes = groupBase;
            groupBase.isSubstituted = true;
        }
    };
    Element.prototype.isAbstract = function () {
        return (this.abstract == 'true' || this.abstract == '1');
    };
    Element.mayContain = function () { return [
        types.Annotation,
        types.SimpleType,
        types.ComplexType
    ]; };
    return Element;
}(MemberBase_1.MemberBase));
exports.Element = Element;
