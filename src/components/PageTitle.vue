<template>
  <div class="title flex h-center">
    <h1>
      <slot>No Title</slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'title',
};
</script>

<style lang='scss' scoped>
h1 {
  padding: 20px 0px;
}
</style>
