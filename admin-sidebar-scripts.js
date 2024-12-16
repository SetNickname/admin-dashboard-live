const redirects = {
  "Dashboard": "admin-dashboard.html",
  "Orders": "admin-orders.html",
  "Products": "admin-products.html",
  "Customers": "admin-customers.html",
  "Reviews": "admin-reviews.html"
};

document.getElementById("Orders").addEventListener("click", function(event) {
  // Prevent the default link behavior (if it's an <a> tag)
  event.preventDefault();

  // Redirect to the desired HTML file
  window.location.href = "your_target_page.html"; // Replace with your actual filename
});