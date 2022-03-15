<template>
	<div id="list-demo" class="demo">
		<button v-on:click="add">Add</button>
		<button v-on:click="remove">Remove</button>
		<transition-group name="list" tag="p" key="test1" mode="in-out">
			<span v-for="item in items" v-bind:key="item" class="list-item">
				{{ item }}
			</span>
		</transition-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10
		}
	},
	methods: {
		randomIndex: function () {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function () {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function () {
			this.items.splice(this.randomIndex(), 1)
		}
	}
}
</script>

<style lang="scss" scoped>
// inline 不是 transformable element
.list-item {
	display: inline-block;
	margin: 0 4px;
	transition: all 1s ease;
}

.list-leave-to,
.list-enter {
	opacity: 0;
	transform: translateY(100%);
}
// 设置移动的过渡效果 - 可选
/* .list-move {
	transition: all 1s;
} */
// 离开过渡，先让元素脱离标准流
.list-leave-active {
	position: absolute;
}
</style>
