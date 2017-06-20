﻿var assert = require('assert');
var mochaExemple = require('./mocha.js');

/*
 ** Correct assert tests to validate the method add
 */
it('should add ', function() {
    try {
        assert.equal(5, mochaExemple.add(2, 2));
        assert.equal(2, mochaExemple.add(-1, -1));
        assert.notEqual(0, mochaExemple.add(0, 0));
        printMessage('Congratulation !!!', 'You have successfully created a unit test');
    } catch (error) {
        printMessage('Hint 💡', 'Have you checked your assert ?');
        throw error;
    }
});

function printMessage(channel, message) {
    console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
