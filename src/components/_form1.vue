<template>
  <v-app>
    <v-form class="form">
      <v-row>
        <v-col> 野菜 </v-col>
        <v-col> 数量 </v-col>
        <v-col> 受取日 </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select :items="items"> </v-select>
        </v-col>
        <v-col>
          <v-text-field></v-text-field>
        </v-col>
        <v-col>
          <v-menu v-model="menu">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="text"
                v-bind="attrs"
                v-on="on"
                label="ここから選択"
                readonly
                clearable
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="picker" @input="formatDate(picker)">
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row class="button">
        <v-col>
          <v-btn @click="copy(index)">フォーム追加</v-btn>
        </v-col>
        <v-col>
          <v-btn><router-link to="/comp">送信</router-link></v-btn>
        </v-col>
      </v-row>
    </v-form>
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
      price: "200",
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
  },
};
</script>
  
  <style>
.tittle {
  color: #000000;
  text-align: center;
}
.form {
  text-align: center;
}
.button {
  text-align: center;
}
</style>
  