<template>
  <div class="hello">
         <div class="card d-flex justify-content-center w3-animate-top">
             <div class="card-body">
         <h5 class="card-title text-center">Signup</h5>
  <div class="input-field">
    <input type="text" id="name" class="input" required >
    <label for="name" class="label" >Name</label>
  </div>
  <div class="input-field" v-if="primarylogin=='email'">
      <input type="email" id="email" class="input" required>
      <label for="email" class="label">Email</label>
  </div>
<div class="input-field" v-if="primarylogin=='mobile'">
    <input type="text" id="mobile" class="input" required>
    <label for="mobile" class="label">Mobile</label>
</div>

<div class="input-field">
    <input type="password" class="input" id="password" required>
    <label for="password" class="label">password</label>
</div>
<a href="" class="forgot-pw llink">Forgot Password ?</a>
<span class="instead text-center text-primary" style="cursor:pointer;" v-if="primarylogin=='email'" @click="changeprimarylogin">Use Phone</span>
<span class="instead text-center text-primary" style="cursor:pointer;" v-if="primarylogin=='mobile'" @click="changeprimarylogin">Use Email</span>
<center> <a href="#/otp" class="btn blink" role="button" style="margin:25px;">Signup</a></center>
</div>
</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            primarylogin:'email'
        }
    },
    methods:{
        changeprimarylogin(){
            if(this.primarylogin=='email'){
                this.primarylogin='mobile'
            }else{
                this.primarylogin='email'
            }
        }
    }
}
</script>

<style >
body{
    /* background-color:var(--main-primary-color); */
    font-family:Arial Black;
    font-size: 15px;
}
form {
  margin:100px;
}
.forgot-pw{
 font: 600 14px/1 'Roboto',sans-serif;
 float:right;
 margin:0 0 25px 0;
 display:block;
}
.instead{
    font: 600 14px/1 'Roboto',sans-serif;
}
</style>
