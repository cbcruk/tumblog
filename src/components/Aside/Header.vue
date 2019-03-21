<template>
  <div class="Header">
    <h1 class="Header-title">
      <a
        href="/"
        title="{lang:Home}"
      >
        {{ title }}
      </a>
    </h1>

    <p class="Header-desc">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

