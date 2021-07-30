<template>
  <div class="about page">
    <h1 class="t1">Partners:</h1>
    <span title="Click For Arise Beyond Barriers Website">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e7fb3986ea7d523fec39bd3/1593818682705-6ED6GC0ZY7OQDV0HJ4ZL/arise-logo-300.jpg?format=1500w"
        alt="Arise Beyond Barriers"
        @click="go"
      />
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      window.open("https://arisebeyondbarriers.com/", "_blank");
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
