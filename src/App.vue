<template>
	<div id="app">
		<!-- <Demo ref="demo"></Demo> -->
		<!-- <div ref="divDemo">123</div> -->
		<!-- <MyInput v-model="myData" @clear="test" clearable>
			<template #prepend>prepend</template>
			<template #append>append</template>
		</MyInput> -->
		<MyInput v-model="myData" clearable @clear="test">
			<template #prepend>prepend</template>
			<template #append>append</template>
		</MyInput>

		<MySlot>
			<template #prepend="slotProps">
				{{slotProps.text}}prepend
			</template>
			<template #append>
				append
			</template>
			<template #demo="slotProps">
				{{slotProps.text}}
			</template>
		</MySlot>

	</div>
</template>

<script>
import Demo from '@/components/Demo'
import MyInput from '@/components/MyInput'
import MySlot from '@/components/MySlot'
export default {
	name: 'App',
	data() {
		return {
			myData: '',
			d1: 'd1',
			tdata: {
				a: '11',
				b: '11'
			}
		}
	},
	methods: {
		test() {
			console.log('clear')
		}
	},
	components: {
		Demo,
		MyInput,
		MySlot
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
