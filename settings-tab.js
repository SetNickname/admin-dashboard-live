document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function activateTab(tabId) {
      tabPanes.forEach(pane => {
          pane.classList.remove('active');
      });
      tabButtons.forEach(button => {
          button.classList.remove('active');
      });

      const selectedPane = document.getElementById(tabId);
       const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
      if(selectedPane) {
          selectedPane.classList.add('active');
      }
       if(selectedButton) {
          selectedButton.classList.add('active');
      }
  }
  
   if (tabButtons.length > 0 && tabPanes.length > 0){
       activateTab('general');
   }

tabButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          const tabId = e.target.getAttribute('data-tab');
          activateTab(tabId);
      });
  });
});