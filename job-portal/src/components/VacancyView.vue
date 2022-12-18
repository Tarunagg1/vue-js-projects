<template>
  <div class="box mt-5 mb-4">
    <h1 class="title is-5">{{vacancy.title}}</h1>
    <span>{{vacancy.company}}</span>
    <p>{{vacancy.city}}</p>
    <div class="block"></div>
    <p>
      {{vacancy.description}}
    </p>
    <button class="button is-primary mt-4">Apply</button>
  </div>
</template>

<script>
export default {
  name: "VacancyView",
  props: {
    vacancy: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
