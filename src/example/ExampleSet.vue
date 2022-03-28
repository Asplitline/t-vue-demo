<template>
  <div class="">
    <div class="list">
      {{ obj.a }}
      {{ obj.b }}
      {{ obj.c }}
      {{ obj.d }}
    </div>
    <button @click="updateData">update</button>
    <button @click="addData">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  },
  methods: {
    updateData() {
      Object.assign(this.obj, { a: 2 })
    },
    addData() {
      this.obj.a++
      this.obj.b++
      this.obj.c++
    }
  },
  mounted() {
    // #1
    this.obj = Object.assign(this.obj, {
      d: 4,
      e: 5
    })
    // #2
    Object.assign(this.obj, {
      d: 4,
      e: 5
    })
    // #3
    this.obj = Object.assign({}, this.obj, { d: 4, e: 5 })
  }
}
</script>

<style lang="scss" scoped></style>
