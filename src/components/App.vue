<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: ["野菜1", "野菜2", "野菜3"],
      g: ["250", "500", "750", "1000"],
      menu: "",
      text: "",
      picker: "",
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.text = `${year}/${month}/${day}`;
      this.menu = false;
      return;
    },
    addForm () {
      this.forms.push('')
    },
    send () {
      
    }
  },
};
</script>

<style>
.tittle {
  color: #000000;
  text-align: center;
}
.head{
  text-align: center;
}
.form {
  text-align: center;
}
.button{
  text-align: center;
}
</style>
