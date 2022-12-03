<template>
    <v-app>
        <v-form class="form">
            <v-row justify="center" align-content="center" style="margin-top: 2vh">選択中: {{checkbox}} </v-row>
            <v-row class="checkbox">
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素1" value="要素1"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="checkbox">
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素2" value="要素2"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="checkbox">
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素3" value="要素3"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="checkbox">
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素4" value="要素4"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="checkbox">
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素5" value="要素5"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="checkbox">
                <v-col>
                    <v-checkbox v-model="checkbox" 
                    label="要素6" value="要素6"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="button" justify="center" align-content="center">
                <v-btn @click="showModal()">更新</v-btn>
                <v-dialog v-model="dialog" title="更新完了">
                    <v-card>
                        <v-card-text class="update">更新を完了しました</v-card-text>
                    </v-card>
                </v-dialog>
            </v-row>
            
        </v-form>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            checkbox: [], 
            dialog: false,
        };  
    },
    methods: {
        showModal(){
            this.dialog = true,
            this.checkbox = []
        },
    }
}
</script>

<style>
.checkbox{
    padding-left: 5vw;
}
.update{
    height: 3vh;
    text-align: center;
}
.form {
  text-align: center;
}
.button {
  text-align: center;
}
</style>
