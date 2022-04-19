import Vue from "vue";

Vue.directive("font", {
    bind: function (el, binding) {
        el.style.fontSize = binding.value + "px";
    },
});

Vue.directive("weight", {
    bind: function (el, binding) {
        el.style.fontWeight = binding.value;
    },
});
