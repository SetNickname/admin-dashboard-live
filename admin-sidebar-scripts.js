const redirects = {
  "Dashboard": "admin-dashboard.html",
  "Orders": "admin-orders.html",
  "Products": "admin-products.html",
  "Customers": "admin-customers.html",
  "Reviews": "admin-reviews.html"
};

for (const elementId in redirects) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", function(event) {
      event.preventDefault();
      const targetPage = redirects[elementId];
      if (targetPage) {
          window.location.href = targetPage;
      } else {
        console.error(`No target page defined for element: ${elementId}`);
      }
    });
  } else {
    console.warn(`Element with ID '${elementId}' not found on this page.`);
  }
}