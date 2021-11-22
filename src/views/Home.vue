<template>
  <div class="home">
    <router-link to="/select-cell" class="button main-button">{{$t("home.selectCell")}}</router-link> <br>
    <router-link to="/baggage-claim" class="button main-button">{{$t("home.getLuggage")}}</router-link>
  </div>
</template>
<script>

export default {
  name: 'Home',
  created() {
    this.$store.commit('reset')
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.main-button {
  width: 400px;
  height: 150px;
  font-size: 40px;
  margin-bottom: 30px;
}

</style>