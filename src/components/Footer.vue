<template>
    <footer id="footer" class="footer">
      <div class="footer-content">
        <!-- Logo Section -->
        <div class="footer-logo">
          <img src="@/assets/Logo.png" alt="Logo" class="footer-logo-img" />
          <p class="footer-description">The best place to find everything you need!</p>
        </div>
  
        <!-- Quick Links Section -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
  
        <!-- Social Media Section -->
        <div class="footer-social">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#" target="_blank" class="social-icon">
              <img src="@/assets/images/p1.jpg" alt="Facebook" />
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="@/assets/images/p1.jpg" alt="Instagram" />
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="@/assets/images/p1.jpg" alt="Twitter" />
            </a>
          </div>
        </div>
  
        <!-- Contact Information Section -->
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +1 234 567 890</p>
          <p>📧 <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
          <p>📍 <a href="https://maps.google.com" target="_blank">Our Location</a></p>
        </div>
      </div>
  
      <!-- Copyright Section -->
      <div class="footer-bottom">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    font-family: 'Arial', sans-serif;
    padding: 40px 20px;
    text-align: left;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
  
  .footer-logo {
    flex: 1;
    max-width: 200px;
  }
  
  .footer-logo-img {
    width: 100px;
    margin-bottom: 10px;
  }
  
  .footer-description {
    font-size: 14px;
    color: #ccc;
  }
  
  .footer-links,
  .footer-social,
  .footer-contact {
    flex: 1;
  }
  
  .footer-links h4,
  .footer-social h4,
  .footer-contact h4 {
    margin-bottom: 10px;
    font-size: 16px;
  }
  
  .footer-links ul,
  .footer-contact p {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li,
  .footer-contact a {
    font-size: 14px;
    margin: 5px 0;
  }
  
  .footer-links a,
  .footer-contact a {
    color: #ccc;
    text-decoration: none;
  }
  
  .footer-links a:hover,
  .footer-contact a:hover {
    color: #0073e6;
  }
  
  .footer-social .social-icons {
    display: flex;
    gap: 10px;
  }
  
  .social-icon img {
    width: 30px;
    height: 30px;
  }
  
  .footer-bottom {
    background-color: #222;
    color: #ccc;
    padding: 10px;
    text-align: center;
    margin-top: 30px;
  }
  
  .footer-bottom p {
    font-size: 12px;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-logo,
    .footer-links,
    .footer-social,
    .footer-contact {
      text-align: center;
    }
  
    .footer-links ul {
      padding: 0;
    }
  }
  </style>
  