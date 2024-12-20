document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const profilePicture = document.querySelector('.profile-picture');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          
          const linkText = link.textContent.trim();
          
          switch(linkText) {
              case 'Dashboard':
                  window.location.href = 'admin-dashboard.html';
                  break;
              case 'Orders':
                  window.location.href = 'admin-orders.html';
                  break;
              case 'Products':
                  window.location.href = 'admin-products.html';
                  break;
              case 'Customers':
                window.location.href = 'admin-customers.html';
                break;
              case 'Reviews':
                window.location.href = 'admin-reviews.html';
                break;
              default:
                  alert('No navigation defined for this link');
              }
            });
        });
    profilePicture.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'admin-settings.html';
    });

});