<template>
  <div class="Tags">
    <a
      v-for="(tag, index) in tags"
      :key="index"
      :href="tag.url"
      class="Tags-item"
    >
      #{{ tag.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.Tags-item:not(:first-child) {
  margin-left: 0.5rem;
}
</style>
