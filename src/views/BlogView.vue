<template>
    <div class="app-blog text-center">
        <div class="container">
            <div class="row">
                <h1>this is blog</h1>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <label for="search">find : </label>
                    <input id="search" type="text" v-model="filter" />
                    <PostComponentVue
                        v-for="post of search"
                        v-bind:key="post.id"
                        :title="post.title"
                        :date="post.date"
                        :body="post.body"
                        :author="post.author"
                        :views="post.views"
                    />
                </div>
                <div class="col-sm-4">
                    <sidebarVue />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostComponentVue from "@/components/PostComponent.vue";
import sidebarVue from "@/components/global/sidebar.vue";
import BlogPosts from "../json/posts.json";
import search from "../mixins/search.js";

export default {
    data: function () {
        return {
            pageName: "Blog",
            pageDesc: "this is blog page",
            posts: BlogPosts,
            filter: "",
        };
    },
    name: "blog-",
    components: {
        PostComponentVue,
        sidebarVue,
    },
    mixins: [search],
};
</script>
