<template>
    <div class="loading"
        v-show="loadingShow"
    >
        <img class="loading-img" src="@image/loading.gif" />
    </div>
</template>
<script>
export default {
    name: 'Loading',
    props: {
        loadingShow: {
            type: Boolean
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
.loading {
    @include vh-center;
    height: 3rem;
    .loading-img {
        width: .8rem;
        height: .8rem;
    }
}
</style>