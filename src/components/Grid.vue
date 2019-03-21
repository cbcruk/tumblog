<template>
  <div class="Grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TumblrGrid'
}
</script>

<style scoped>
.Grid {
  display: flex;
}

.Grid >>> .Aside {
  flex-basis: 215px;
}
</style>
