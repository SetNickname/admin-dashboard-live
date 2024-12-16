const statCards = document.querySelectorAll('.stat-card');
const colors = [ '#85BB65', '#2382D4', '#6B40E2', '#E88804'];

statCards.forEach((card, index) => {
  const icon = card.querySelector('.stat-icon');

  if (icon) { 
    icon.style.color = colors[index % colors.length]; 
  }
});