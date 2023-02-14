<template>
    <div class="project-container">
        <h1>In progress</h1>
	</div>
</template>

<script>
export default{
    data() {
        return {
            name: 'InProgress',
        }
    },
    beforeMount(){
       this.$emit('OpenNavBar');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = 'Stan Vogels | In Progress';
            }
        },
    }
}
</script>

<style scoped>
.project-container{
    text-align: center;
    font-size: 25px;
}

h1{
    margin-top: 100px;
}
</style>>