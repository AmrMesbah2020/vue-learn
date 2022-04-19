import Vue from "vue";

Vue.filter("reverse", function (value) {
    return value.split("").reverse().join("");
});

Vue.filter("shorten", function (value, length) {
    return value.substring(0, length);
});
