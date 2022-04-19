<template>
    <div>
        <h4>help please</h4>
        <p v-weight="bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            cupiditate harum optio magnam aliquid quia incidunt, itaque quo
            accusantium sapiente veritatis odit vero possimus architecto
            voluptates tempora, quidem voluptatum nostrum.
        </p>
        <Test />
    </div>
</template>

<script>
import Test from "@/components/Test.vue";

export default {
    name: "help-us",
    components: { Test },
};
</script>
