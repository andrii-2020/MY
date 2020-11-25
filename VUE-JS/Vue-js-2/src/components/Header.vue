<template>
    <div>
        <ul class="nav justify-content-center ">
            <li class="nav-item">
                <router-link class="nav-link " active-class="link"  to="/my">MyProjects</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" active-class="link"  to="/contact">Contact</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" active-class="link"  to="/home">Home</router-link>
            </li>
<!--            <li class="nav-item">-->
<!--                <router-link class="nav-link" active-class="link" exact to="/">localhost</router-link>-->
<!--            </li>-->
        </ul>




    </div>
</template>

<script>
    export default {
        name: 'Header',


    }


</script>

<style>
   .link{
       margin-top: 5px;
       background: rgba(0, 255, 255, 0.1);
       border: 1px solid black;
       border-radius: 15px;
       color: #000000;
   }

</style>