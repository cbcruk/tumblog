<template>
  <figure class="Figure">
    <a
      :href="permalLink"
      class="Figure-link"
    >
      <img
        class="Figure-image"
        :src="image"
        alt=""
      >
    </a>

    <figcaption class="Figure-caption">
      <a
        :href="source"
        target="_blank"
      >
        {{ caption }}
      </a>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'Figure',
  props: {
    image: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    },
    permalLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.Figure-link {
  display: block;
  max-width: 400px;
  height: 100%;
}

.Figure-caption {
  margin-top: 0.8rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>