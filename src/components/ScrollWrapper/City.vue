<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <current-city />
            <city-list />
        </div>
    </div>
</template>
<script>
import CurrentCity from './CityList/CurrentCity'
import CityList from './CityList/Index'
import BetterScroll from 'better-scroll'
export default {
    name: 'CityScrollWrapper',
    components: {
        CurrentCity,
        CityList
    },
    mounted() {
        this.scroll = new BetterScroll(this.$refs.wrapper)
    }
}
</script>