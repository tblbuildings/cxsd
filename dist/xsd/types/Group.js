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
var GroupBase = (function (_super) {
    __extends(GroupBase, _super);
    function GroupBase() {
        _super.apply(this, arguments);
        this.id = null;
        this.minOccurs = '1';
        this.maxOccurs = '1';
    }
    GroupBase.prototype.init = function (state) {
        this.min = +this.minOccurs;
        if (this.maxOccurs == 'unbounded')
            this.max = Infinity;
        else
            this.max = +this.maxOccurs;
    };
    return GroupBase;
}(types.Base));
exports.GroupBase = GroupBase;
var GenericChildList = (function (_super) {
    __extends(GenericChildList, _super);
    function GenericChildList() {
        _super.apply(this, arguments);
    }
    GenericChildList.prototype.resolve = function (state) {
        this.scope.addAllToParent('element', this.min, this.max);
        this.scope.addAllToParent('group', this.min, this.max);
    };
    GenericChildList.mayContain = function () { return [
        types.Annotation,
        types.Element,
        Group,
        Sequence,
        Choice,
        types.Any
    ]; };
    return GenericChildList;
}(GroupBase));
exports.GenericChildList = GenericChildList;
// <xsd:sequence>
var Sequence = (function (_super) {
    __extends(Sequence, _super);
    function Sequence() {
        _super.apply(this, arguments);
    }
    return Sequence;
}(GenericChildList));
exports.Sequence = Sequence;
// <xsd:choice>
var Choice = (function (_super) {
    __extends(Choice, _super);
    function Choice() {
        _super.apply(this, arguments);
    }
    return Choice;
}(GenericChildList));
exports.Choice = Choice;
// <xsd:all>
var All = (function (_super) {
    __extends(All, _super);
    function All() {
        _super.apply(this, arguments);
    }
    return All;
}(GenericChildList));
exports.All = All;
// <xsd:group>
var Group = (function (_super) {
    __extends(Group, _super);
    function Group() {
        _super.apply(this, arguments);
        this.name = null;
        this.ref = null;
    }
    Group.prototype.init = function (state) {
        _super.prototype.init.call(this, state);
        this.define(state, 'group', 0, 0);
    };
    Group.prototype.resolve = function (state) {
        var group = this;
        if (this.ref) {
            var ref = new QName_1.QName(this.ref, state.source);
            group = this.scope.lookup(ref, 'group');
        }
        // Named groups are only models for referencing elsewhere.
        if (!this.name) {
            if (group) {
                // if(group != this && !group.resolved) console.log('OH NOES! Group ' + group.name);
                // group.scope.addAllToParent('element', this.min, this.max, this.scope);
                group.define(state, 'group', this.min, this.max, this.scope);
            }
            else
                throw new types.MissingReferenceError('group', ref);
        }
    };
    Group.mayContain = function () { return [
        types.Annotation,
        Sequence,
        Choice
    ]; };
    return Group;
}(GroupBase));
exports.Group = Group;
