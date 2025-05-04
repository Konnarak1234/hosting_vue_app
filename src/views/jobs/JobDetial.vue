<template>
  <h1>Job detail page</h1>
  <div v-if="job">
    <p>Job title: {{ job.title }}</p>
    <p>Job detail: {{ job.details }}</p>
    <p>Job title: {{ job.title }}</p>
  </div>
  <div v-else>
    <p>Loading page...</p>
  </div>

</template>

<script>
export default {
  data(){
    return {
      job: null
    }
  },
  props: ['id'],
  mounted(){
    fetch('http://localhost:3000/jobs/' + this.$props.id)
    .then(res => res.json())
    .then(data => this.job = data)
    .catch(e => console.log(e));
  }
}
</script>

<style>

</style>