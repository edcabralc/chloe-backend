<template>
  <MainHeader />
  <main>
    <section class="feedback-hero cover-background">
      <h1 class="feedback-title">Confortável como um Abraço!</h1>
    </section>

    <div class="container-feedback">
      <div class="content-feedback">
        <div>
          <h2>Standard</h2>
        </div>
      </div>
    </div>
    <div class="content-form">
        <FormFeedback />
    </div>
  </main>
  <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import FormFeedback from "@/components/FormFeedback.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "DeluxeView",
  components: {
    MainHeader,
    FormFeedback,
    MainFooter,
  },
};
</script>

<style src="./style.scss" lang="scss" />
