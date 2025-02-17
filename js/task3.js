function getElementWidth(content, padding, border) {
    return getNumber(content) + getNumber(padding) * 2 + getNumber(border) * 2;
}

function getNumber(str) {
    let matches = str.match(/(\d+(\.\d+)?)/);

    if (matches) {
        return parseFloat(matches[0]);
    }
}