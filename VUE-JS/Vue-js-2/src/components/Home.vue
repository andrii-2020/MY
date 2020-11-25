<template>
    <div >

        <div id="card">
            <div>
                <img src="@/image/haker1.gif" class="imag">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, exercitationem!</p>
            </div>

            <div class="cv">
                <img src="@/image/haker1.gif" class="imag">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, exercitationem!</p>
            </div>

            <div>
                <img src="@/image/haker1.gif" class="imag">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, exercitationem!dasdasdasdasdasd</p>

            </div>

        </div>


    </div>

</template>



<script>
    export default {
        name: 'Home',


    }


</script>


<style scoped>

    #card{
        display: flex;
        justify-content: space-between;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 25px;
        width: auto;

    }

p{
    width: 300px;
    display: block;
    text-align: center;
}

    .imag{

        background-size: cover;
        background-repeat: no-repeat;
        width: 300px;
        height: 400px;
}
    body{
        background: black;
    }

</style>