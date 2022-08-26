<template>
  <div class="list">
    <span class="item" :class="{ active: value === 1 }" @click="setActive(1)"
      >1</span
    >
    <span class="item" :class="{ active: value === 2 }" @click="setActive(2)"
      >2</span
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {}
  },
  methods: {
    setActive(cur) {
      this.$emit('change', cur)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  .item {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #000;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
    &:nth-child(n + 2) {
      margin-left: 20px;
    }
    &.active {
      color: red;
      border-color: red;
    }
  }
}
</style>
