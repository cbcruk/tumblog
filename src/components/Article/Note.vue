<template>
  <div class="Note">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Note'
}
</script>

<style scoped>
.Note {
  font-size: 1.4rem;
}

.Note > a {
  font-weight: bold;
}

.Note >>> .notes {
  list-style: inside;
}

.Note >>> .note {
  color: #5a5a5a;
}

.Note >>> .note:not(:first-child) {
  margin-top: 0.4rem;
}

.Note >>> .avatar_frame {
  display: none;
}

.Note >>> .action a {
  font-weight: bold;
}
</style>
