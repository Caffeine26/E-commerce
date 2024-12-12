<template>
    <footer>
      <div class="footer">
        <div class=footer-logo>
        <img src="@/assets/img/image11.png" alt="Logo"  class="image"/>
        <p class="logo">WelCome to our little cozy site</p>
      </div>
      <div class="footer-section">
        <h4>Mores</h4>
        <a href="#">All Product</a>
        <a href="#">FAQ</a>
        <a href="#">About us</a>
        <a href="#">Blogs</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div class="footer-section">
        <h4>Follow us</h4>
        <a href="#" class="social"><img src="@/assets/img/image22.png" alt="Logo" />&nbsp;&nbsp;&nbsp;Facebook</a>
        <a href="#" class="social"><img src="@/assets/img/image33.png" alt="Logo" />&nbsp;&nbsp;&nbsp;Instagram</a>
        <a href="#" class="social"><img src="@/assets/img/image44.png" alt="Logo" />&nbsp;&nbsp;&nbsp;Telegram</a>
        <a href="#" class="social"><img src="@/assets/img/image55.png" alt="Logo" />&nbsp;&nbsp;&nbsp;TikTok</a>
      </div>
      <div class="footer-section contact-info">
        <h4>Contact us</h4>
          <p><img src="@/assets/img/image66.png" alt="logo"> 075 723 739</p>
          <p><img src="@/assets/img/image77.png" alt="logo" ><a href="mailto:seogilgam@gmail.com">seogilgam@gmail.com</a></p>
          <p><img src="@/assets/img/image88.png" alt="logo" ><a href="https://g.page/your-link" target="_blank">https://g.page/your-link</a></p>
        
      </div>
      </div>
      <div class="ruler">___________________________________________________________________________________________________</div>
      <div class="footer-bottom">
        <div>copyright©2024 by SEOULGLAM. All rights reserved.</div>
        <div class="payment-methods">Accepted Payments: 
          <div class="image1">
            <img src="@/assets/img/Wing Bank.png" alt="Wing Logo" class="payment-logo" />
            <img src="@/assets/img/aba.png" alt="ABA Logo" class="payment-logo" />
            <img src="@/assets/img/khr.png" alt="KHQR Logo" class="payment-logo" />
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    width: 1500px;
    height: 350px;
    margin-left: 0px;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: flex-start;
    background-color: #4a4a3f; /* Dark background */
    color: white; /* Text color */
    padding: 40px 20px; /* Padding for spacing */
    margin-left: -180px;
  }
  .logo{
    font-size: 20px;
  }
  .footer-logo{
    margin-top: 20px;
    margin-left: 20px;
  }
  .image{
    margin-left: 40px;
  }
  .social{
    margin-top: 0px;
  }
  .footer-section {
    flex: 1; /* Equal space for each section */
    margin: 20px;
    margin-left: 200px; /* Margins between sections */
  }
  
  .footer-section h4 {
    margin-bottom: 15px; /* Spacing below headings */
    font-size: 18px; /* Font size for headings */
  }
  
  .footer-section a {
    color: white; /* Link color */
    text-decoration: none; /* Remove underline */
    display: block; /* Block display for links */
    margin-bottom: 8px; /* Spacing between links */
  }
  
  .footer-section a:hover {
    margin-right: 0px;
    text-decoration: underline; /* Underline on hover */
  }
  
  .contact-info {
    margin-top: 20px; /* Spacing above contact info */
    margin-right: 10px;
  }
  .ruler{
    color: white;
    size: 10px;
    margin-top: -100px;
    margin-left: 530px;
    
  }
  .footer-bottom {
    display:flex;
    justify-content: space-evenly;
    margin-left: 280px;
    font-size: 10px;
    color: white;
    text-align: center;
    padding: 10px ;
    margin-top: 10px;
  }
  .payment-methods{
    display: flex;
  }
  .image1{
    margin-left: 10px;
    margin-top: -3px;
  }
  .payment-logo{
    margin-left: 5px;
  }
  
  </style>