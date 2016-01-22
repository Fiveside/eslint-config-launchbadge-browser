module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "plugins": [
    "react",
    "babel",
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
  },
  "rules": {
    // Core: Possible Errors
    // =========================================================================
    // - enforce trailing commas (in multiline expressions)
    "comma-dangle": [2, "always-multiline"],
    // - disallow assignment in conditionals (except enclosed in parens)
    "no-cond-assign": [2, "except-parens"],
    // - disallow use of `console` [warning]
    "no-console": [1],
    // - disallow use of constant expressions in conditions
    "no-constant-condition": [2],
    // - disallow controls characters in regular expressions
    "no-control-regex": [2],
    // - disallow debugger [warning]
    "no-debugger": [1],
    // - disallow duplicate argument names in functions
    "no-dupe-args": [2],
    // - disallow duplicate keys when creating object literals
    "no-dupe-keys": [2],
    // - disallow a duplicate case label
    "no-duplicate-case": [2],
    // - disallow the use of empty character classes in regular expressions
    "no-empty-character-class": [2],
    // - disallow empty statements [warning]
    "no-empty": [1],
    // - disallow assigning to the exception in a catch block
    "no-ex-assign": [2],
    // - disallow double-negation boolean casts (use `Boolean(x)` instead)
    "no-extra-boolean-cast": [2],
    // - disallow unnecessary parentheses
    "no-extra-parens": [2, "functions"],
    // - disallow unnecessary semicolons (fixable)
    "no-extra-semi": [2],
    // - disallow overwriting functions written as function declarations
    "no-func-assign": [2],
    // - disallow function or variable declarations in nested blocks
    "no-inner-declarations": [2, "both"],
    // - disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": [2],
    // - disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": [2],
    // - disallow negation of the left operand of an in expression
    "no-negated-in-lhs": [2],
    // - disallow the use of object properties of the global object
    "no-obj-calls": [2],
    // - disallow multiple spaces in a regular expression literal
    "no-regex-spaces": [2],
    // - disallow sparse arrays
    "no-sparse-arrays": [2],
    // - Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": [2],
    // - disallow unreachable statements after a return, throw, continue,
    //   or break statement
    "no-unreachable": [2],
    // - disallow comparisons with the value NaN
    "use-isnan": [2],
    // - Ensure that the results of typeof are compared against a valid string
    "valid-typeof": [2],

    // Core: Best Practices
    // =========================================================================
    // - specify the maximum cyclomatic complexity allowed in a program
    "complexity": [1, 10],
    // - require return statements to either always or never specify values
    "consistent-return": [2],
    // - specify curly brace conventions for all control statements
    "curly": [2, "multi-line", "consistent"],
    // - require default case in switch statements
    "default-case": [2],
    // - enforces consistent newlines before or after dots
    "dot-location": [2, "property"],
    // - encourages use of dot notation whenever possible
    "dot-notation": [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}],
    // - require the use of === and !== (fixable)
    "eqeqeq": [2, "smart"],
    // - make sure for-in loops have an if statement
    "guard-for-in": [2],
    // - disallow the use of alert, confirm, and prompt
    "no-alert": [2],
    // - disallow use of arguments.caller or arguments.callee
    "no-caller": [2],
    // - disallow lexical declarations in case clauses
    "no-case-declarations": [2],
    // - disallow division operators explicitly at beginning of regex
    "no-div-regex": [2],
    // - disallow else after a return in an if
    "no-else-return": [2],
    // - disallow use of labels for anything other than loops and switches
    "no-empty-label": [2],
    // - disallow use of empty destructuring patterns
    "no-empty-pattern": [2],
    // - disallow use of eval()
    "no-eval": [2],
    // - disallow adding to native types
    "no-extend-native": [2],
    // - disallow unnecessary function binding
    "no-extra-bind": [2],
    // - disallow fallthrough of case statements (recommended)
    "no-fallthrough": [2],
    // - disallow the use of leading or trailing decimal points
    //   in numeric literals
    "no-floating-decimal": [2],
    // - disallow the type conversions with shorter notations
    "no-implicit-coercion": [2],
    // - disallow use of eval()-like methods
    "no-implied-eval": [2],
    // - disallow this keywords outside of classes or class-like objects
    "no-invalid-this": [2],
    // - disallow usage of __iterator__ property
    "no-iterator": [2],
    // - disallow unnecessary nested blocks
    "no-lone-blocks": [2],
    // - disallow creation of functions within loops
    "no-loop-func": [2],
    // - disallow the use of magic numbers
    "no-magic-numbers": [1, {enforceConst: true, ignore: [-1, 0, 1, 2]}],
    // - disallow use of multiple spaces (fixable)
    "no-multi-spaces": [2],
    // - disallow use of multiline strings
    "no-multi-str": [2],
    // - disallow reassignments of native objects
    "no-native-reassign": [2],
    // - disallow use of new operator for Function object
    "no-new-func": [2],
    // - disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": [2],
    // - disallow use of the new operator when not part of an
    //   assignment or comparison
    "no-new": [2],
    // - disallow use of octal escape sequences in string literals,
    //   such as var foo = "Copyright \251";
    "no-octal-escape": [2],
    // - disallow use of octal literals (recommended)
    "no-octal": [2],
    // - disallow reassignment of function parameters
    "no-param-reassign": [2, {"props": false}],
    // - disallow use of process.env
    "no-process-env": [2],
    // - disallow usage of __proto__ property
    "no-proto": [2],
    // - disallow declaring the same variable more than once (recommended)
    "no-redeclare": [2, {"builtinGlobals": true}],
    // - disallow use of assignment in return statement
    "no-return-assign": [2, "always"],
    // - disallow use of javascript: urls.
    "no-script-url": [2],
    // - disallow comparisons where both sides are exactly the same
    "no-self-compare": [2],
    // - disallow use of the comma operator
    "no-sequences": [2],
    // - restrict what can be thrown as an exception
    "no-throw-literal": [2],
    // - disallow usage of expressions in statement position
    "no-unused-expressions": [2],
    // - disallow unnecessary .call() and .apply()
    "no-useless-call": [2],
    // - disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": [2],
    // - disallow use of the void operator
    "no-void": [2],
    // - disallow use of the with statement
    "no-with": [2],
    // - require use of the second argument for parseInt()
    "radix": [2, "as-needed"],
    // - require immediate function invocation to be wrapped in parentheses
    "wrap-iife": [2, "outside"],
    // - require or disallow Yoda conditions
    "yoda": [2, "never"],

    // Core: Variables
    // =========================================================================
    // - disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": [2],
    // - disallow deletion of variables (recommended)
    "no-delete-var": [2],
    // - disallow labels that share a name with a variable
    "no-label-var": [2],
    // - disallow shadowing of names such as arguments
    "no-shadow-restricted-names": [2],
    // - disallow use of undefined when initializing variables
    "no-undef-init": [2],
    // - disallow use of undeclared variables unless mentioned in a /*global */ block (recommended)
    "no-undef": [2, {typeof: true}],
    // - disallow use of undefined variable
    "no-undefined": [2],
    // - disallow declaration of variables that are not used in the code (recommended)
    "no-unused-vars": [1, {"vars": "local", "args": "after-used"}],
    // - disallow use of variables before they are defined
    "no-use-before-define": [2],

    // Core: CommonJS
    // =========================================================================
    // - enforce return after a callback
    "callback-return": [2],
    // - enforce error handling in callbacks
    "handle-callback-err": [1],
    // - disallow mixing regular variable and require declarations
    "no-mixed-requires": [2],
    // - disallow use of new operator with the require function
    "no-new-require": [2],
    // - disallow string concatenation with __dirname and __filename
    "no-path-concat": [2],
    // - disallow process.exit()
    "no-process-exit": [1],
    // - disallow use of synchronous methods
    "no-sync": [1],

    // Core: Stylistic Issues
    // =========================================================================
    // - enforce spacing inside array brackets (fixable)
    "array-bracket-spacing": [2, "never"],
    // - disallow or enforce spaces inside of single line blocks (fixable)
    "block-spacing": [2, "always"],
    // - enforce one true brace style
    "brace-style": [2, "1tbs", {"allowSingleLine": false}],
    // - require camel case names
    "camelcase": [2],
    // - enforce spacing before and after comma (fixable)
    "comma-spacing": [2, {"before": false, "after": true}],
    // - enforce one true comma style
    "comma-style": [2, "last"],
    // - require or disallow padding inside computed properties (fixable)
    "computed-property-spacing": [2, "never"],
    // - enforce consistent naming when capturing the current execution context
    "consistent-this": [2, "self"],
    // - enforce newline at the end of file, with no multiple empty lines (fixable)
    "eol-last": [2],
    // - enforce use of function declarations or expressions
    "func-style": [2, "declaration", {"allowArrowFunctions": true}],
    // - specify tab or space width for your code (fixable)
    "indent": [2, 2],
    // - specify whether double or single quotes should be used in JSX attributes
    "jsx-quotes": [2, "prefer-double"],
    // - enforce spacing between keys and values in object literal properties
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    // - disallow mixed 'LF' and 'CRLF' as linebreaks
    "linebreak-style": [2, "unix"],
    // - specify the maximum depth that blocks can be nested
    "max-depth": [1, 6],
    // - specify the maximum length of a line in your program
    "max-len": [1, 80],
    // - specify the maximum depth callbacks can be nested
    "max-nested-callbacks": [1, 6],
    // - limits the number of parameters that can be used in the function declaration.
    "max-params": [1, 8],
    // - specify the maximum number of statement allowed in a function
    "max-statements": [1, 25],
    // - disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": [2],
    // - disallow use of the Array constructor
    "no-array-constructor": [2],
    // - disallow use of bitwise operators
    "no-bitwise": [1],
    // - disallow if as the only statement in an else block
    "no-lonely-if": [2],
    // - disallow mixed spaces and tabs for indentation (recommended)
    "no-mixed-spaces-and-tabs": [2],
    // - disallow multiple empty lines
    "no-multiple-empty-lines": [2, {"max": 1}],
    // - disallow negated conditions
    "no-negated-condition": [2],
    // - disallow nested ternary expressions
    "no-nested-ternary": [2],
    // - disallow the use of the Object constructor
    "no-new-object": [2],
    // - disallow use of unary operators, ++ and --
    "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
    // - disallow space between function identifier and application (fixable)
    "no-spaced-func": [2],
    // - disallow trailing whitespace at the end of lines (fixable)
    "no-trailing-spaces": [2],
    // - disallow the use of ternary operators when a simpler alternative exists
    "no-unneeded-ternary": [2],
    // - require assignment operator shorthand where possible or prohibit it entirely
    "operator-assignment": [2, "always"],
    // - enforce operators to be placed before or after line breaks
    "operator-linebreak": [2, "after"],
    // - enforce padding within blocks
    "padded-blocks": [2, "never"],
    // - specify whether backticks, double or single quotes should be used (fixable)
    "quotes": [2, "double", "avoid-escape"],
    // - enforce spacing before and after semicolons
    "semi-spacing": [2, {"before": false, "after": true}],
    // - require or disallow use of semicolons instead of ASI (fixable)
    "semi": [2, "always"],
    // - require a space after certain keywords (fixable)
    "space-after-keywords": [2, "always"],
    // - require or disallow a space before blocks (fixable)
    "space-before-blocks": [2, "always"],
    // - require or disallow a space before function opening parenthesis (fixable)
    "space-before-function-paren": [2, "never"],
    // - require a space before certain keywords (fixable)
    "space-before-keywords": [2, "always"],
    // - require or disallow spaces inside parentheses
    "space-in-parens": [2, "never"],
    // - require spaces around operators (fixable)
    "space-infix-ops": [2],
    // - require a space after return, throw, and case (fixable)
    "space-return-throw-case": [2],
    // - require or disallow spaces before/after unary operators (fixable)
    "space-unary-ops": [1, {"words": true, "nonwords": false}],
    // - require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": [2],
    // - require regex literals to be wrapped in parentheses
    "wrap-regex": [2],

    // Core: ECMAScript 6
    // =========================================================================
    // - require braces in arrow function body
    "arrow-body-style": [1, "as-needed"],
    // - require space before/after arrow function's arrow (fixable)
    "arrow-spacing": [2, {"before": true, "after": true}],
    // - verify calls of super() in constructors
    "constructor-super": [2],
    // - disallow modifying variables of class declarations
    "no-class-assign": [2],
    // - disallow modifying variables that are declared using const
    "no-const-assign": [2],
    // - disallow duplicate name in class members
    "no-dupe-class-members": [2],
    // - disallow use of this/super before calling super() in constructors.
    "no-this-before-super": [2],
    // - require let or const instead of var
    "no-var": [1],
    // - suggest using arrow functions as callbacks
    "prefer-arrow-callback": [2],
    // - suggest using const declaration for variables that are never modified after declared
    "prefer-const": [1],
    // - suggest using the spread operator instead of .apply().
    "prefer-spread": [1],
    // - disallow generator functions that do not have yield
    "require-yield": [1],

    // React
    // =========================================================================
    // - Enforce boolean attributes notation in JSX
    "react/jsx-boolean-value": [2, "never"],
    // - Validate closing bracket location in JSX
    "react/jsx-closing-bracket-location": [2],
    // - Enforce or disallow spaces inside of curly braces in JSX attributes
    "react/jsx-curly-spacing": [2, "never"],
    // - Enforce event handler naming conventions in JSX
    "react/jsx-handler-names": [1],
    // - Validate props indentation in JSX
    "react/jsx-indent-props": [2, 2],
    // - Validate JSX indentation
    "react/jsx-indent": [2, 2],
    // - Validate JSX has key prop when in array or iterator
    "react/jsx-key": [2],
    // - Limit maximum of props on a single line in JSX
    "react/jsx-max-props-per-line": [2, {maximum: 3}],
    // - Prevent usage of .bind() and arrow functions in JSX props
    "react/jsx-no-bind": [2, {"ignoreRefs": true}],
    // - Prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": [2],
    // - Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals": [1],
    // - Disallow undeclared variables in JSX
    "react/jsx-no-undef": [2],
    // - Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": [2],
    // - Enforce propTypes declarations alphabetical sorting
    "react/jsx-sort-prop-types": [1, {callbacksLast: true}],
    // - Enforce props alphabetical sorting
    "react/jsx-sort-props": [1, {shorthandFirst: true, callbacksLast: true}],
    // - Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": [2],
    // - Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": [2],
    // - Prevent usage of deprecated methods
    "react/no-deprecated": [1],
    // - Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": [1],
    // - Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": [1],
    // - Prevent direct mutation of this.state
    "react/no-direct-mutation-state": [2],
    // - Prevent usage of isMounted
    "react/no-is-mounted": [2],
    // - Prevent multiple component definition per file
    "react/no-multi-comp": [1, {"ignoreStateless": true}],
    // - Prevent using string references in ref attribute.
    //   NOTE: https://facebook.github.io/react/docs/more-about-refs.html
    "react/no-string-refs": [1],
    // - Prevent usage of unknown DOM property
    "react/no-unknown-property": [2],
    // - Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": [2],
    // - Prevent missing React when using JSX
    "react/react-in-jsx-scope": [2],
    // - Prevent extra closing tags for components without children
    "react/self-closing-comp": [1],
    // - Prevent missing parentheses around multilines JSX
    "react/wrap-multilines": [2],

    // Babel
    // ====================================================================
    // - require parens in arrow function arguments
    "babel/arrow-parens": [2, "always"],
    // - Handles async/await functions correctly
    "babel/generator-star-spacing": [2, {"before": false, "after": true}],
    // - doesn't complain about export x from "mod"; or export * as x from "mod";
    "babel/object-curly-spacing": [2, "never"],
    // - doesn't fail when using object spread (...obj)
    "babel/object-shorthand": [2, "always"],
  }
};
