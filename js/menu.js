document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
  });
  
  document.querySelector('.dropbtn').addEventListener('click', function(e) {
    if (window.innerWidth <= 820) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('active');
    }
  });