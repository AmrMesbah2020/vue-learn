export default {
    computed: {
        search: function () {
            return this.posts.filter((value) => {
                return value.title.match(this.filter);
            });
        },
    },
};
