<template>
	<div id="app">
		<!-- <Demo ref="demo"></Demo> -->
		<!-- <div ref="divDemo">123</div> -->
		<MyInput v-model="myData" @clear="test" clearable>
			<template #prepend>prepend</template>
			<template #append>append</template>
		</MyInput>
	</div>
</template>

<script>
import Demo from '@/components/Demo'
import MyInput from '@/components/MyInput'
export default {
	name: 'App',
	data() {
		return {
			myData: '',
			d1: 'd1'
		}
	},
	methods: {
		test() {
			console.log('clear')
		}
	},
	components: {
		Demo,
		MyInput
	},
	mounted() {
		// console.log(this.$refs.demo)
		// console.log(this.$refs.demo.$el)
		// console.log(this.$refs.divDemo)
	}
}
</script>

<style lang="scss">
</style>
