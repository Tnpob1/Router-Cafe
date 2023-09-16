<script lang="ts">
export default{
  name:"NavBar"
}
</script>


<template>
<nav class="navbar">
  <a class="navbar-brand" href="#">
    <div class="d-flex align-items-center">
      <img src="https://imgs.search.brave.com/5vIwuKr0dF0rObOZUr0pq8CBHAWxoyUj_dmr7sFElJw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2NvZmZlZS1sb2dv/LXBuZy9jb2ZmZWUt/bG9nby1sb2dvLWVs/ZW1lbnRzLWxvZ28t/b2JqZWN0cy0zLnBu/Zw" width="80" height="95" class="d-inline-block align-top" alt="">
      <p class="logo-text m-0 ml-2">COFFEE</p>
    </div>
  </a>
</nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

.navbar {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to right,
   rgb(255, 255, 255),
   rgb(170, 120, 44));
}
.navbar-brand{
  margin: 0;
  height: 75px;
  padding: 0 auto;
  padding-left: 20px;
  display: flex;
}
.navbar-brand img {
  margin-right: 20px;
}
.logo-text {
  margin: 0 auto;
  font-family: 'Ubuntu', sans-serif;
  font-size: 45px;
  font-weight: bold;
  color:rgba(187, 88, 7, 0.829);
  text-align: center;
  letter-spacing: 5px;
  text-shadow:
   4px 4px 0px #000, 
   -4px 0 0px #000,
    7px 4px 0 #fff;
  text-decoration: underline;
  text-decoration-color: #ffffff;
}


</style>