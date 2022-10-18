<template>
  <v-app>
    <div class="tittle">
      <v-col>
        注文内容
      </v-col>
    </div>
    <div class="form">
      <v-row>
        <v-col>
          1
        </v-col>
        <v-col>
          2
        </v-col>
        <v-col>
          3
        </v-col>
        <v-col>
          4
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          1
        </v-col>
        <v-col>
          <v-select :items="items">
          </v-select>
        </v-col>
        <v-col>
          3
        </v-col>
        <v-col>
          4
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
  export default {
    data () {
      return{
        items:['1','2'],
      }
    }
  }
</script>

<style>
.tittle{
  color: #000000;
  text-align: center;
}
.form{
  text-align: center;
}
</style>
