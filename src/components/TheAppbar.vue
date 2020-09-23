<template>
  <div class="hello">
    <Button v-on:click="changePage('list')">لیست رستورانها</Button>
    <Button v-on:click="changePage('orders')">سفارش من</Button>
  </div>
</template>

<script>
export default {
  name: "TheAppbar",
  props: {
    changePage: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
