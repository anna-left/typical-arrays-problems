exports.min = function min(array) {
    if ((array === undefined) || (array.length === 0)) {
        return 0;
    }
    array.sort((a, b) => { return a - b });
    return array[0];

}

exports.max = function max(array) {
    if ((array === undefined) || (array.length === 0)) {
        return 0;
    }
    array.sort((a, b) => { return b - a });
    return array[0];
}

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    }
    const lArray = array.length;
    if (lArray === 0) {
        return 0;
    }

    let sum = 0;
    let i = 0;
    while (i < lArray) {
        sum = sum + array[i];
        i = i + 1;
    }
    return sum / lArray;

}
