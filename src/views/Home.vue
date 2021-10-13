<template>
  <div class="home">
    {{ $t("message.hello") }}
    <router-link to="/select-cell" class="button main-button">{{$t("home.selectCell")}}</router-link> <br>
    <router-link to="/select-cell" class="button main-button">{{$t("home.getLuggage")}}</router-link>
  </div>
</template>
<script>

export default {
  name: 'Home',
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