<template>
	<div class="">
		{{showNumToFix}}<br>
		<button @click="add">add</button>
	</div>
</template>

<script>
import gsap from 'gsap'
export default {
	data() {
		return {
			num: 0,
			showNum: 0
		}
	},
	methods: {
		add() {
			this.num += Math.floor(Math.random() * 100)
		}
	},
	computed: {
		showNumToFix() {
			return this.showNum.toFixed(0)
		}
	},
	watch: {
		num(val) {
			gsap.to(this, { duration: 0.5, showNum: val })
		}
	},
	mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
