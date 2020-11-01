<template>
    <div class="container">
        <home-header />
        <home-scroll-wrapper />
    </div>
</template>
<script>
import HomeHeader from '@/components/Header/HomeHeader'
import HomeScrollWrapper from '@/components/ScrollWrapper/Home'
export default {
    name: 'Index',
    components: {
        HomeHeader,
        HomeScrollWrapper
    }
}
</script>
