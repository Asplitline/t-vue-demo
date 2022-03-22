<script>
export default {
  props: ['value'],
  render(h) {
    return h('input', {
      domProps: {
        value: this.value
      },
      on: {
        input: (e) => {
          this.$emit('input', e.target.value)
        }
      }
    })
  }
}
</script>
