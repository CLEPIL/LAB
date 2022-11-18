<template>
    <div>
        <v-checkbox
      v-model="checkbox"
      :label="`Checkbox 1: ${checkbox.toString()}`"
    ></v-checkbox>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        checkbox: true,
      }
    },
  }
</script>