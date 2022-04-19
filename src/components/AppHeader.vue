<template>
    <div class="app-header bg-dark">
        <div class="container">
            <div class="logo">Amr Mesbah</div>
            <ul class="list-group list-group-horizontal text-right">
                <router-link tag="li" to="/" exact>
                    <a>Home</a>
                </router-link>
                |
                <router-link tag="li" to="/about">
                    <a>About</a>
                </router-link>
                |
                <router-link tag="li" to="/help" replace>
                    <a>Help</a>
                </router-link>
                |
                <router-link tag="li" to="/blog" replace>
                    <a>Blog</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
};
</script>
