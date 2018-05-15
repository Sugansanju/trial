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
      <input type="email" id="email" class="input" v-model="email"required>
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
<center> <a href="javascipt:void(0);" @click="validation" class="btn" role="button" style="margin:25px;">Signup</a></center>

</div>
</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            primarylogin:'email',
            email:null,
            name:null,
            error:''
        }
    },
    methods:{
        changeprimarylogin(){
            if(this.primarylogin=='email'){
                this.primarylogin='mobile'
            }else{
                this.primarylogin='email'
            }
        },
        validation(){
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       if(this.email=='' || this.email==null){
         alert(this.error = 'Please enter email!');
       }else if(reg.test(this.email)==false)
       {
    alert(this.error = 'Please enter valid email address only!');
}
 else{
    this.$router.push({path:'/otp'});
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
