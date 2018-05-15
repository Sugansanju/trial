<template>
  <div class="hello">
         <div class="card d-flex justify-content-center w3-animate-top">
             <div class="card-body">
         <h5 class="card-title text-center">Email verify</h5>

         <div class="input-field">
         <input type="email" id="email" class="input" style="margin:12px;" v-model="email" required>
             <!-- <span v-if="error">{{error}}</span> -->
             <label for="email" class="label" style="margin:12px;">Email</label>
         </div>
 <a href="javascipt:void(0);" @click="submitform" class="button blink update" role="button">Update</a>
 <a href="#/accountdetail" class="button blink skip" role="button" >Skip</a>
</div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email:null,
      error : ''
    }
  },
  methods : {
    submitform() {
       let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if(this.email=='' || this.email==null){
        alert(this.error = 'Please enter email!');
      }else if(reg.test(this.email)==false)
      {
alert(this.error = 'Please enter valid email address only!');
      } else{
this.$router.push({path:'/otp'});
      }   }
  }

}
</script>

<style >
body{
    /* background-color:var(--main-primary-color); */
    font-family:Arial Black;
    font-size: 15px;
}
.blink{
    width:28%;
    padding:10px;
}
.update{
    float:left;
}
.skip{
 float:right;
}
</style>
