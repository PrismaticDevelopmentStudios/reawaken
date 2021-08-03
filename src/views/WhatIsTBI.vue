<template>
  <div class="page">
    <table>
      <tr>
        <td v-if="mobileView">
          <img
            src="@/assets/brain.jpeg"
            id="mobile-brain"
            alt="Image Unavailable"
          />
          <h1 class="t1">What is TBI?</h1>
          <div class="text">
            TBI, or traumatic brain injury, happens to far more people than you
            likely realize. Most commonly be incur a TBI from severe car
            accidents. Also one can get a TBI from playing sports such as
            footbal, mountain biking, motocross, riding horses, or simply
            slipping in the shower. A TBI is considered an invisible injury
            because sometimes TBI survivors may look uninjured, but because
            one's brain controls your entire body, there can be complications
            and issues with cognitiion and behavior.
          </div>
          <div class="text">
            TBI is often very difficult to manage and often many survivors need
            to be medically cleared in order to work and to drive. This can be
            frustrating because government services are not always immediately
            accessible. Surviving with a TBI is indeed very complicated and is
            difficult for not just the survivors, but also their loved oines and
            families.
          </div>
          <div class="text">
            Reawaken is intended to help get survivors back on their feet again
            by providing a safe space to begin working. This can inckude
            offering shorter shifts in order to prevent our survivors from
            becoming too fatigued. There are often many different physical or
            mental struggles that TBI survivors have to grapple with on a daily
            basis. But simply buying a cup of coffee from us can help to begin
            to make a difference in survivors lives, which is a big deal
            considering that getting a TBI often means that these survivors
            almost died.
          </div>
        </td>

        <td v-if="!mobileView">
          <img src="@/assets/brain.jpeg" id="brain" alt="Image Unavailable" />
          <h1 class="t1">What is TBI?</h1>
          <div class="text">
            TBI, or traumatic brain injury, happens to far more people than you
            likely realize. Most commonly be incur a TBI from severe car
            accidents. Also one can get a TBI from playing sports such as
            footbal, mountain biking, motocross, riding horses, or simply
            slipping in the shower. A TBI is considered an invisible injury
            because sometimes TBI survivors may look uninjured, but because
            one's brain controls your entire body, there can be complications
            and issues with cognitiion and behavior.
          </div>
          <div class="text">
            TBI is often very difficult to manage and often many survivors need
            to be medically cleared in order to work and to drive. This can be
            frustrating because government services are not always immediately
            accessible. Surviving with a TBI is indeed very complicated and is
            difficult for not just the survivors, but also their loved oines and
            families.
          </div>
          <div class="text">
            Reawaken is intended to help get survivors back on their feet again
            by providing a safe space to begin working. This can inckude
            offering shorter shifts in order to prevent our survivors from
            becoming too fatigued. There are often many different physical or
            mental struggles that TBI survivors have to grapple with on a daily
            basis. But simply buying a cup of coffee from us can help to begin
            to make a difference in survivors lives, which is a big deal
            considering that getting a TBI often means that these survivors
            almost died.
          </div>
        </td>
      </tr>
    </table>
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

<style coped>
.text {
  text-indent: 2em;
  text-align: left;
  margin-left: 3%;
  margin-right: 3%;
}
#brain {
  width: 25%;
  margin: 5%;
  float: left;
}
#mobile-brain {
  width: 45%;
  margin: 5%;
  float: left;
}
.inline {
  display: inline-block;
}
.page {
  margin-top: 1%;
}
</style>