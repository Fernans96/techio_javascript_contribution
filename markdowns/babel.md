# Babel.js

## What is Babel ?

Babel is a javascript compiler which creates ES5 browser compliant code from newer javascript versions like ES2015.

In this playground, you can see how easy it is to setup Babel by simply editing the configuration in package.json and .babelrc files.

We've provided a javascript file with ES2015 syntax so that you can see the result of the translation to ES5 that Babel produces.

@[ES2015 to ES5]({ "project": "babel", "stubs": ["package.json", ".babelrc", "es2015.js"], "command": "bash ./run.sh", "layout": "aside" })
