<template>
  <ul class="Category">
    <li
      v-for="item in items"
      :key="item.href"
    >
      <a
        :href="`/${item.href}`"
        title="{lang:Answer}"
        class="Category-item"
      >
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Category',
  computed: {
    items() {
      return [
        { href: 'ask', text: 'Ask' },
        { href: 'archive', text: 'Archive' }
      ]
    }
  }
}
</script>

<style scoped>
.Category {
  list-style: none;
}
</style>
