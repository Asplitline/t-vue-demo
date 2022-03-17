<template>
	<span class="">
		{{showNumToFix}}
		<!-- <button @click="add">add</button> -->
	</span>
</template>

<script>
import gsap from 'gsap'
export default {
	props: ['num'],
	data() {
		return {
			showNum: 0
		}
	},
	computed: {
		showNumToFix() {
			return this.showNum?.toFixed(0)
		}
	},
	watch: {
		num(val) {
			console.log(val)
			gsap.to(this, { duration: 0.5, showNum: val })
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
