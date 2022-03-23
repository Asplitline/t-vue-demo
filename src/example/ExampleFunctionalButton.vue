<script>
export default {
  functional: true,
  data() {
    return {}
  },
  render(h, ctx) {
    console.log(ctx.slots())
    console.log(ctx.children)
    return h('button', ctx.data, ctx.children)
  }
}
</script>

<style lang="scss" scoped></style>
