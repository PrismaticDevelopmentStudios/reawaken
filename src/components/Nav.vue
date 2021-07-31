<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/whatistbi">TBI?</router-link> |
    <router-link to="/services">Services</router-link> |
    <router-link to="/contact">Info</router-link> |
    <!-- <router-link to="/partners">Partners</router-link> -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #000;
  border-radius: 5px;
}

#nav a:hover {
  color: #fff;
  border-bottom: solid 3px;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  border: solid 3px;
  padding: 3px;
}
</style>