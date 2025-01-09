<template>
  <div class="footer-container">
    <div class="footer">
      <!-- Welcome Section -->
      <div class="section">
        <img  src="@/assets/img/logo1.png" alt="Logo" class="logo" />
        <p class="i">Welcome to our little cozy site.</p>
      </div>

      <!-- Mores Section -->
      <div class="section">
        <h3>Mores</h3>
        <ul>
          <li v-for="(item, index) in mores" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>

      <!-- Social Media Section -->
      <div class="section">
        <h3>Follow us</h3>
        <a href="#" class="f"><img src="@/assets/img/image22.png" alt="logo" class="ii">&nbsp;&nbsp;&nbsp;Facebook</a>
        <a href="#" class="f"><img src="@/assets/img/image33.png" alt="logo" class="ii">&nbsp;&nbsp;&nbsp;Instagram</a>
        <a href="#" class="f"><img src="@/assets/img/image44.png" alt="logo" class="ii">&nbsp;&nbsp;&nbsp;Telegram</a>
        <a href="#" class="f"><img src="@/assets/img/image55.png" alt="logo" class="ii">&nbsp;&nbsp;&nbsp;Tiktok</a>

        
      </div>

      <!-- Contact Section -->
      <div class="section contact-info">
        <h3>Contact us</h3>
        <p><span>☎️</span> +855 97 742 938 9</p>
        <p>
          <span>📧</span>
          <a href="mailto:seoulglam@gmail.com">seoulglam@gmail.com</a>
        </p>
        <p>
          <span>📍</span>
          <a href="https://maps.app.goo.gl/xyz" target="_blank">Location Map</a>
        </p>
      </div>
    </div>

    <!-- Copyright Section -->
     <div class="ruler">_____________________________________________________________________________________________________________</div>
    <div class="copyright">
      <p class="gg">Copyright - 2023 by SEOUL GLAM. All rights reserved.</p>
      <div class="payment">
        <p>Accept Payment:</p>
        <img src="@/assets/img/Wing Bank.png" alt="logo" class="qr">
        <img src="@/assets/img/aba.png" alt="logo" class="qr">
        <img src="@/assets/img/khr.png" alt="logo" class="qr">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      mores: ["All Product", "FAQ", "About us", "Blogs", "Privacy Policy"],
    };
  },
};
</script>

<style scoped>
.ii{
  width: 15px;
  height: 15px;
}
.f{
  width: auto;
  height: 10px;
}
.i{
  font-size: 15px;
}
.footer-container {
  width:100%;
  margin: 0 auto;
  background-color: #3e4a3c;
  color: #fff;
  font-family:serif;
  font-size: 10px;
  
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  height: 200px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #ddd;
}

ul {
  list-style: none;
  padding: 0;
}

.logo {
  width: 60px;
  border-radius: 50%;
  margin-left: 50px;
}

.contact-info span {
  margin-right: 5px;
}

.copyright {
  text-align: center;
  padding: 10px 0;
  font-size: 6px;
  color: #ddd;
  display: flex;
  justify-content: space-evenly;
  
}
.payment{
  display: flex;
  margin-left: 10px;
}
.qr{
  margin-left: 7px;
  margin-top: -3px;
}
.gg{
  margin-left: 100px;
}
.ruler{
  margin-left: 280px;
}
</style>
