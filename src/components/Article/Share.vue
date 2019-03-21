<template>
  <div class="Share">
    <span class="Share-date">
      {{ date }}
    </span>

    <slot name="share-like" />

    <a :href="reblogUrl">
      Reblog
    </a>
  </div>
</template>

<script>
export default {
  name: 'Share',
  props: {
    reblogUrl: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.Share {
  display: flex;
  justify-content: flex-end;
  width: 400px;
}

.Share >>> *:not(:first-child) {
  margin-left: 0.8rem;
}

.Share-date {
  margin-right: auto;
}

.Share >>> .like_button {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.Share >>> .like_button:hover {
  text-decoration: underline;
  color: #8c8c8c;
}

.Share >>> .like_button::before {
  content: 'Like';
}

.Share >>> .like_button.liked::before {
  content: 'Liked';
}

.Share >>> .like_button iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 100%;
}

.Share >>> .like_button.liked iframe {
  display: none;
}
</style>
