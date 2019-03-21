<template>
  <nav
    class="Pagination"
    role="navigation"
    aria-labelledby="paginglabel"
  >
    <div class="Pagination-count">
      {{ current }} / {{ total }}
    </div>

    <div class="Pagination-links">
      <PaginationLink
        v-for="link in links"
        :key="link.class"
        :class="link.class"
        :href="link.href"
      >
        {{ link.text }}
      </PaginationLink>
    </div>
  </nav>
</template>

<script>
import PaginationLink from './Pagination/Link'

export default {
  name: 'TumblrPagination',
  components: {
    PaginationLink
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    },
    previous: {
      type: String,
      default: ''
    },
    next: {
      type: String,
      default: ''
    }
  },
  computed: {
    links() {
      const links = [
        {
          href: this.previous,
          text: this.$i18n.previous_page,
          class: 'is-prev'
        },
        {
          href: this.next,
          text: this.$i18n.next_page,
          class: 'is-next'
        }
      ]

      return links.filter(link => link.href)
    }
  }
}
</script>

<style scoped>
.Pagination {
  display: flex;
  justify-content: space-between;
  width: 400px;
}
</style>
