<template>
  <div class="hello">
         <div class="card d-flex justify-content-center w3-animate-top">
             <div class="card-body">
         <h5 class="card-title text-center">Account details</h5>
        <div class="avatar"></div>
        <div class="input-field">
        <input type="file">
    </div>
    <div class="row">
    <!-- <label for="gender" class="lbl" style="margin:12px;">Gender</label>
        <dropdown :data="data" :Changed="changed"></dropdown> -->
        <!-- <label for="component-dropdown">Component-based dropdown: </label>
      <dropdown id="component-dropdown" :options="fruitOptions"></dropdown> -->
</div>
<div class="row">
<div class="col-mt-2">
<label for="date">DOB</label>
     <datepicker class-design="input-style"></datepicker>
</div>
</div>
    <label for="date">Gender</label>
    <div class="dropdown col-mt-2">
    <select name="one" class="dropdown-select">
      <option value="">Select…</option>
      <option value="1">male</option>
      <option value="2">Female</option>
    </select>
  
</div>
</div>
</div>
</div>
</template>

<script>

import Avatar from 'vue-avatar-component'
import Datepicker from 'vuejs-datepicker'
export default {
//     data () {
// return {
//   selectedFruit: 'Apple',
//   fruitOptions: {
//     'Apple': 'Apple',
//     'Banana': 'Banana',
//     'Blueberry': 'Blueberry',
//     'Kiwi': 'Kiwi',
//     'Pear': 'Pear',
//     'Pineapple': 'Pineapple',
//     'Watermelon': 'Watermelon'
//   }
// }
// },
     components: {
          Avatar,
          Datepicker,
         // 'dropdown': Dropdown
      },

      methods:{
          changed(selected) {
     console.log(selected)
   }
      }

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
.input-style {
    display: block;
    padding:2px;
    font-size:12px;
    line-height:12px;
    background-color: #ffffff;
    border: 1px solid #B7B7B7;
    border-radius: 4px;
}
.dropdown {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 28px;
  width: 250px;

  border: 1px solid;

  border-radius: 3px;
  background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06));
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.dropdown:before, .dropdown:after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 9px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px dashed;
  border-color: #888888 transparent;
  pointer-events: none;
}

.dropdown:before {
  border-bottom-style: solid;
  border-top: none;
}

.dropdown:after {
  margin-top: 7px;
  border-top-style: solid;
  border-bottom: none;
}

.dropdown-select {
  position: relative;
  width: 130%;
  margin: 0;
  padding: 6px 8px 6px 10px;
  height: 28px;
  line-height: 14px;
  font-size: 12px;
  color: #62717a;
  text-shadow: 0 1px white;
  background: #f2f2f2; /* Fallback for IE 8 */
  background: rgba(0, 0, 0, 0) !important; /* "transparent" doesn't work with Opera */
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
}

.dropdown-select:focus {
  z-index: 3;
  width: 100%;
  color: #394349;
  outline: 2px solid #49aff2;
  outline: 2px solid -webkit-focus-ring-color;
  outline-offset: -2px;
}

.dropdown-select > option {
  margin: 3px;
  padding: 6px 8px;
  text-shadow: none;
  background: #f2f2f2;
  border-radius: 3px;
  cursor: pointer;
}

/* Fix for IE 8 putting the arrows behind the select element. */

.lt-ie9 .dropdown {
  z-index: 1;
}

.lt-ie9 .dropdown-select {
  z-index: -1;
}

.lt-ie9 .dropdown-select:focus {
  z-index: 3;
}

/* Dirty fix for Firefox adding padding where it shouldn't. */

@-moz-document url-prefix() {
  .dropdown-select {
    padding-left: 6px;
  }
}

.avatar {
  position: relative;
  overflow: hidden;
  width:50px;
  height: 50px;
  margin: auto;
  background: #ddd;
  -webkit-border-radius: 50%;
  border-radius: 50%
}

.avatar:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 70%;
  height: 44%;
  margin: 0 0 0 -35%;
  background: #989898;
  -webkit-border-radius: 100% 100% 0 0;
  border-radius: 100% 100% 0 0
}

.avatar:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 19%;
  width: 40%;
  height: 40%;
  margin: 0 0 0 -20%;
  background: #989898;
  -webkit-box-shadow: 0 0 0 4px #DCDCDC;
  box-shadow: 0 0 0 4px #DCDCDC;
  -webkit-border-radius: 50%;
  border-radius: 50%
}

.avatar img {
  position: relative;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  z-index: 10
}

.lbl{
    color:var(--main-secondary-color);
    padding-right:50px;
    margin:55px;
}
</style>
