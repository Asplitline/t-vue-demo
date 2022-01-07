
<template>
	<el-input v-bind="$attrs" v-on="$listeners" @clear="$emit('clear')">
		<!-- <template v-for="(_,slotName) in $slots" #[slotName]>
			<slot :name="slotName"></slot>
		</template> -->

		<slot :name="slotName" v-for="(_,slotName) in $slots" :slot="slotName"></slot>

		<!-- <template #prepend>
			<slot :name="prepend" ></slot>
		</template>
		<template #append>
			<slot :name="append"></slot>
		</template> -->
	</el-input>
</template>

<script>
export default {
	inheritAttrs: false,
	methods: {},
	mounted() {
		console.log(this.$attrs)
		console.log(this.$listeners)
		console.log(this.$slots)
		console.log(this.$scopedSlots)
	}
}
</script>

<style>
</style>
