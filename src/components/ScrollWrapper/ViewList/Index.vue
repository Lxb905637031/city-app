<template>
    <div class="list-wrapper">
        <view-list-sub
            v-for="(item,index) of viewDatas"
            :key="index"
            :data="item"
        />
    </div>
</template>
<script>
import ViewListSub from './Sub'
export default {
    name: 'ViewList',
    components: {
        ViewListSub
    },
    props: {
        viewDatas: {
            type: Array,
            require: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.list-wrapper {
    @include flex-row;
	flex-wrap: wrap;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
}
</style>