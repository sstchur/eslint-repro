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
    fixable: 'code',
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
              return [
                fixer.replaceTextRange([9,13], '// C'),
                fixer.replaceTextRange([22,26], '// B')
              ]
            }
          });
        }
      }
    };
  }
};