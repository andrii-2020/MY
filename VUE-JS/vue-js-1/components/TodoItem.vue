<template>
    <div>

        <p>{{arr}}</p>

    </div>


</template>

<script>
    export default {
        name:'TodoItem',
        props:['arr'],

        data(){
            return{

            }

        },
        methods:{
          
        }
    }
</script>

<style>
    p{
        font-size: 25px;
        color: darkgreen;
    }

</style>