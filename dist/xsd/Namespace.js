// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cxml = require('cxml');
var Scope_1 = require('./Scope');
/** XML namespace, binding it to syntax definitions. */
var Namespace = (function (_super) {
    __extends(Namespace, _super);
    function Namespace(name, id, context) {
        _super.call(this, name, id, context);
        /** List of all source files potentially contributing to this namespace. */
        this.sourceList = [];
        /** Source files potentially contributing to this namespace. */
        this.sourceTbl = {};
        this.scope = new Scope_1.Scope(context.getPrimitiveScope(), this);
    }
    /** Initialize names and addresses. Can be called multiple times. */
    Namespace.prototype.init = function (url, short) {
        if (url) {
            if (!this.schemaUrl)
                this.schemaUrl = url;
        }
        if (short) {
            if (!this.short)
                this.short = short;
        }
        return (this);
    };
    Namespace.prototype.addSource = function (source) {
        if (!this.sourceTbl[source.id]) {
            this.sourceTbl[source.id] = source;
            this.sourceList.push(source);
        }
    };
    /** Update final address of schema file if HTTP request was redirected. */
    Namespace.prototype.updateUrl = function (urlOld, urlNew) {
        if (!this.schemaUrl || this.schemaUrl == urlOld)
            this.schemaUrl = urlNew;
    };
    /** Fetch the root scope with published attributes, groups, elements... */
    Namespace.prototype.getScope = function () { return (this.scope); };
    /** @return List of all source files potentially contributing to this namespace. */
    Namespace.prototype.getSourceList = function () {
        return (this.sourceList);
    };
    return Namespace;
}(cxml.NamespaceBase));
exports.Namespace = Namespace;
