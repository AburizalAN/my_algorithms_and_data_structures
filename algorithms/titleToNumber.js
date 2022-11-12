var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        console.log(columnTitle.charCodeAt(i) - 64)
        console.log(Math.pow(26, columnTitle.length - i - 1))
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - i - 1);
    }
    return result;
};

console.log(titleToNumber("ABC"))