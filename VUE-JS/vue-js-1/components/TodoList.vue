<template>
    <div>
    <h1>TodoList</h1>
    <div v-for="(arr,i) in mas" :key="i" >
        <b-button @click="spoil" >DELETE</b-button>
        <TodoItem :arr="arr" />

    </div>

    </div>
</template>

<script>




import TodoItem from "./TodoItem";

export default {
    name:'TodoList',
    props:['mas'],


    components: {TodoItem},
    comments:{
        TodoItem
    },
    methods:{
        spoil(){
            this.$emit(this.mas.splice(-1))
        }
    }

}
</script>