const TypeScriptESLintUtils = require('@typescript-eslint/utils');
const { FunctionExpressionNameScope } = require('@typescript-eslint/utils/dist/ts-eslint-scope');
const ESLintUtils = TypeScriptESLintUtils.ESLintUtils;
const TSUtils = require('tsutils');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'A randome rule',
      category: 'Possible Errors',
      recommended: 'error'
    },
    messages: {
      someError:
        'You better fix this code!'
    },
    schema: []
  },
  create: function (context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const checker = parserServices.program.getTypeChecker();

    return {
      TSParameterProperty(node) {
        if (node.parameter.name === 'stephen') {
          context.report({
            node,
            messageId: 'someError',
            fix(fixer) {
              console.log('RUNNING FIXER for', node.parameter.name)
              fixer.replaceText(node, 'public emily: string');
            }
          });
        }
      }
    };
  }
};