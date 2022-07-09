const TypeScriptESLintUtils = require('@typescript-eslint/utils');
const ESLintUtils = TypeScriptESLintUtils.ESLintUtils;
const TSUtils = require('tsutils');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Forbids using == or !=',
      category: 'Possible Errors',
      recommended: 'error'
    },
    messages: {
      noUnstrictEqauals:
        'This expression uses == or !=. Change it to use === or !== instead.'
    },
    schema: []
  },
  create: function (context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();

    return {
      BinaryExpression(node) {
        if (node.operator === '==' || node.operator === '!=') {  
          context.report({
            node,
            messageId: 'noUnstrictEqauals'
          });
        }
      }
    };
  }
};