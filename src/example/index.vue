<template>
	<div id="app">
		<!-- <example-prop-or-attr></example-prop-or-attr> -->
		<hr>
		<example-sync v-bind.sync="obj"></example-sync>
		{{obj.a}}
		{{obj.b}}
		<div ref="testRef">testRef</div>
		<hr>
		<example-ref-cmp ref="refCmp"></example-ref-cmp>
		<hr>
		<example-once-hook v-if="show"></example-once-hook>
		<hr>
		<button @click="show=!show">toggle</button>
		<hr>
		<example-transition-on-off></example-transition-on-off>
		<hr>
		<example-transition-list></example-transition-list>
		<hr>
		<example-transition-list2></example-transition-list2>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			obj: {
				a: 1,
				b: 2
			},
			show: true
		}
	},
	components: {},
	mounted() {
		console.log(this.$refs.testRef)
		console.log(this.$refs.refCmp)
		console.log(this.$refs.refCmp.$el)
	}
}
</script>

<style lang="scss">
</style>
