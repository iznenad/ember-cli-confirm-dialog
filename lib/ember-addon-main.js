'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCliConfirmDialog(project) {
  this.project = project;
  this.name    = 'ember-cli-confirm-dialog';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCliConfirmDialog.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-confirm-dialog', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCliConfirmDialog.prototype.included = function included(app) {
  this.app = app;
 // this.app.import('vendor/second-add-on/styles/style.css');
};

module.exports = EmberCliConfirmDialog;