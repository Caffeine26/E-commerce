<template>
    <nav>
        <div class="nav-inner">
            <!-- Hamburger Icon (only visible on small screens) -->
            <div class="hamburger" @click="toggleMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <!-- Logo (centered) -->
            <div class="logo">
                <img src="@/assets/Logo.png" alt="Logo" />
            </div>

            <!-- Links -->
            <div class="links" :class="{ 'show': menuOpen }">
                <a href="#">Home</a>
                <a href="#">All Product</a>
                <a href="#">Promotions</a> <!-- Added Promotions -->
                <div class="dropdown">
                    <a href="#">Category</a>
                    <div class="dropdown-menu">
                        <a href="#">Category 1</a>
                        <a href="#">Category 2</a>
                        <a href="#">Category 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#">Shop by Skin Concern</a>
                    <div class="dropdown-menu">
                        <a href="#">Acne</a>
                        <a href="#">Dryness</a>
                        <a href="#">Aging</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#">Shop by Brands</a>
                    <div class="dropdown-menu">
                        <a href="#">Brand A</a>
                        <a href="#">Brand B</a>
                        <a href="#">Brand C</a>
                    </div>
                </div>
            </div>

            <!-- Icons -->
            <div class="icon">
                <img src="@/assets/search.svg" alt="Search Icon" />
                <img src="@/assets/heart.svg" alt="Heart Icon" />
                <img src="@/assets/translate.svg" alt="Translate Icon" />
                <img src="@/assets/user.svg" alt="User Icon" />
                <img src="@/assets/cart.svg" alt="Cart Icon" />
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Main nav container */
nav {
    border-bottom: 2px solid whitesmoke;
    width: 100vw; /* Full width to the edges of the viewport */
    background-color: rgb(203, 144, 179); /* Background color */
}

nav .nav-inner {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1500px; /* Center content with a max width */
    width: 100%;
    margin: 0 auto; /* Center the nav-inner content */
    padding: 0 16px; /* Add padding for inner spacing */
    position: relative;
}

/* Hamburger Menu (for small screens) */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 20px;
}

.hamburger .bar {
    width: 30px;
    height: 4px;
    background-color: white;
}

/* Links styling */
.nav-inner .links {
    display: flex;
    gap: 20px; /* Increased spacing between menu items */
}

.nav-inner .links a {
    font-style: normal;
    font-weight: 400; /* Ensure all links have the same font weight */
    font-size: 24px; /* Ensure font size is consistent for all links */
    line-height: 1.25;
    color: white; /* Change text to white for contrast */
    border-bottom: 1px solid transparent;
    transition: 0.3s;
    text-decoration: none;
    padding-right: 35px; /* Padding for consistency */
}

.nav-inner .links a:hover {
    border-color: rgb(200, 200, 200);
}

/* Dropdown container */
.dropdown {
    position: relative;
}

.dropdown a {
    cursor: pointer;
}

/* Dropdown menu styling */
.dropdown-menu {
    position: absolute;
    top: 100%; /* Place below the dropdown link */
    left: 0;
    background-color: rgb(209, 194, 194);
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: none; /* Initially hidden */
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    z-index: 1000;
}

.dropdown-menu a {
    font-size: 16px;
    padding: 15px 20px; /* Same padding as the top-level links */
    margin-bottom: 10px; /* Same margin as above */
    color: black;
    text-decoration: none;
    transition: background-color 0.3s;
}

.dropdown-menu a:hover {
    background-color: rgb(106, 100, 100);
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
    display: flex;
}

/* Logo styling */
.logo img {
    height: 75px; /* Set the logo height to 75px */
    width: auto; /* Maintain aspect ratio */
}

/* Icon styling */
.icon {
    display: flex;
    align-items: center;
}

.icon img {
    height: 30px; /* Icon size */
    width: 30px; /* Icon size */
    margin-left: 10px; /* Optional spacing between icons */
    padding-right: 5px;
}

/* Responsive Design */
@media (max-width: 1068px) {
    /* Hamburger menu visible on small screens */
    .hamburger {
        display: flex;
        z-index: 1000; /* Make sure it's above the menu */
    }

    /* Links should be hidden by default on small screens */
    .nav-inner .links {
    display: none;
    flex-direction: column;  /* Stack items vertically */
    gap: 30px;  /* Add spacing between menu items */
    width: 100%;  /* Make sure it takes up the full width */
    background-color: rgba(203, 144, 179, 0.7); /* Slightly transparent */
    padding: 0px; /* Padding around the items for better spacing */
    box-shadow: 0 4px 6px rgba(170, 103, 103, 0.2); /* Add some shadow for a dropdown feel */
    position: absolute; /* Fixed position when open */
    top: 60px; /* Place the links below the navbar */
    backdrop-filter: blur(3px); /* Apply blur to the background */
    left: 0;
    height:430px;
    z-index: 1000; /* Ensure it’s above other content */
    display: none; /* Initially hidden */
    text-align: center;  /* Align text in the center */
    }

    /* Show links when the menu is open */
    .nav-inner .links.show {
        display: flex;
    }

    /* Links styling for small screens */
    .nav-inner .links a {
    font-size: 18px; /* Adjust font size if needed */
    padding: 15px 20px; /* Same padding for all items */
    margin-bottom: 10px; /* Equal spacing between items */
    color: white;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: 0.3s;
    text-align: center; /* Center align text */
    }
    .nav-inner .links a:last-child {
    margin-bottom: 0; /* No margin at the bottom of the last item */
}

    .nav-inner .links a:hover {
        border-color: rgb(200, 200, 200);
    }

    /* Icons aligned to the right */
    .nav-inner .icon {
        position: absolute;
        right: 10px;
        top: 15px;
    }

    /* Logo styling for small screens */
    .logo {
        flex-grow: 1; /* Take up remaining space to center logo */
        text-align: center; /* Center the logo */
    }

    .logo img {
        height: 60px;
    }
}

/* Dropdown box inside the hamburger menu (on hover) */
.hamburger:hover .dropdown-menu {
    display: block; /* Make the dropdown appear when hovering over hamburger */
    position: absolute;
    top: 50px; /* Adjust position below the hamburger menu */
    left: 0;
    width: 200px; /* Set a fixed width for the dropdown */
    background-color: rgb(209, 194, 194); /* Set a background color for the dropdown */
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
}

.hamburger .dropdown-menu a {
    font-size: 16px;
    padding: 10px 15px;
    text-decoration: none;
    color: black;
    background-color: white;
    border-bottom: 1px solid #ddd;
}

.hamburger .dropdown-menu a:hover {
    background-color: rgb(106, 100, 100);
}
</style>
