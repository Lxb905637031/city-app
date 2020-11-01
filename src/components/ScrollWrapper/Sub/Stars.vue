<template>
    <span class="stars-wrapper">
        <span :class="['iconfont icon-star', {active: starNum > 1}]" />
        <span :class="['iconfont icon-star', {active: starNum > 2}]" />
        <span :class="['iconfont icon-star', {active: starNum > 3}]" />
        <span :class="['iconfont icon-star', {active: starNum > 4}]" />
        <span :class="['iconfont icon-star', {active: starNum > 5}]" /> 
    </span>
</template>
<script>
export default {
    name: 'Stars',
    props: {
        // 星星数量
        starNum: {
            type: Number,
            require: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@styles/variables.scss';
.stars-wrapper {
    color: #ccc;
    .active {
        color: $starColor;
    }
}
</style>