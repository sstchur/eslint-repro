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


              // C
    -         // D
    +         // B
              class Person {
    -           constructor(public emily: string) {}
    +           constructor(public stephen: string) {}

The expectation is that I can return two fixing object in an array, which I have.  Both fixing objects call `replaceTextRange`, and as per the ESLint docs, I made sure that the ranges of each fixing object do not overlap.  Still, the second one fails to be applied as I expected.

Example:

fix(fixer) {
  return [
    fixer.replaceTextRange([9,13], '// C'),
    fixer.replaceTextRange([22,26], '// B')
  ]
}

The expectation is that the range in the source from 9:13 (which is originally '// A') will be replaced with '// C', and this indeed happens.
The second fixer should ensure that the source from 22:26 (which is originally '// C') is replaced with '// D' but this doesn't happen.
