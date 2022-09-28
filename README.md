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

       Expected value to strictly be equal to:
      "
            // C
            // D
            class Person {
              constructor(C: string, D: string) {}
            }"
    Received:
      "
            // C
            // B
            class Person {
              constructor(C: string, B: string) {}
            }"
    
    Message:
      Output is incorrect.

    Difference:

    - Expected
    + Received


              // C
    -         // D
    +         // B
              class Person {
    -           constructor(C: string, D: string) {}
    +           constructor(C: string, B: string) {}
              }


The expectation is that I can return two fixing objects in an array, which I have.  Both fixing objects call `replaceTextRange`, and as per the ESLint docs, I made sure that the ranges of each fixing object do not overlap.  Still, In the first if-block, everything works and `// A` and `A` are both updated in the final output to be `// C` and `C`.  However, the fixers in the second if-block don't seem to get applied.

Example:

```typescript

Identifier(node) {
  if (node.name === 'A') {
    context.report({
      node,
      messageId: 'someError',
      fix(fixer) {
        return [
          fixer.replaceTextRange([9,13], '// C'),
          fixer.replaceTextRange([72,73], 'C')
        ]
      }
    });
  }
  else if (node.name === 'B') {
    context.report({
      node,
      messageId: 'someError',
      fix(fixer) {
        return [
          fixer.replaceTextRange([22,26], '// D'),
          fixer.replaceTextRange([83,84], 'D')
        ];
      }
    });
  }
}
```

The expectation is that the range in the source from 9:13 (which is originally '// A') will be replaced with '// C', and this indeed happens.
The second fixer should ensure that the source from 22:26 (which is originally '// C') is replaced with '// D' but this doesn't happen.
