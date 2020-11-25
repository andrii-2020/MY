<template>
    <div>
        <h4>ENTER ADD</h4>
        <b-input v-model="text"  v-on:keyup.enter ="add"  type="text"  ></b-input >
        <b-button @click="addBtn" >ADD</b-button>
    </div>
</template>



<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';



export default {
    data(){
        return{
            text:'',


      }
    },
    name:'AddTodo',
    props:['mas'],

    methods: {
        add() {
            this.mas.push(this.text)
            this.text='';
        },
        addBtn(){

            this.mas.push(this.text)

        }

    }
}
</script>