document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          navLinks.forEach(navLink => navLink.classList.remove('active'));

          link.classList.add('active');
          
          // Determine navigation based on link text
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
    });