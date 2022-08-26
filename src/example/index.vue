<template>
  <div id="app">
    <template v-if="false">
      <!-- <example-prop-or-attr></example-prop-or-attr> -->
      <hr />
      <example-sync v-bind.sync="obj"></example-sync>
      {{ obj.a }}
      {{ obj.b }}
      <div ref="testRef">testRef</div>
      <hr />
      <example-ref-cmp ref="refCmp"></example-ref-cmp>
      <hr />
      <example-once-hook v-if="show"></example-once-hook>
      <hr />
      <button @click="show = !show">toggle</button>
      <hr />
      <example-transition-on-off></example-transition-on-off>
      <hr />
      <example-transition-list></example-transition-list>
      <hr />
      <example-transition-list2></example-transition-list2>
      <hr />
      <example-anchor :level="i" v-for="i in 6" :key="i">
        <div>
          <p>test</p>
          <span> test-{{ i }} *￥%……</span>
        </div>
      </example-anchor>
      <hr />
    </template>
    <hr />
    <example-render-model v-model="test"></example-render-model>
    {{ test }}
    <hr />
    <example-functional-button demo="demo" @click="handleClick">
      <template v-slot:foo>first</template>
      <p>second</p>
    </example-functional-button>
    <hr />
    <example-set></example-set>
    <hr />
    <example-model v-model="mockModel"></example-model>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      obj: {
        a: 1,
        b: 2
      },
      show: true,
      test: '',
      mockModel: 1
    }
  },
  components: {},
  mounted() {},
  methods: {
    handleClick() {
      console.log('handleClick')
    }
  }
}
</script>

<style lang="scss"></style>
