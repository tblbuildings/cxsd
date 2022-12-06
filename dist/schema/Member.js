// This file is part of cxsd, copyright (c) 2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cxml = require('cxml');
var Type_1 = require('./Type');
var MemberRef_1 = require('./MemberRef');
var Member = (function (_super) {
    __extends(Member, _super);
    function Member(name) {
        _super.call(this, null, name);
        this.surrogateKey = Member.nextKey++;
    }
    Member.prototype.getRef = function () {
        return (new MemberRef_1.MemberRef(this, 0, 1));
    };
    Member.prototype.getProxy = function () {
        var proxy = this.proxy;
        if (!proxy) {
            var proxy = new Type_1.Type(null);
            proxy.namespace = this.namespace;
            proxy.isProxy = true;
            proxy.containingRef = this.getRef();
            this.proxy = proxy;
            this.namespace.addType(proxy);
            if (!this.isAbstract) {
                proxy.addChildSpec(this);
            }
        }
        return (proxy);
    };
    Member.nextKey = 0;
    return Member;
}(cxml.MemberBase));
exports.Member = Member;
