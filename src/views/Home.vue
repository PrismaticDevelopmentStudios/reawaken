<template>
  <div class="wrapper">
    <div v-if="mobileView" class="mobile">
      <div class="inline">
        <h2 class="title mobileT">The Reawaken</h2>
        <h2 class="title mobileT">Foundation</h2>
      </div>
      <div class="page text">
        At Reawaken we fill a basic need (literally a cup of coffee). While
        serving you coffee, we are employing Traumatic Brain Injury survivors.
        Why buy just by a cup of coffee when you could get the same cup of
        coffee helping out people like our founder who was in a coma due to his
        TBI? Read more about what TBI is and how we are "helping"
        <a href="/whatistbi">here</a>.
        <br />
        Aside from just serving coffee at your company or at your events, we
        also offer technical services to help give your business an edge in our
        digital world. We will consult with your business on what services you
        may need and how to effectively use media to grow and keep your business
        on the cutting edge. Aside from just consulting, we offer video and we
        design services to help produce thi cutting edge media for your
        business.
        <br />
        One of our aims is to help support other nonprofits and to open up our
        very own coffee shop where TBI survivors and other individuals with
        disabilities can hang out and better understand their disabilities. When
        you purchase a cup of coffee at an event where our foundation is
        working, money that we make goes to our fund where we help provide funds
        to pay for TBI survivors' medical debt and other expenses incurred as a
        result of getting a TBI. Rebounding from getting a TBI is nothing
        simple. It often takes multiple years for survivors to fully recover.
      </div>
    </div>
    <div v-if="!mobileView" class="normal">
      <div class="home page mt">
        <div class="inline">
          <h2 class="t2">Welcome to</h2>
          <h1 class="title">The Reawaken</h1>
          <h1 class="title">Foundation</h1>
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
                <h4 class="p1">
                  At Reawaken we fill a basic need (literally a cup of coffee).
                  While serving you coffee, we are employing Traumatic Brain
                  Injury survivors. Why buy just by a cup of coffee when you
                  could get the same cup of coffee helping out people like our
                  founder who was in a coma due to his TBI? Read more about what
                  TBI is and how we are "helping"
                  <a href="/whatistbi">here</a>.
                </h4>
                <h4 class="p2">
                  Aside from just serving coffee at your company or at your
                  events, we also offer technical services to help give your
                  business an edge in our digital world. We will consult with
                  your business on what services you may need and how to
                  effectively use media to grow and keep your business on the
                  cutting edge. Aside from just consulting, we offer video and
                  we design services to help produce thi cutting edge media for
                  your business.
                </h4>
                <h4 class="p2">
                  One of our aims is to help support other nonprofits and to
                  open up our very own coffee shop where TBI survivors and other
                  individuals with disabilities can hang out and better
                  understand their disabilities. When you purchase a cup of
                  coffee at an event where our foundation is working, money that
                  we make goes to our fund where we help provide funds to pay
                  for TBI survivors' medical debt and other expenses incurred as
                  a result of getting a TBI. Rebounding from getting a TBI is
                  nothing simple. It often takes multiple years for survivors to
                  fully recover.
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
}
.page {
  height: fit-content;
  padding: 3%;
}
</style>
