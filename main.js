// NAV Code
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <meta name="theme-color" content="#000000" />

            <nav id="navbar">
                <a href="index.html" class="logo">
                    <img class="logo-normal" src="img/sg_logo_nav.png" alt="Logo" />
                    <img class="logo-hover" src="img/sg_logo_nav_2.png" alt="Logo Hover" />
                </a>
                <div class="hamburger-menu">
                    <div class="bar"></div>
                    <div class="bar"></div>      
                    <div class="bar"></div>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html"><i class="fas fa-home"></i>&nbspHome</a></li>
                    <!--<li><a href="store.html"><i class="fa-solid fa-bag-shopping"></i>&nbspStore</a></li>-->
                    <!--<li><a href="blog.html"><i class="fa-solid fa-book"></i>&nbspBlog</a></li>-->
                    <!--<li><a href="music.html"><i class="fa-solid fa-music"></i>&nbspMusic</a></li>-->
                    <li><a href="freebies.html"><i class="fa-solid fa-cloud-arrow-down"></i>&nbspFreebies</a></li>
                    <!--<li><a href="projects.html"><i class="fa-solid fa-code"></i>&nbspProjects</a></li>-->
                    <li><a href="https://mailchi.mp/c0633f8de561/skapegoht"><i class="fa-solid fa-envelope"></i>&nbspSign Up</a></li>
                    <li><a href="about.html"><i class="fa-solid fa-address-card"></i>&nbspAbout</a></li>
                </ul>
            </nav>
            <div class="scroll-to-top">
                <i class="fas fa-chevron-up"></i>
            </div>
        `;
               // Smooth Scroll to Top Functionality
               const scrollToTop = this.querySelector(".scroll-to-top");

               scrollToTop.addEventListener("click", () => {
                   window.scrollTo({ top: 0, behavior: "smooth" });
               });
       
               // Show or hide the scroll-to-top button based on scroll position
               window.addEventListener("scroll", () => {
                   if (window.pageYOffset > 100) {
                       scrollToTop.classList.add("visible");
                   } else {
                       scrollToTop.classList.remove("visible");
                   }
               });
           }
       }


customElements.define('my-header', MyHeader);

//Favicon Code
class MyFavicon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_package_v0/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_package_v0/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon_package_v0/favicon-16x16.png">
        <link rel="manifest" href="favicon_package_v0/site.webmanifest">
        <link rel="mask-icon" href="favicon_package_v0/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
      
        `;
    }
}

customElements.define('my-favicon', MyFavicon);

//Custom Font Code
class CustomFont extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  
        <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600&display=swap" rel="stylesheet"> 
      
        `;
    }
}

customElements.define('custom-font', CustomFont);

//Theme Color for Mobile Browsers etc. 
class ThemeColor extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  
        <meta name="theme-color" content="#000000" />
        `;
    }
}

customElements.define('theme-color', ThemeColor);

//Footer Code
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  
            <footer>
                <div class="footer-links">
                    <!--<a href="store.html">Store</a>-->
                    <a href="https://mailchi.mp/c0633f8de561/skapegoht">Sign Up</a>
                    <a href="contact.html">Contact</a>
                    <a href="about.html">About</a>
                </div>
                <div class="social-media">
                    <a href="https://www.youtube.com" target="_blank" class="social-icon">
                        <i class="fab fa-youtube"></i> YouTube
                    </a>
                    <a href="https://www.soundcloud.com/skapegoht" target="_blank" class="social-icon">
                        <i class="fab fa-soundcloud"></i> SoundCloud
                    </a>
                    <a href="https://www.instagram.com" target="_blank" class="social-icon">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://www.facebook.com" target="_blank" class="social-icon">
                        <i class="fab fa-facebook-f"></i> Facebook
                    </a>
                </div>
                <div class="copyright">
                    Copyright &copy; SKAPEGOHT 2025
                </div>
            </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);
