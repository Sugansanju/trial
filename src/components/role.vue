<template>
  <div class="hello">
      <div class="card w3-animate-top">
          <div class="card-body">
      <h5 class="card-title text-center">Choose Role</h5>
      <div class="navigation">
          <ul class="menu">
<a href="#/login" class="mt-2 link" ><b>Teacher</b>  <i class="fa fa-user-circle icon" ></i></a>
      <br>
      <a href="#/login" class="mt-2 link" >Parent<i class="fa fa-users icon"></i></a>
      <br>
      <a href="#/login" class="mt-2 link">Student<i class="fa fa-child icon" ></i></a>
</ul>
</div>
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
.icon{
    font-size:30px;
}
.navigation {
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  text-align: center;
}

@media (width >= 768px) {

.menu {
    flex-direction: row
}
  }

@media (width >= 768px) {
    .menu > li:not(:last-child) {
      margin-right: 40px;
    }
  }

.menu a {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  color: #666;
  transition: color .2s ease;
  padding: 3px 0;
  margin-bottom: 10px;
  text-align: center;
}

.menu a:hover {
    color: #aaa;

  }

.menu a:hover::after,
    .menu a:hover::before {
      width: 100%;
      left: 0;
    }

.menu a::after,
  .menu a::before {
    content: '';
    position: absolute;
    top: calc(100% + 5px);
    width: 0;
    right: 0;
    height: 3px;
  }

.menu a::before {
    transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
    background: #2196f3;
  }

.menu a::after {
    transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
    background: #F44336;
  }

</style>
