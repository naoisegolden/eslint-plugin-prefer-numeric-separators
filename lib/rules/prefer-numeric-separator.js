/**
 * @fileoverview Rule to prefer numeric separator.
 * @author Naoise Golden Santos
 */

"use strict";

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "prefer numeric separator",
            category: "Stylistic Issues",
            recommended: true,
            url: "https://github.com/naoisegolden/eslint-plugin-prefer-numeric-separator/docs/rules/prefer-numeric-separator.md"
        },
        schema: [], // no options
        messages: {
            preferNumericSeparator: "Use numeric separators in `{{ value }}`"
        }
    },
    create: function(context) {
        return {
            "VariableDeclaration:exit": (node) => {
                const messageId = "preferNumericSeparator";
                const thousanthSeparatorMissingRegex = /[0-9]{4,}/g;
                const containsNonDigitsRegex = /(?!\.)\D+/g;

                node.declarations.forEach(declaration => {
                    const value = declaration.init && declaration.init.raw;

                    if (
                        value && 
                        value.match(thousanthSeparatorMissingRegex) &&
                        !value.match(containsNonDigitsRegex)
                    ) {
                        context.report({ node, messageId, data: { value }});
                    }
                })
            }
        };
    }
};