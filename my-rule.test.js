// no-empty-catch.spec.js
const { RuleTester } = require('eslint');
const { ESLintUtils } = require('@typescript-eslint/utils');
const myRule = require('./my-rule');

const ruleTester = new ESLintUtils.RuleTester(
{
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
});

const errors = [{ messageId: 'someError' }];
ruleTester.run('my-rule', myRule, {
  valid: [
    {
      code: `
        class Person {
          constructor(anna: string) {}
        }`
    }
  ],
  invalid: [
    {
      code: `
        class Person {
          constructor(public stephen: string) {}
        }`,
      errors: [ { messageId: 'someError' } ],
      output: `
        class Person {
          constructor(public emily: string) {}
        }`
    }
  ]
});
