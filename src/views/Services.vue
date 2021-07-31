<template>
  <div>
    <div v-if="mobileView">
      <table class="mobileT">
        <tr>
          <th>Web Design</th>
          <th>Content Creation</th>
          <th>Technical/Business Consulting</th>
        </tr>
        <tr>
          <td>Word Press Website Design and template picking/editing.</td>
          <td>
            Creation, editing, and advising in regards to adding web content to
            you or your business's website.
          </td>
          <td>
            Consultation to help plan your company's digital media and digital
            presence.
          </td>
        </tr>
        <tr>
          <td>
            Do you need help creating a website? In this day and age it is
            absolutely necessary to build a website and have content where
            clients/users can get involved with and learn about what services
            you offer.
          </td>
          <td>
            Lets say you already have a website, you likely need to update your
            website with relevant content that matches the aesthetic style that
            yiou want to deliver to customers and slients of your business.
          </td>
          <td>
            How do you want your business to be seen and observed by others? We
            will help with consulting in regards to what technology or other
            services you might require in order to serve your customers/clients
            effectively.
          </td>
        </tr>
        <tr>
          <td>Updating or editing of non Wordpress websites.</td>
          <td>Video production/editing</td>
          <td>
            Technical consulting in regards to setting up your business. WIFI
            planning & setup./ Set up, use and storage of video equipment.
          </td>
        </tr>
      </table>
    </div>
    <div class="services page" v-if="!mobileView">
      <h1 class="t1">Services</h1>
      <!-- <img id="media" src="@/assets/media.png" alt="Pic unavailable" /> -->
      <table class="reg">
        <tr>
          <th>Web Design</th>
          <th>Content Creation</th>
          <th>Technical/Business Consulting</th>
        </tr>
        <tr>
          <td>Word Press Website Design and template picking/editing.</td>
          <td>
            Creation, editing, and advising in regards to adding web content to
            you or your business's website.
          </td>
          <td>
            Consultation to help plan your company's digital media and digital
            presence.
          </td>
        </tr>
        <tr>
          <td>
            Do you need help creating a website? In this day and age it is
            absolutely necessary to build a website and have content where
            clients/users can get involved with and learn about what services
            you offer.
          </td>
          <td>
            Lets say you already have a website, you likely need to update your
            website with relevant content that matches the aesthetic style that
            yiou want to deliver to customers and slients of your business.
          </td>
          <td>
            How do you want your business to be seen and observed by others? We
            will help with consulting in regards to what technology or other
            services you might require in order to serve your customers/clients
            effectively.
          </td>
        </tr>
        <tr>
          <td>Updating or editing of non Wordpress websites.</td>
          <td>Video production/editing</td>
          <td>
            Technical consulting in regards to setting up your business. WIFI
            planning & setup./ Set up, use and storage of video equipment.
          </td>
        </tr>
      </table>
    </div>
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
.reg {
  margin-left: auto;
  margin-right: auto;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.reg td,
.reg th {
  border: 1px solid #ddd;
  padding: 8px;
}

.reg tr:nth-child(even) {
  background-color: #f2f2f2;
}

.reg td:hover {
  background-color: #ddd;
}

.reg th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
#media {
  width: 25%;
}
.mobileT {
  background: white;
}
.mobileT {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.mobileT td,
.mobileT th {
  border: 1px solid #ddd;
  padding: 8px;
  padding-left: 0;
}

.mobileT tr:nth-child(even) {
  background-color: #f2f2f2;
}

.mobileT tr:nth-child(odd) {
  background-color: white;
}

.mobileT td:hover {
  background-color: #ddd;
}

.mobileT th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>