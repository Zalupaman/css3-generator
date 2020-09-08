<template>
  <div>
    <v-text-field @keyup="updateBorder()" :label="firstValueName" v-model="upperLeft">s</v-text-field>
  </div>
</template>

<script>
export default {
  name: "input-BoxShadow"
}
</script>

<style scoped>

</style>