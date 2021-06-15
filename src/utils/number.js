exports.kFormatter = function (num) {
    return Math.abs(num) > 9999 ?
        Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" :
        Math.sign(num) * Math.abs(num);
};