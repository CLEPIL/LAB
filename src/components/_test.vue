<template>
    <v-app>
        <v-form class="form">
            <v-row>選択中: {{checkbox}} </v-row>
            <v-row>
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素1" value="要素1"></v-checkbox>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素2" value="要素2"></v-checkbox>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素3" value="要素3"></v-checkbox>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素4" value="要素4"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="button">
                <v-btn><router-link to="/comp">送信</router-link></v-btn>
            </v-row>
        </v-form>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            checkbox: [], 
        };
    }
}
</script>

<style>
.form {
  text-align: center;
}
.button {
  text-align: center;
}
</style>
