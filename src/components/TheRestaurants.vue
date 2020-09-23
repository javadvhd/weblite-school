<template>
  <div class="hello">
    <h1>List of Restaurants</h1>
    <Table style="width:100%">
      <thead>
        <th>Name</th>
        <th>Address</th>
      </thead>
      <tbody>
        <tr
          class="restaurantItem"
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          v-on:click="showRestaurant(restaurant.id)"
        >
          <td>{{restaurant.name}}</td>
          <td>{{restaurant.address}}</td>
        </tr>
      </tbody>
    </Table>
  </div>
</template>

<script>
export default {
  name: "TheRestaurants",
  props: {
    restaurants: Array,
    showRestaurant: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
th,
td {
  border: 1px dashed black;
}
.restaurantItem {
  height: 50px;
  cursor: pointer;
}
</style>
