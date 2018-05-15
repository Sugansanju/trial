<template>
  <div class="hello">
      <div class="card d-flex justify-content-center w3-animate-top">
          <div class="card-body text-center">
               <input class="input-code" type="text" maxlength="4" placeholder="X X X X">
              <a href="#/emailverify"> <i class="fa fa-arrow-right" style="font-size:36px"></i></a><br> 
               <a href="" class="text-primary">Resend OTP</a>
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

.input-code{
  display: block;
  margin: 2em auto;
  padding: 0.5em 0.25em;
  border: none;
  border-radius: 0.2em;
  font-size: 1.5em;
  text-align: center;
  box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2);
}
</style>
