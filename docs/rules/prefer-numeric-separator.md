# Prefer numeric separator. (prefer-numeric-separator)

## Rule Details

See [numeric separator](https://github.com/tc39/proposal-numeric-separator) specification.

Examples of **incorrect** code for this rule:

```js
/*eslint for-direction: "error"*/
let foo = 12300;
let foo = 1000000000;
let foo = 0.000001;
```

Examples of **correct** code for this rule:

```js
/*eslint for-direction: "error"*/
let foo = 12_300;

let foo = 1_000_000_000;

let foo = 0.000_001;
```