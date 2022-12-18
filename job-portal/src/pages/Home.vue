<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">Find your Dream jobs</p>
      <p class="subtitle">Start hunting</p>
    </div>
  </section>
  <NewVacancy />

  <VacancyView v-for="vacancy in vacancies" :key="vacancy.id" :vacancy="vacancy"/>
</template>

<script>
import NewVacancy from "../components/NewVacancy.vue";
import VacancyView from "../components/VacancyView.vue";
import { vacancies } from "../../data";

export default {
  components: { NewVacancy, VacancyView },
  data() {
    return {
      vacancies,
    };
  },
};
</script>

<style lang="scss" scoped></style>
