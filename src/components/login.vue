<template>
  <div class="hello">
         <div class="card d-flex justify-content-center w3-animate-top">
             <div class="card-body">
         <h5 class="card-title text-center">Signin</h5>
<!-- <div class="input-field" v-if="primarylogin=='mobile'">

    <input type="text" id="mobile" class="input" required>
    <label for="mobile">Mobile</label>
</div>
<div class="input-field" v-if="primarylogin=='email'">
    <input type="email" id="email" class="input" required>
    <label for="email">Email</label>
</div> -->
<div class="input-field">
    <input type="email" id="email" class="input" required>
    <label for="email" class="label">Email/Mobile</label>
</div>
<div class="input-field">
    <input type="password" id="password" class="input" required>
    <label for="password" class="label">password</label>
</div>
<a href="" class="forgot-pw llink">Forgot Password ?</a>
 <!-- <a href="" class="forgot-pw text-primary">Forgot Password ?</a> -->
 <!-- <span class="instead text-center text-primary" style="cursor:pointer;" v-if="primarylogin=='email'" @click="changeprimarylogin">Use Phone</span>
 <span class="instead text-center text-primary" style="cursor:pointer;" v-if="primarylogin=='mobile'" @click="changeprimarylogin">Use Email</span> -->
<center><a href="#/signup " class="btn bclink align-self-center" role="button" style="margin:25px;">Signin</a></center>
</div>

</div>
<p class="mt-3 text-center">
        New user?
        <a  href="#/signup">Create an account</a><br>
      </p>

  </div>
</template>

<script>
export default {
    // data(){
    //     return{
    //         primarylogin:'email'
    //     }
    // },
    // methods:{
    //     changeprimarylogin(){
    //         if(this.primarylogin=='email'){
    //             this.primarylogin='mobile'
    //         }else{
    //             this.primarylogin='email'
    //         }
    //     }
    // }

}
</script>

<style >
body{
    /* background-color:var(--main-primary-color); */
    font-family:Arial Black;
    font-size: 15px;
    width:100%;
    height:100%;
    margin:12px;
}
.forgot-pw{
 font: 600 14px/1 'Roboto',sans-serif;
 float:right;
 margin:0 0 25px 0;
 display:block;
}
</style>
