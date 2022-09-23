# eslint-repro
Sample repro illustrating issue with RuleTester when rule specifies options

Clone the repo, then:
```
npm install
yarn test
```

The following error will result:

 Message:
      Output is incorrect.

    Difference:

    - Expected
    + Received


              class Person {
    -           constructor(public emily: string) {}
    +           constructor(public stephen: string) {}
              }

The expectation is that the received text should *at least* be different from what it was originally, since `fixer.replaceText(node, 'whatever')` is being called.  But that's not happening.  The fixer is indeed running, but the code isn't changing like it should.

