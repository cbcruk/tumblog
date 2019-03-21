<template>
  <article class="Article">
    <div class="Article-content">
      <ArticleFigure
        v-bind="$attrs"
        :permal-link="permalLink"
      />
    </div>

    <footer class="Article-footer">
      <ArticleTags :tags="tags" />
      <ArticleNote
        :class="{
          'is-permal': isPermal
        }"
      >
        <slot
          v-if="hasNoteSlot"
          name="notes"
        />
        <a
          v-else
          :href="permalLink"
        >
          {{ noteCount }}
        </a>
      </ArticleNote>

      <ArticleShare
        v-if="isPermal"
        :reblog-url="reblogUrl"
        :date="date"
        class="Article-share"
      >
        <template slot="share-like">
          <slot name="share-like" />
        </template>
      </ArticleShare>
    </footer>
  </article>
</template>

<script>
import ArticleFigure from './Article/Figure.vue'
import ArticleTags from './Article/Tags.vue'
import ArticleNote from './Article/Note.vue'
import ArticleShare from './Article/Share.vue'

export default {
  name: 'TumblrArticle',
  components: {
    ArticleFigure,
    ArticleTags,
    ArticleNote,
    ArticleShare
  },
  inheritAttrs: false,
  props: {
    tagsText: {
      type: Array,
      default() {
        return []
      }
    },
    tagsUrl: {
      type: Array,
      default() {
        return []
      }
    },
    noteCount: {
      type: String,
      default: ''
    },
    permalLink: {
      type: String,
      default: ''
    },
    reblogUrl: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    tags() {
      return this.tagsText.map((text, index) => {
        const url = this.tagsUrl[index]

        return {
          text,
          url
        }
      })
    },
    hasNoteSlot() {
      return this.$slots.notes
    },
    hasPermalLink() {
      return Boolean(this.permalLink)
    },
    isPermal() {
      return !this.hasPermalLink
    }
  }
}
</script>

<style scoped>
.Article {
  font-size: 1.4rem;
}

.Article-footer {
  margin-top: 1.6rem;
  color: #a7a7a7;
}

.Article-footer >>> a:hover {
  color: #8c8c8c;
}

.Article-footer >>> .Note {
  margin-top: 0.8rem;
}

.Article-footer >>> .Note.is-permal {
  margin-top: 1.6rem;
}

.Article-share {
  margin-top: 1.6rem;
}
</style>
