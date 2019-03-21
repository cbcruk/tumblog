<template>
  <p class="Copyright">
    {{ copyright }}
  </p>
</template>

<script>
export default {
  name: 'Copyright',
  props: {
    copyright: {
      type: String,
      default: ''
    }
  }
}
</script>
