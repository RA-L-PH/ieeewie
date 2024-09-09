// Handle URL input and link click event in test.html
document.addEventListener('DOMContentLoaded', function() {
    const linkInput = document.getElementById('link');
    const navigateLink = document.getElementById('navigate');
  
    if (linkInput && navigateLink) {
      navigateLink.addEventListener('click', function() {
        localStorage.setItem('url', url);
      });
    }
  
    // Handle content rendering in output.html
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
      const url = localStorage.getItem('url');
      if (url) {
        fetch(url)
          .then(response => response.text())
          .then(data => {
            contentDiv.innerHTML = data;
          })
          .catch(error => {
            contentDiv.innerHTML = 'Error loading content';
            console.error('Error fetching content:', error);
          });
      } else {
        contentDiv.innerHTML = 'No URL provided';
      }
    }
  });

