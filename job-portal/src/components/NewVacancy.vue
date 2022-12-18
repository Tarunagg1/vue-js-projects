<template>
  <div>
    <div class="box">
      <h1 class="title is-5">Create a vacancy</h1>
      <form @submit="handelSubmit">
        <input
          v-model="form.title"
          class="input is-primary"
          type="text"
          placeholder="job title"
          required
        />
        <input
          v-model="form.company"
          class="input is-primary"
          type="text"
          placeholder="company name"
          required
        />
        <input
          v-model="form.city"
          class="input is-primary"
          type="text"
          placeholder="city name"
          required
        />
        <textarea
          v-model="form.description"
          class="input is-primary"
          type="text"
          placeholder="description"
          required
        ></textarea>
        <button class="button is-primary mt-5">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        company: "",
        city: "",
        description: "",
      },
    };
  },
  methods:{
    handelSubmit(){
        
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
}
</style>
