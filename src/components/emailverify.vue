<template>
  <div class="hello">
         <div class="card d-flex justify-content-center w3-animate-top">
             <div class="card-body">
         <h5 class="card-title text-center">Email verify</h5>

         <div class="input-field">
             <input type="email" id="email" class="input" style="margin:12px;" required>
             <label for="email" class="label" style="margin:12px;">Email</label>
         </div>
 <a href="#/otp" class="btn blink update" role="button">Update</a>
<a href="#/accountdetail" class="btn blink skip" role="button" >Skip now</a>
</div>
</div>
  </div>
</template>

<script>
export default {


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
