// no-empty-catch.spec.js
const { RuleTester } = require('eslint');
const { ESLintUtils } = require('@typescript-eslint/utils');
const noUnstrictEquals = require('./no-unstrict-equals');

const ruleTester = new ESLintUtils.RuleTester(
{
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
});

const errors = [{ messageId: 'noUnstrictEqauals' }];
ruleTester.run('no-unnecessary-explicit-falsy-checks', noUnstrictEquals, {
  valid: [
    {
      code: `let n: number;
            if (n === 7) {};`
    }
  ],
  invalid: [
    {
      code: `let x: boolean = false;
             if (x == '') {}`,
      errors
    }
  ]
});
