<template>
  <div class="page">
    <h1 class="t1">Contact/Calendar</h1>

    <div>
      <h3 class="inline">719-351-5828</h3>
      <h3 class="inline">
        <a href="mailto:reawakenfoundation@gmail.com"
          >reawakenfoundation@gmail.com</a
        >
      </h3>
    </div>
    <iframe
      v-if="mobileView"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=cmVhd2FrZW5mb3VuZGF0aW9uQGdtYWlsLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%230B8043"
      style="border: solid 1px #777"
      width="250"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      v-if="!mobileView"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=cmVhd2FrZW5mb3VuZGF0aW9uQGdtYWlsLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%230B8043"
      style="border: solid 1px #777"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return { mobileView: false };
  },
  components: {},
  methods: {
    mobile() {
      this.mobileView = window.innerWidth <= 990;
      console.log("mobile");
    },
  },
  created() {
    this.mobile();
  },
};
</script>

<style scoped>
.page {
  height: fit-content;
}
.inline {
  display: inline-block;
  margin-left: 1em;
}
h3 {
  margin: 0;
}
h1 {
  margin-bottom: 0;
}
</style>