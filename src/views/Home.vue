<template>
  <div class="wrapper">
    <div v-if="mobileView" class="mobile">
      <div class="inline">
        <h1 class="title mobileT">The Reawaken Foundation</h1>
      </div>
      <div class="page text">
        <div class="inline">
          <img src="@/assets/cup-of-coffee.jpeg" alt="" class="mobile-coffee" />
        </div>
        <h3 class="p1">
          <div class="big">1. What:</div>
          Coffee service for events
        </h3>
        <h3 class="p1">
          <div class="big">2. Who:</div>
          We employ traumatic brain injury survivors
        </h3>
        <h3 class="p1">
          <div class="big">3. Why:</div>
          The money for our coffee goes to helping these survivors.
        </h3>
        <h4 class="p1">
          All money we makegoesinto the Reawaken Fund which we use to pay for
          TBI survivors' medical debt and other expenses incurred as a result of
          getting thir TBIs. Rebounding from getting a TBI is nothing simple. It
          often takes multiple years for survivors to fully recover. Simply
          having us serve coffee at an event helps TBI survivors.
        </h4>
      </div>
    </div>
    <div v-if="!mobileView" class="normal">
      <div class="home page mt">
        <div class="inline">
          <h2 class="t2">Welcome to the</h2>
          <h1 class="title">Reawaken Foundation</h1>
          <h3 class="t2">&rarr; We Serve Coffee With a Purpose.</h3>
        </div>
        <div class="parent inline">
          <img
            src="@/assets/cup-of-coffee.jpeg"
            id="coffee-pic"
            class="inline"
            alt="Image unavailable"
          />
          <div class="inline">
            <table>
              <tr>
                <h3 class="p1">
                  <div class="big">1. What:</div>
                  Coffee service for events
                </h3>
                <h3 class="p1">
                  <div class="big">2. Who:</div>
                  We employ traumatic brain injury survivors
                </h3>
                <h3 class="p1">
                  <div class="big">3. Why:</div>
                  The money for our coffee goes to helping these survivors.
                </h3>
                <h4 class="p1">
                  The cost of our coffee goes to the Reawaken Fund which, we use
                  to pay for TBI survivors' medical debt and other expenses
                  incurred as a result of getting thir TBIs. Rebounding from
                  getting a TBI is nothing simple. It often takes multiple years
                  for survivors to fully recover. Simply having us serve coffee
                  at an event helps TBI survivors.
                </h4>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
.inline {
  display: flex;
}
#coffee-pic {
  width: 40%;
}
.parent {
  display: flex;
}
.mt {
  margin-top: 1%;
}
.mobileT {
  margin-top: 1%;
  margin-right: 1%;
  size: 0.8em;
}
.big {
  font-size: 2em;
}
.mobile-coffee {
  width: 80%;
  margin: 0 auto;
}
</style>
