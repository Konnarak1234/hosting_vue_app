<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs'}">Job</router-link>
  </nav>
  <button v-on:click="redirect">Redirect</button>
  <button v-on:click="back">Go back</button>
  <button v-on:click="forward">Go forward</button>
  <router-view/>
</template>

<script>
export default{
  methods:{
    // web history api, programtically navigation
    redirect(){
      this.$router.push({ name: 'home'})
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 5px 0 5px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
}

button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
