<template>
  <v-app>
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="tittle">
      <v-col> 注文内容 </v-col>
    </div>
    <v-form class="form">
      <v-row>
        <v-col> 野菜 </v-col>
        <v-col> 重量 </v-col>
        <v-col> 受取日 </v-col>
        <v-col> 見積もり </v-col>
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
        <v-col> {{price}}円 </v-col>
      </v-row>
      <v-row class="button">
        <v-col>
          <v-btn @click="addForm()">フォーム追加</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="send()">送信</v-btn>
        </v-col>
      </v-row>
    </v-form>
=======
    <div class="head">
      <v-col></v-col>
    </div>
    <router-view/>
>>>>>>> ee1f1f3b745c589bfed456d2703dea639fdf66f1
=======
    <header>共通ヘッダー</header>
    <router-view></router-view>
    <footer>共通フッター</footer>
>>>>>>> 33cfc7e846aad18d438819ae21f1a9f8038dc84f
  </v-app>
</template>

<script>
export default {
  data() {
<<<<<<< HEAD
<<<<<<< HEAD
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
      this.text = `${year}${month}${day}`;
      this.menu = false;
      return;
    },
    addForm () {
      this.forms.push('')
    },
    send () {
      
    }
=======
  },
  methods: {
>>>>>>> ee1f1f3b745c589bfed456d2703dea639fdf66f1
  },
=======
  },
  methods: {
  },
  components : {
  }
>>>>>>> 33cfc7e846aad18d438819ae21f1a9f8038dc84f
};
</script>

<style>
.tittle {
  color: #000000;
  text-align: center;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
.head{
  text-align: center;
}
>>>>>>> ee1f1f3b745c589bfed456d2703dea639fdf66f1
=======
.head{
  text-align: center;
}
>>>>>>> 33cfc7e846aad18d438819ae21f1a9f8038dc84f
.form {
  text-align: center;
}
.button{
  text-align: center;
}
</style>
