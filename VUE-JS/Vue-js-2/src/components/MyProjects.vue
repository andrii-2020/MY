<template>
    <div>
        <div><label>NAME:-</label>
            <input type="text" v-model="users.name" >
        </div>
        <div><label>AGE:-</label>
            <input type="text" v-model="users.age">
        </div>
        <div><label>EMAIL:-</label>
            <input type="text" v-model="users.email" >
        </div>
        <div><label>CITY:-</label>
            <input type="text" v-model="users.city" >
        </div>
        <div><label>PHONE:-</label>
            <input type="text" v-model="users.phone">
        </div>
        <div>
        </div>
        <button @click="datb" type="button" class="btn btn-success">ADD--DB</button>
        <hr>
        <ul v-for="(pol,i) in user" :key="i">
            <div>USER</div>
            <li>

                {{pol.name}}
                {{pol.age}}
                {{pol.email}}
                {{pol.city}}
                {{pol.phone}}

                <button type="button" class="btn btn-outline-danger">DELET</button>
            </li>
        </ul>
    </div>
</template>


<script>


    export default {
        name: 'MyProjects',

        beforeMount() {
            this.$http.get('https://vue-lesson-c6273.firebaseio.com/users.json')
                .then((res) => {
                    return res.json()
                }).then((res)=>{
                Object.values(res).forEach(u => this.user.push(u))

            })
        },

        data()  {
            return{
                del:'',
                users: {
                    name: '',
                    age: '',
                    email: '',
                    city:'',
                    phone:'',
                },
                user:[],

            }
},
        methods:{
            datb(){
                this.$http.post('https://vue-lesson-c6273.firebaseio.com/users.json',this.users,)
                .then((res) =>{
                    console.log(res)
                })
            },



            }


    }


</script>
