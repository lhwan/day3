function sfz(num) {
    num = num + '';
    var str = num.slice(0, 6);
    str += `<b>${num.slice(6,14)}</b>****`;
    return str;
}
var str = sfz(410825198309242980);
console.log(str);