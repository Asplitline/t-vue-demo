
<template>
	<el-input v-bind="$attrs" @clear="$emit('clear')" v-on="$listeners">
		<!-- 具名插槽 -->
		<slot :slot="slotName" :name="slotName" v-for="(_,slotName) in $slots"></slot>
		<!-- 作用域插槽 -->
		<!-- <template v-slot:[slotName] v-for="(_,slotName) in $slots">
			<slot :name="slotName"></slot>
		</template> -->
		<!--  -->
		<!-- <template v-slot:[slotName]="slotProps" v-for="(_,slotName) in $scopedSlots">
			<slot :name="slotName" v-bind="slotProps"></slot>
		</template> -->
	</el-input>
</template>

<script>
export default {
	// inheritAttrs: false,
	methods: {
		test() {
			this.$emit('clear')
		}
	},
	mounted() {
		console.log(this.$attrs)
		// console.log(this.$listeners)
		// console.log(this.$slots)
		// console.log(this.$scopedSlots)
	}
}
</script>

<style>
/* <el-input v-bind="$attrs" v-on="$listeners" @clear="$emit('clear')">
		<slot :name="slotName" v-for="(_,slotName) in $slots" v-slot[slotName]></slot>
		<template v-for="(_,slotName) in $scopedSlots" #[slotName]="slotProps">
			<slot :name="slotName" v-bind="slotProps"></slot>
		</template>

	</el-input> */
</style>
