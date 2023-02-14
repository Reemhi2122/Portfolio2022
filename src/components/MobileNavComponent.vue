<template>
    <div class="mobile-menu">
        <ul class="mobile-menu-ul">
            <li class="mobile-menu-item"><RouterLink to="/">HOME</RouterLink></li>
            <li class="mobile-menu-section"></li>
            <li class="mobile-menu-item"><RouterLink to="/projects">PROJECTS</RouterLink></li>
            <li class="mobile-menu-section"></li>
            <li class="mobile-menu-item"><RouterLink to="/skills">SKILLS</RouterLink></li>
            <li class="mobile-menu-section"></li>
            <li class="mobile-menu-item"><RouterLink to="/about">ABOUT</RouterLink></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "MobileNav",
        };
    },
    beforeMount() {
        this.$emit('OpenNavBar');
    },
    methods: {
    }
}
</script>

<style scoped>
.mobile-menu {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-content: center;
}

.mobile-menu-ul {
    list-style: none;
    margin: auto;
    text-align: center;
    padding: 0;
}

.mobile-menu-item {
    font-weight: 500;
    font-style: normal;
    font-size: 50px;
    margin-bottom: 10px;
    margin-top: 10px;;
}

.mobile-menu-item > a {
    text-decoration: none;
    color: white;
}

.mobile-menu-section {
    width: 250px;
    height: 5px;
    background-color: white;
    margin-left: calc(50% - 125px);
}
</style>