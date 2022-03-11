<template>
	<div id="example-2">
		<transition name="toggle">
			<button key="on" @click="toggle" v-if="active">
				on
			</button>
			<button key="off" @click="toggle" v-else>off</button>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: true
		}
	},
	methods: {
		toggle() {
			this.active = !this.active
		}
	}
}
</script>

<style lang="scss" scoped>
#example-2 {
	position: relative;
	height: 40px;
}
button {
	position: absolute;
}
.toggle-enter-active,
.toggle-leave-active {
	transition: all 0.5s linear;
}
.toggle-enter,
.toggle-leave-to {
	opacity: 0;
}
.toggle-enter {
	transform: translateX(100%);
}
.toggle-leave-to {
	transform: translateX(-100%);
}
</style>
