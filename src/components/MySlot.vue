<template>
	<TplSlot>
		<!-- 2.6+ -->
		<!-- <template v-slot:[slotName] v-for="(_,slotName) in $slots">
			<slot :name="slotName"></slot>
		</template> -->
		<!-- old -->
		<!-- <template :slot="slotName" v-for="(_,slotName) in $slots">
			<slot :name="slotName"></slot>
		</template> -->

		<!-- <slot :slot="slotName" :name="slotName" v-for="(_,slotName) in $slots"></slot> -->

		<!-- <slot v-slot:[slotName] :name="slotName" v-for="(_,slotName) in $slots"></slot> -->
		<!-- <slot v-slot:[slotName] :name="slotName" v-for="(_,slotName) in $scopedSlots"></slot> -->
		<!--
		<template v-slot:[slotName] v-for="(_,slotName) in $slots">
			<slot :name="slotName"></slot>
		</template> -->

		<!-- <slot :slot="slotName" :name="slotName" v-for="(_,slotName) in $slots"></slot>
		<template slot-scope="slotProps" v-for="(_,slotName) in $scopedSlots">
			<slot :name="slotName" v-bind="slotProps"></slot>
		</template> -->

		<!-- <slot v-slot:[slotName]="slotName" :name="slotName" v-for="(_,slotName) in $slots">
		</slot> -->
		<!-- <template slot-scope="slotProps" v-for="(_,slotName) in $scopedSlots">
			<slot :name="slotName" v-bind="slotProps"></slot>
		</template> -->
		<template v-slot:[slotName]="slotProps" v-for="(_,slotName) in $scopedSlots">
			<slot :name="slotName" v-bind="slotProps"></slot>
		</template>
	</TplSlot>

</template>

<script>
/*
 todo - el-input 二次封装为什么需要  slot + template
 */
import TplSlot from './TplSlot.vue'
export default {
	components: {
		TplSlot
	}
}
</script>

<style lang="scss" scoped>
</style>
