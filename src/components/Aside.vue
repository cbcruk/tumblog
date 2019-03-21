<template>
  <aside class="Aside">
    <AsideHeader
      :title="$attrs.title"
      :description="$attrs.description"
      class="Aside-header"
    />
    <AsideCategory class="Aside-category" />
    <AsideSearch class="Aside-search" />
    <AsideCopyright
      :copyright="$attrs.copyright"
      class="Aside-copyright"
    />
  </aside>
</template>

<script>
import chroma from 'chroma-js'
import en from '@/i18n/en.json'
import ko from '@/i18n/ko.json'
import AsideHeader from './Aside/Header.vue'
import AsideCategory from './Aside/Category.vue'
import AsideSearch from './Aside/Search.vue'
import AsideCopyright from './Aside/Copyright.vue'

export default {
  name: 'TumblrAside',
  components: {
    AsideHeader,
    AsideCategory,
    AsideSearch,
    AsideCopyright
  },
  inheritAttrs: false,
  data() {
    return {
      en,
      ko
    }
  },
  methods: {
    setRandomColor() {
      const backgroundColor = chroma.random()

      document.body.style.backgroundColor = backgroundColor.luminance(0.75)
      document.body.style.color = chroma(backgroundColor).darken(3)
    }
  }
}
</script>

<style scoped>
.Aside {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2.5rem;
  font-size: 1.6rem;
}

.Aside-category,
.Aside-search {
  margin-top: 1.6rem;
}

.Aside-copyright {
  margin-top: auto;
}
</style>
