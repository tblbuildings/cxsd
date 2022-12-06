// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path = require('path');
var cget_1 = require('cget');
var Transform_1 = require('../transform/Transform');
var Exporter = (function (_super) {
    __extends(Exporter, _super);
    function Exporter(doc, cache) {
        _super.call(this, doc);
        this.state = { cache: cache };
    }
    Exporter.prototype.writeHeader = function () {
        var output = [];
        var importTbl = this.namespace.getUsedImportTbl();
        for (var _i = 0, _a = Object.keys(importTbl).sort(); _i < _a.length; _i++) {
            var shortName = _a[_i];
            var namespace = importTbl[shortName];
            var relativePath = this.getPathTo(namespace.name);
            output.push(this.writeImport(shortName, relativePath, namespace.name));
        }
        return (output);
    };
    /** Output namespace contents to cache, if not already exported. */
    Exporter.prototype.prepare = function () {
        var _this = this;
        var doc = this.doc;
        if (!doc)
            return (null);
        this.cacheDir = path.dirname(this.state.cache.getCachePathSync(new cget_1.Address(doc.namespace.name)));
        var outName = this.getOutName(doc.namespace.name);
        return (this.state.cache.ifCached(outName).then(function (isCached) {
            if (isCached)
                return (null);
            return (_this.state.cache.store(outName, _this.writeContents()));
        }));
    };
    /** Get relative path to another namespace within the cache. */
    Exporter.prototype.getPathTo = function (name) {
        // Append and then strip a file extension so references to a parent
        // directory will target the directory by name instead of .. or similar.
        var targetPath = this.state.cache.getCachePathSync(new cget_1.Address(name)) + '.js';
        // Always output forward slashes.
        // If path.sep is a backslash as on Windows, we need to escape it (as a double-backslash) for it to be a valid Regex.
        // We are using a Regex because the alternative string.replace(string, string) overload only replaces the first occurance.
        var separatorRegex = new RegExp(path.sep.replace("\\", "\\\\"), 'g');
        var relPath = path.relative(this.cacheDir, targetPath).replace(separatorRegex, '/').replace(/\.js$/, '');
        if (!relPath.match(/^[./]/))
            relPath = './' + relPath;
        return (relPath);
    };
    return Exporter;
}(Transform_1.Transform));
exports.Exporter = Exporter;
