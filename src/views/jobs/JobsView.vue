<template>
    <h1>job</h1>
    <div v-if="jobs">
         <div v-for="job in jobs" :key="job.id" class="job">
            <router-link v-bind:to="{ name: 'jobDetial', params: {id: job.id} }">
                <h2>{{job.title }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>Loading page...</p>
    </div>
   
</template>

<script>
export default {
    data(){
        return {
            jobs: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(e => console.log(e.message));
    }
}
</script>

<style>
.job h2{
    background: #f4f4f4;
    padding: 20px;
    max-width: 600px;
    margin: 10px auto;
    color: #444;
    border-radius: 20px;
    cursor: pointer;
}

.job h2:hover{
    background: #ddd;
}


.job a{
    text-decoration: none;
}
</style>