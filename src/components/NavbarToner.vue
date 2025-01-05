<template>
  <nav class="background">
    <div class="logo">
      <a href="#" class="icon"><img src="@/assets/img/image.png" alt="logo"/></a>
      <a href="#" class="icon"><img src="@/assets/img/image1.png" alt="logo"/></a>
      <a href="#" class="icon"><img src="@/assets/img/image2.png" alt="logo"/></a>
      <a href="#" class="icon"><img src="@/assets/img/image3.png" alt="logo"/></a>
      <a href="#" class="icon"><img src="@/assets/img/image4.png" alt="logo"/></a>
    </div>
    <div class="navbar">
      <div class="lg1"><img src="@/assets/img/logo1.png" alt="logo" class="lg"/></div>
      <ul class="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">All Products</a></li>
        <li><a href="#">Promotions</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Shop by Skin Concern</a></li>
        <li><a href="#">Shop by Brands</a></li>
      </ul>
    </div>
    <h1 class="tt">Toners</h1>
  </nav>
  
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Navbar container */
.logo{
  margin-left: 760px;
  transform: scale(0.7);
  height: auto;
}
.lg{
  width: 50px;
  height: 50px;
}
.lg1{
  height: 30px;
  width: 40px;
  margin-top: -10px;
}
.navbar {
  width: 1000px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(104, 122, 125, 0.1);
  padding: 1rem 2rem;
  margin-left: 0px;
}

/* List styling */
.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin-left: 150px;
  gap: 2rem;
}

.nav-list a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
}

/* Hover effect */
.nav-list a:hover {
  color: #007bff;
}
.tt{
  text-align: center;
  font-size: 40px;
  background-color: #ffffff4f;
  margin-top: 70px;
}
.background{
  background-color: #b9e4eb;
  height: 300px;
  margin-left: 70px;
  width: 1000px;
  background-image: url('@/assets/img/Toner2.png');
  background-repeat: no-repeat; /* Prevents repeating the image */
  background-size: cover;      /* Makes the image cover the entire element */
  background-position: center;
}
</style>
