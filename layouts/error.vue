<template>
  <v-row align="center" justify="center">
    <v-col cols="12" class="text-center">
      <h1
        v-if="error.statusCode === 404"
        class="display-2 primary--text"
      >
        {{ pageNotFound }}
      </h1>
      <h1
        v-else
        class="display-2 primary--text"
      >
        {{ otherError }}
      </h1>

      <p>The page you were looking for does not exist</p>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
