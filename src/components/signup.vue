<template>
  <div class="hello">
         <div class="card d-flex justify-content-center w3-animate-top">
             <div class="card-body">
         <h5 class="card-title text-center">Signup</h5>
  <div class="input-field">
    <input type="text" id="name" required >
    <label for="name">Name</label>
  </div>
  <div class="input-field" v-if="primarylogin=='email'">
      <input type="email" id="email" required>
      <label for="email">Email</label>
  </div>
<div class="input-field" v-if="primarylogin=='mobile'">
    <input type="text" id="mobile" required>
    <label for="mobile">Mobile</label>
</div>

<div class="input-field">
    <input type="password" id="password" required>
    <label for="password">password</label>
</div>
<center> <a href="#/signup" class="btn blink" role="button" style="margin:12px;">Signup</a></center>
 <a href="" class="forgot-pw llink">Forgot Password ?</a>
<span  class="instead" style="margin:30px;cursor:pointer;" v-if="primarylogin=='email'" @click="changeprimarylogin">UsePhone</span>
<span  class="instead" style="margin:30px;cursor:pointer;" v-if="primarylogin=='mobile'" @click="changeprimarylogin">Use Email</span>
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
    background-color:var(--main-primary-color);
    font-family:initial;
    font-size:20px;
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
