<template>
    <div class="continer">
        <div class="card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">{{ title | reverse }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ date }}</h6>
                <p class="card-text" v-samar.blue>
                    {{ body | shorten(50) }}
                </p>
                <a href="#" class="card-link">{{ author }}</a>
                <a href="#" class="card-link">{{ views }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import search from "../mixins/search.js";
export default {
    props: ["title", "date", "body", "author", "views"],
    name: "post-card",
    directives: {
        samar: {
            bind: function (el, binding) {
                el.style.color = "green";
                if (binding.modifiers.blue) {
                    el.style.color = "blue";
                }
            },
        },
    },
    data: function () {
        return {
            filter: "",
        };
    },
    mixins: [search],
};
</script>
