<template>
  <form
    action="/search"
    method="get"
    class="Search"
  >
    <label
      for="search"
      class="Search-label"
    >
      {{ $i18n.search_keywords }}
    </label>

    <input
      id="search"
      type="search"
      name="q"
      class="Search-input"
    >

    <button
      type="submit"
      class="Search-submit"
    >
      {{ $i18n.search }}
    </button>
  </form>
</template>

<script>
import upperFirst from 'lodash/upperFirst'

export default {
  name: 'Search',
  computed: {
    types() {
      return [
        'text',
        'photo',
        'quote',
        'link',
        'chat',
        'audio',
        'video',
        'answer'
      ].map(upperFirst)
    }
  }
}
</script>

<style scoped>
.Search {
  display: flex;
  flex-direction: column;
}

.Search-input {
  height: 3rem;
  padding: 0.2rem;
  margin-top: 0.8rem;
  -webkit-appearance: textfield;
}

.Search-submit {
  align-self: flex-start;
  margin-top: 0.8rem;
  padding: 0.9rem 1.2rem;
  border: 0px;
  border-radius: 3px;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1;
}
</style>
