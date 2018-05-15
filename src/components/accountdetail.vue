<template>
  <div class="hello">
<div class="card-account d-flex justify-content-center w3-animate-top">
    <div class="card-body">
        <!-- <h5 class="card-title text-center">Account details</h5>
        <div class="avatar"><input type="file"></div>

        <div class="col-lg-4 order-lg-2">
            <div class=" py-5 text-center">

                </div>
                </div>
                <div class="tab-pane" id="edit">
                    <form role="form">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">First name</label>
                            <div class="col-lg-5">
                                <input class="form-control" type="text" placeholder="First name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                            <div class="col-lg-5">
                                <input class="form-control" type="text" placeholder="Lastname">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Gender</label>
                            <div class="col-lg-5">
                                <select id="gender" class="form-control" size="0">
                                    <option value="Male">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Date of Birth</label>
                            <div class="col-lg-5">
                                <input class="form-control" type="text" placeholder="DD/MM/YYYY">
                            </div>
                        </div>                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label"></label>
                            <div class="col-lg-5">
                                <a href="#/" class="button blink update" role="button">Save</a>
                               <a href="#/" class="button blink skip" role="button" >Skip</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</div>
</div> -->
<div id="f1_container">
      <div id="f1_card" class="shadow">
        <div class="front face" style="margin-top:12px;">
         Account details
        </div>
        <div class="back face center">
            <div class="tab-pane" id="edit">
                  <form role="form">
                      <div class="form-group row">

                          <div class="col-lg-12">
                              <input class="form-control" type="text" placeholder="First name">
                          </div>
                      </div>
                      <div class="form-group row">
                          <div class="col-lg-12">
                              <input class="form-control" type="text" placeholder="Lastname">
                          </div>
                      </div>
                      <div class="form-group row">

                          <div class="col-lg-12">
                              <select id="gender" class="form-control" size="0">
                                  <option value="Male">Select</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                              </select>
                          </div>
                      </div>

                      <div class="form-group row">
                          <label class="col-lg-3 col-form-label form-control-label"></label>
                          <div class="col-lg-5">
                              <a href="#/" class="button blink update" role="button">Save</a>
                             <a href="#/" class="button blink skip" role="button" >Skip</a>
                          </div>
                      </div>
                  </form>
              </div>
        </div>
      </div>
      </div>
</div>
</div>
</div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
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
#f1_container {
  position: relative;
  margin: 10px auto;
  width: 450px;
  height: 281px;
  z-index: 1;
}
#f1_container {
  perspective: 1000;
}
#f1_card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.0s linear;
}
#f1_container:hover #f1_card {
  transform: rotateY(180deg);
  box-shadow: -5px 5px 5px #aaa;
}
.face {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size:30px;
  text-align: center;
  backface-visibility: hidden;
}
.face.back {
  display: block;
  transform: rotateY(180deg);
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
}
.card-account{
    border: $border-radius;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    max-width:750px;
    max-height:750px;
    margin: auto;
    margin-top:150px;
}
.input-style {
    display: block;
    padding:12px;
    font-size:12px;
    line-height:12px;
    background-color: #ffffff;
    border: 1px solid #B7B7B7;
    border-radius: 4px;
    margin:12px;
}
.avatar {
  position: relative;
  overflow: hidden;
  width:100px;
  height: 100px;
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
