<template>
   <div>
       <b-col sm="3">
           <b-form-input
                   v-model="name"
                   placeholder="name"
                   id="input-live"
                   :state="nameState"
           >
           </b-form-input>



       <b-form-input
               type="email"
               v-model="email"
               placeholder="email"
               :state="nameState"
       >
       </b-form-input>


       <b-form-input
               type="password"
               v-model="password"
               placeholder="password"
               :state="nameState"
       >
       </b-form-input>


           <b-form-input
                   type="tel"
                   v-model="tel"
                   placeholder="tel"
                   :state="nameState"
           >
           </b-form-input>
           <b-form-radio
                   v-model="selected"
                   name="radios"
                   value="YES"
           >YES

           </b-form-radio>
           <b-form-radio
                   v-model="selected"
                   name="radios"
                   value="NO"
           >NO

           </b-form-radio>



       </b-col>
        <b-button
                variant="primary"
                @click="log" :class="'btn1'"
        >LOG</b-button>

   </div>
</template>

<script>
    export default {


        computed:{
            nameState(){

                return this.name.length > 2 ? true : false

            },

        },

        data() {
            return {
                selected:[''],
                name:'',
                email:'',
                password:'',
                tel:'',
            }
        },

        name:'User',
        methods:{
            log(){
                console.log(this.name)
                console.log(this.email)
                console.log(this.password)
                console.log(this.tel)
                console.log(this.selected)
            }

        },

    }



</script>

<style scoped>

.btn1{
    margin-top: 20px;
    margin-left: 25%;
}


</style>