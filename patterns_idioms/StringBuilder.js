function StringBuilder(value) {
    this.strings = new Array();
    this.append(value);
}

StringBuilder.prototype.append = function (value) {
    if (value) {
        this.strings.push(value);
    }
}

StringBuilder.prototype.clear = function () {
    this.strings.length = 0;
}

StringBuilder.prototype.toString = function () {
    return this.strings.join("");
}

var sb = new StringBuilder();
sb.append("Hola");
sb.append(" Mundo");
sb.append("!!!");

var myString = sb.toString();
sb.clear();
