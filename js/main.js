document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
    var navigationMenu = document.getElementById('js-navigation-menu')
    navigationMenu.classList.remove('show')
    var menuToggle = document.getElementById('js-mobile-menu')
    menuToggle.addEventListener('click', function() {
      navigationMenu.classList.toggle('show')
    })
  });