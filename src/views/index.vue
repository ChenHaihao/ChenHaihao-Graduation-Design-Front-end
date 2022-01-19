<template>
    <div class="home">
        <div class="home-title">
            欢迎来到任务管理系统
        </div>
        <div class="home-panel">
            <div class="home-panel__item" v-for="router in menu" :key="router.name" @click="handleRouterClick(router)">
                {{(router.meta || {}).title}}
            </div>
        </div>
        <img class="coder" src="../assets/images/coder.png" />
    </div>
</template>
<script>
export default {
    data () {
        return {
            menu: [
            ]
        }
    },
    mounted () {
        let routers = this.$store.getters.menuRouters
        routers.forEach(router => {
            this.menu.push(...router.children)
        });
    },
    methods: {
        handleRouterClick (router) {
            this.$router.push({ name: router.name })
        }
    }
}
</script>
<style lang="scss" scoped>
.home {
    height: 100vh;
    width: 100%;
    background-color: rgb(243 243 243 / 10%);
    position: relative;
    overflow: hidden;
    &-title {
        font-size: 72px;
        text-align: center;
    }
    &-panel {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: row wrap;
        padding: 20px;
        &__item {
            height: 200px;
            width: 200px;
            text-align: center;
            line-height: 200px;
            border-radius: 5px;
            box-shadow: 2px 1px 9px 3px #e0e0e0;
            margin: 0 20px 20px 0;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
    .coder {
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
}
</style>