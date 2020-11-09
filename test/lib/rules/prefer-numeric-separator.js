/**
 * @fileoverview Tests for rule to prefer numeric separator.
 * @author Naoise Golden Santos
 */

"use strict";

const rule = require("../../../lib/rules/prefer-numeric-separator");
const RuleTester = require("eslint").RuleTester;

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2021 } });

tester.run("prefer-numeric-separator", rule, {
    valid: [
        { code: "let foo = '+34666999888'" },
        { code: "let foo = 'notANumber20200202'" },
        { code: "let foo = 12_300" },
        { code: "let foo = 1_000_000_000" },
        { code: "let foo = 0.000_001" }
    ],
    invalid: [
        { code: "let foo = 12300", errors: [{ messageId: "preferNumericSeparator" }] },
        { code: "let foo = 1000000000", errors: [{ messageId: "preferNumericSeparator" }] },
        { code: "let foo = 0.000001", errors: [{ messageId: "preferNumericSeparator" }] }
    ]
});
