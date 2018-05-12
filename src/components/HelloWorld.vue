<template>
  <div class="hello">
<div class="d-flex justify-content-center">
    <a class="btn" type="button" href="#/role">
  <span class="pull-left">Start here</span>
  <i class="fa fa-angle-right pull-right icon"></i>
</a>
</div>
  </div>
</template>

<script>
import VueButton from 'vue-button';
export default {
    components:{
        'v-button':VueButton
    }
}
</script>

<style >
body{
    background-color:var(--main-primary-color);
}
</style>
