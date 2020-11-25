<template>
    <div>
        <h1>Contacts</h1>
        <ul v-for="(im,i) in my" :key="i" class="list-group">
            <li>
               Name: <span>{{im.name}}</span>
            </li>
            <li>
                Age: <span>{{im.age}}</span>
            </li>
            <li>
                Email: <span>{{im.email}}</span>
            </li>
            <li>
                city: <span>{{im.city}}</span>
            </li>
            <li>
                Phone: <span>{{im.phone}}</span>
            </li>
        </ul>

        <div style="width: 100%; margin-top: 50px" ><iframe width="100%" height="600"  frameborder="3" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=53.4301818,14.5509623+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm"></a></div>

    </div>
</template>

<script>


    export default {

       name: 'Contact',
        beforeMount() {
        this.$http.get('https://vue-lesson-c6273.firebaseio.com/my.json')
            .then((info) => {
                //console.log(info)
                return info.json()
            }).then((info)=>{
                Object.values(info).forEach(u => this.my.push(u))

        })
    },

        data(){
            return{
                user: {
                    name: '',
                    age: '',
                    email: '',
                    city:'',
                    phone:''
                },
                my:[]
            }
        },
        methods:{
            // datb(){
            //     this.$http.post('https://vue-lesson-c6273.firebaseio.com/my.json',this.user,)
            //     .then((res) =>{
            //         console.log(res)
            //     })
            //
            // },
            // info(id){
            //     this.$http.get()
            //     .then((res) => {
            //         //console.log(res)
            //         return res.json()
            //     }).then((res)=>{
            //         //console.log(res,'JSON')
            //         Object.values(res).forEach(u => this.my.push(u))
            //     })
            // }

        },
        comments:{

        }

    }


</script>
<style scoped>
    span{
        font-size: 20px;
        color: chocolate;
    }
    ul{
        margin-top: 25px;
        margin-left: 50px;
    }
    h1{
        margin-top: 25px;
        text-align: center;

    }

    li{
        list-style: none;

    }
</style>