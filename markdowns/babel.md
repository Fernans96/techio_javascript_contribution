# Babel.js

## What is Babel ?

Babel is a compiler which translates JavaScript code from a newer version of JavaScript to an older version, to maximize browser compatibility. It can load newer syntaxes like ES2015 or ES7 and transpile them to older versions like ES5 or even ES3.

In this playground, you can see how easy it is to setup Babel by simply editing the configuration in package.json and .babelrc files.

We've provided a javascript file with ES2015 syntax so that you can see the result of the translation to ES5 that Babel produces.

@[ES2015 to ES5]({ "project": "babel", "stubs": ["es2015.js","package.json", ".babelrc"], "command": "bash ./run.sh", "layout": "aside" })

`.babelrc` is actually a configuration files and takes a lot of different properties, for instance options to ignore certain files. Check out [the documentation on babelrc](https://babeljs.io/docs/usage/babelrc/).

For more information on Babel, [follow this link](http://babeljs.io/).
