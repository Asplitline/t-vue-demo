<script>
export default {
	methods: {
		// 获取所有子节点文本并拼接（拼接）
		getChildrenTextContent(children) {
			return children
				.map((node) => {
					return node.children
						? this.getChildrenTextContent(node.children)
						: node.text
				})
				.join('')
		}
	},
	render(h) {
		const headerId = this.headerId
			? this.headerId
			: this.getChildrenTextContent(this.$slots.default)
					.toLowerCase()
					.replace(/\W+/g, '-') // 特殊符号转 -
					.replace(/(^-|-$)/g, '') // 去掉首尾 -
		return h('h' + this.level, [
			h(
				'a',
				{
					attrs: {
						name: headerId,
						href: '#' + headerId
					}
				},
				this.$slots.default
			)
		])
	},
	props: {
		level: {
			type: Number,
			require: true
		},
		headerId: {
			type: String
		}
	}
}
</script>
