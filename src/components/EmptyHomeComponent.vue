<template>
    <div></div>
</template>

<script>
export default {
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | Home';
            }
        },
    },
    beforeMount(){
       this.$emit('CloseNavBar');
    },
}
</script>