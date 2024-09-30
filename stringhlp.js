// stringhlp.js

const { concatenate, toUpperCase, toLowerCase, trimSpaces } = require('./stringFunctions');

function formatString(str) {
    return toUpperCase(trimSpaces(str));
}

function combineStrings(str1, str2) {
    return concatenate(trimSpaces(str1), trimSpaces(str2));
}

module.exports = {
    formatString,
    combineStrings,
};
