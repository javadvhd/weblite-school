<template>
  <div>
    <h1>List of my orders</h1>
    <Table style="width:100%">
      <thead>
        <th>name</th>
      </thead>
      <tbody>
        <tr class="order" v-for="select in userSelects" :key="select.id">
          <td>{{select.name}}</td>
        </tr>
      </tbody>
    </Table>
  </div>
</template>

<script>
export default {
  name: "TheOrders",
  props: {
    userSelects: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
tr,
td {
  border: 1px dashed black;
}
.order {
  height: 30px;
}
</style>
