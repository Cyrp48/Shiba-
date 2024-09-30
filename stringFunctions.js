// stringFunctions.js

function concatenate(str1, str2) {
    return str1 + str2;
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function trimSpaces(str) {
    return str.trim();
}

module.exports = {
    concatenate,
    toUpperCase,
    toLowerCase,
    trimSpaces,
};
