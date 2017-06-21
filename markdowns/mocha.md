# Mocha.js

## What is Mocha ?

Mocha is an easy JavaScript unit testing framework. It helps you validate the output of a function in a couple ways: to make sure it works as expected and to verify that updates don't break existing code.

Tests use the `Assert` module. In a nutshell, an assert function that fails (returns `false`) will make the test fail. Using the `Assert` module, you can compare the actual output of a function to the expected output.

In this example, you will need to correct the tests in order to correctly validate the `add` function.

@[Fix the unit tests]({ "project": "mocha", "stubs": ["mocha.js", "mocha.spec.js"], "command": "bash ./run.sh", "layout": "aside" })

For more information on Mocha, [follow this link](https://mochajs.org/).
