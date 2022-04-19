<template>
    <div class="side-bar">
        <p>{{ title | uppercase }}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title: "this is sidebar",
        };
    },
    name: "side-bar",
    filters: {
        uppercase: function (value) {
            return value.toUpperCase();
        },
    },
};
</script>
