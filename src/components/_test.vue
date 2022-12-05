<template>
    <v-app>
        <v-form class="form">
            <v-row class="isCheck">選択中: {{checkbox}} </v-row>            
            <v-row>
                <v-col
                    class="checkbox"
                    v-for="list in lists"
                    :key="list.name"
                    :cols="11"
                >
                <v-checkbox 
                    
                    v-model="checkbox"
                    :label="list.name" 
                    :value="list.name"></v-checkbox>
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
            lists: [
                {selected: 0, name: "要素1"}, 
                {selected: 0, name: "要素2"}, 
                {selected: 0, name: "要素3"},
                {selected: 0, name: "要素4"},
                {selected: 0, name: "要素5"},
                {selected: 0, name: "要素6"},
            ],
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
.isCheck{
    padding-top: 2vh;
    justify-content: center;
}
.checkbox{
    padding-left: 50px;
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
