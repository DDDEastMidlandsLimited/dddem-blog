document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  /* =======================
  // Menu
  ======================= */
  var body = document.querySelector("body"),
  menuOpenButton = document.querySelector(".nav__icon-menu"),
  menuCloseButton = document.querySelector(".nav__close-btn"),
  menuList = document.querySelector(".main-nav");

  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
      menuOpen();
    });

    menuOpenButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        menuOpen();
      }
    });
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
      menuClose();
    });

    menuCloseButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        menuClose();
      }
    });
  }

  function menuOpen() {
    if (menuList) {
      menuList.classList.add("is-open");
      if (menuOpenButton) {
        menuOpenButton.setAttribute("aria-expanded", "true");
      }
      // Focus on the first menu item or close button
      if (menuCloseButton) {
        menuCloseButton.focus();
      }
    }
  }

  function menuClose() {
    if (menuList) {
      menuList.classList.remove("is-open");
      if (menuOpenButton) {
        menuOpenButton.setAttribute("aria-expanded", "false");
        menuOpenButton.focus(); // Return focus to menu button
      }
    }
  }

  // Handle Escape key to close menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuList && menuList.classList.contains("is-open")) {
      menuClose();
    }
  });

  // Handle skip link functionality
  const skipLink = document.querySelector(".skip-to-content");
  if (skipLink) {
    skipLink.addEventListener("click", (e) => {
      e.preventDefault();
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* =======================
  // Dropdown Navigation
  ======================= */
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleDropdown(toggle);
    });

    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown(toggle);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        openDropdown(toggle);
        const firstMenuItem = toggle.nextElementSibling.querySelector('a[role="menuitem"]');
        if (firstMenuItem) firstMenuItem.focus();
      }
    });
  });

  function toggleDropdown(toggle) {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    
    if (isExpanded) {
      closeDropdown(toggle);
    } else {
      openDropdown(toggle);
    }
  }

  function openDropdown(toggle) {
    toggle.setAttribute("aria-expanded", "true");
    toggle.parentElement.classList.add("dropdown-open");
  }

  function closeDropdown(toggle) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.parentElement.classList.remove("dropdown-open");
  }

  function closeAllDropdowns() {
    dropdownToggles.forEach(toggle => {
      closeDropdown(toggle);
    });
  }

  // Handle dropdown menu item keyboard navigation
  document.addEventListener("keydown", (e) => {
    const activeElement = document.activeElement;
    
    if (activeElement && activeElement.getAttribute("role") === "menuitem") {
      const dropdown = activeElement.closest(".dropdown");
      const menuItems = dropdown.querySelectorAll('a[role="menuitem"]');
      const currentIndex = Array.from(menuItems).indexOf(activeElement);
      
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % menuItems.length;
          menuItems[nextIndex].focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
          menuItems[prevIndex].focus();
          break;
        case "Escape":
          e.preventDefault();
          const toggle = dropdown.querySelector(".dropdown-toggle");
          closeDropdown(toggle);
          toggle.focus();
          break;
      }
    } else if (e.key === "Escape") {
      closeAllDropdowns();
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      closeAllDropdowns();
    }
  });

  /* =======================
  // Animation Load Page
  ======================= */
  setTimeout(function(){
    body.classList.add("is-in");
  },150)

  /* ==================================
  // Stop Animations After All Have Run
  ================================== */
  setTimeout(function(){
    body.classList.add("stop-animations");
  },1500)

  /* ======================================
  // Stop Animations During Window Resizing
  ====================================== */
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 300);
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page img, .post img"),
  imageLink = document.querySelectorAll(".page a img, .post a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }

  /* ============================
  // Smooth scrolling to section
  ============================ */
  document.querySelectorAll(".works-button").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });


  /* ============================
  // Testimonials Slider
  ============================ */
  if (document.querySelector(".my-slider")) {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 20,
      nav: false,
      mouseDrag: true,
      autoplay: false,
      controlsContainer: "#customize-controls",
      responsive: {
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* ============================
  // iTyped
  ============================ */
  if (document.querySelector(".c-subscribe")) {
    var options = {
      strings: itype_text,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      onFinished: function(){}
    }

    ityped.init('#ityped', options);
  }


  /* ============================
  // Scroll to top
  ============================ */
  const btnScrollToTop = document.querySelector(".top");

  if (btnScrollToTop) {
    window.addEventListener("scroll", function () {
      window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
    });

    btnScrollToTop.addEventListener("click", function () {
      if (window.scrollY != 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    });

    // Add keyboard support
    btnScrollToTop.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (window.scrollY != 0) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
        }
      }
    });
  }

});