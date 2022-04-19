<template>
    <div class="about">
        <h2 v-font="150">This is an about page</h2>
        <welcome-message />
        <!-- <WelcomeMessage /> -->
    </div>
</template>

<script>
import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
    name: "about-view",
    components: {
        WelcomeMessage,
    },
};
</script>
