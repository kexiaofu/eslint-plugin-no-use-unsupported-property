/**
 * @fileoverview disable use some property for wx mini-program
 * @author liangjf
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
console.log(requireIndex(__dirname + "/rules"));

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



