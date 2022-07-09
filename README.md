# eslint-repro
Sample repro illustrating issue with RuleTester

Clone the repo, then:
```
npm install
node no-unstrict-equals.test.js
```

The following error will result:

## AssertionError [ERR_ASSERTION]: A fatal parsing error occurred: Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: file.ts.
The file must be included in at least one of the projects provided.

