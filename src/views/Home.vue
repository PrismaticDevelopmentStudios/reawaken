<template>
  <div class="wrapper">
    <div v-if="mobileView" class="mobile">
      <div class="inline">
        <h1 class="title mobileT">The Reawaken Foundation</h1>
      </div>
      <div class="page text">
        <div class="inline">
          <img
            src="@/assets/cup-of-coffee.jpeg"
            id="coffee-pic"
            alt=""
            class="mobile-coffee"
          />
          <div class="p1">
            At Reawaken we fill a basic need (literally a cup of coffee). While
            serving you coffee, we are employing Traumatic Brain Injury
            survivors. Why buy just by a cup of coffee when you could get the
            same cup of coffee helping out people like our founder who was in a
            coma due to his TBI? Read more about what TBI is and how we are
            helping on the "What Is TBI" page.
          </div>
        </div>
        <br />
        <div class="inline p2">
          Aside from just serving coffee at your company or at your events, we
          also offer technical services to help give your business an edge in
          our digital world. We will consult with your business on what services
          you may need and how to effectively use media to grow and keep your
          business on the cutting edge. Aside from just consulting, we offer
          video and we design services to help produce thi cutting edge media
          for your business.
        </div>
        <br />
        <div class="inline p2">
          One of our aims is to help support other nonprofits and to open up our
          very own coffee shop where TBI survivors and other individuals with
          disabilities can hang out and better understand their disabilities.
          When you purchase a cup of coffee at an event where our foundation is
          working, money that we make goes to our fund where we help provide
          funds to pay for TBI survivors' medical debt and other expenses
          incurred as a result of getting a TBI. Rebounding from getting a TBI
          is nothing simple. It often takes multiple years for survivors to
          fully recover.
        </div>
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
                  Employing traumatic brain injury survivors
                </h3>
                <h3 class="p1">
                  <div class="big">3. Why:</div>
                  The money for our coffee goes to helping these survivors.
                </h3>
                <h4 class="p1">
                  We offer technical services to help give your business an edge
                  in our digital world. We consult on what services or media you
                  may need to effectively grow and keep your business on the
                  cutting edge. We offer video production, web design, web
                  development, and graphic design.
                </h4>
                <h4 class="p1">
                  All money we makegoesinto the Reawaken Fund which we use to
                  pay for TBI survivors' medical debt and other expenses
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
</style>
