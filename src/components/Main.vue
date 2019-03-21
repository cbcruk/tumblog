<template>
  <main class="Main">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'TumblrMain'
}
</script>

<style scoped>
.Main {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  font-size: 1.6rem;
}

.Main >>> .Pagination {
  padding-top: 3.2rem;
  margin-top: auto;
}

.Main >>> .Article:not(:first-child) {
  margin-top: 3.2rem;
}
</style>