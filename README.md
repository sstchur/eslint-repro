# eslint-repro
Sample repro illustrating issue with RuleTester when rule specifies options

Clone the repo, then:
```
npm install
node no-unstrict-equals.test.js
```

The following error will result:

## Error: rule-tester:
    Configuration for rule "no-unnecessary-explicit-falsy-checks" is invalid:
    Value ["===","!=="] should NOT have more than 0 items.

