<template>
  <a class="Link">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Link'
}
</script>

<style scoped>
.Link + .Link {
  margin-left: 1.6rem;
}
</style>
