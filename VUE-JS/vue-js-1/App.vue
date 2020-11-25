<template>
  <div>
    <add-todo
            :mas="mas"
    />
    <hr>
    <TodoList :mas="mas"/>
    <hr>
    <User/>

    </div>

</template>

<script>

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import User from "./components/User";





export default {
  data(){
    return{
      mas:['Locus', 'Terra', 'mars','Solis','Echo' ],
    }
  },
  name: 'APP',

  components: {
   TodoList,
   AddTodo,
    // eslint-disable-next-line vue/no-unused-components
    User,
  },

  methods:{

  }

}
</script>

<style>

</style>
