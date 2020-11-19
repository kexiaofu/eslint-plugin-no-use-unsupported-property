/**
 * @fileoverview disable use some property for wx mini-program
 * @author liangjf
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function noUseObjectValues(context, node) {
  if (node.object.name === 'Object' && node.property.name === 'values') {
    context.report({
      node: node,
      messageId: 'avoidObjectValues',
      data: {
        name: 'Object.values'
      }
    });
  }
}

module.exports = {
    meta: {
        docs: {
            description: "disable use some property for wx mini-program",
            category: "Fill me in",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            avoidObjectValues: "禁止使用不兼容属性 {{name}}"
        }
    },

    create: function(context) {
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            MemberExpression: function (node) {
              noUseObjectValues(context, node);
            }
            
        };
    }
};
