/**
 * @fileoverview disable use some property for wx mini-program
 * @author liangjf
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
var path = require('path');
var rule = require("../../../lib/rules/no-use-unsupported-property"),

    RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parser: path.join(__dirname, '../../../node_modules/@typescript-eslint/parser')
});

var normalTest = {
  code: 'Object.values({b: 123});'
}

var functionTest = {
  code: 'function hello() { Object.values({b: 555}); }'
}

var tryTest = {
  code: `try {
          Object.values(this.store);
        } catch(e) {
          // Object.values(this.store);
        }`
}

var classTest = {
  code: `export default abstract class BaseStore {
          getAll(): T[] {
              return Object.values(this.store);
            }
        }`
}

var invalidEnum = [
  normalTest,
  functionTest,
  tryTest,
  classTest
]

invalidEnum = invalidEnum.map(item => {
  item.errors = [
    {
      messageId: 'avoidObjectValues'
    }
  ];
  return item;
})

ruleTester.run("eslint-plugin-no-use-unsupported-property", rule, {

    valid: [
        {
            code: 'Object.keys({a: 1});'
        }
        // give me some code that won't trigger a warning
    ],

    invalid: invalidEnum
});
