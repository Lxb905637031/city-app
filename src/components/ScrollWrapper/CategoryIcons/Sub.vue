<template>
    <div class="icon-item">
        <div class="icon"
            @click="onRouteTo(field)"
            :style="{ backgroundColor: bgColor }"
        >
            <span class="iconfont" :class="icon" />
        </div>
        <p class="icon-text">{{ iconText }}</p>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'CategoryIconsSub',
    props: {
        // 背景颜色
        bgColor:{
            type: String,
            require: true
        },
        // iconfont图标类名
        icon: {
            type: String,
            require: true
        },
        // 分类
        field: {
            type: String,
            require: true
        },
        // 图标名
        iconText: {
            type: String,
            require: true
        }
    },
    methods: {
        ...mapMutations(['selectField']),
        onRouteTo(field) {
            this.selectField(field)
            this.$router.push('/list')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@styles/mixins.scss';
@import '@styles/variables.scss';
.icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
	width: 20%;
	padding: .2rem 0;

	.icon {
		@include vh-center;
		width: .4rem;
		height: .4rem;
		border-radius: 50%;

		.iconfont {
			color: #fff;
			font-size: .26rem;
		}
	}

	.icon-text {
		font-size: .14rem;
		text-align: center;
		margin-top: .1rem;
	}
}
</style>