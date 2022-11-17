<template>
  <v-container class="form">
    <v-row>
      <v-col>注文一覧</v-col>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="items">
          <template #[`item.age`]="{ item }">
            <v-text-field v-model="item.age" />
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <router-link to="/res">取消</router-link>
      </v-col>
      <v-col>
        <router-link to="/res">更新</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "ID",
          value: "id",
        },
        {
          text: "野菜",
          value: "name",
        },
        { text: "数量", value: "age" },
        { text: "受取日時", value: "date" },
      ],
      items: [
        {
          id: 1,
          name: "リーキ",
          age: 33,
          date: "11/11",
        },
        {
          id: 2,
          name: "馬鈴薯",
          age: 42,
          date: "11/12",
        },
        {
          id: 3,
          name: "とうもろこし",
          age: 10,
          date: "11/13",
        },
      ],
    };
  },
  methods: {
    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("この注文を承認しますか？") && this.items.splice(index, 1);
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
  