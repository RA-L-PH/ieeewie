function loadvids(rawLink) {
    // Store the link in localStorage so output.html can access it
    localStorage.setItem('rawLink', rawLink);
  
    // Redirect to output.html
    window.location.href = 'videos.html';
  }

const scriptUrl = 'https://script.google.com/macros/s/AKfycbxlD0Z38BZdP7DRH-9YEeLxutmdorLvB4i-FFhF8TyLmJIvLMo2gWuQV4SULBoEzjZjIw/exec';

// Function to fetch data and populate the HTML
fetch(scriptUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('content'); // Assume there's a container div with id 'content'

    // Recursively apply the template for each item
    data.forEach(item => {
      const card = `
        <section class="card">
          <div class="image">
            <img src="${item.img}" alt="">
          </div>
          <div class="des">
            <h2>${item.title}</h2>
            <p>${item.des}</p>
            <button onclick="loadvids('${item.learnpage}')">Learn more...</button>
          </div>
        </section>
      `;

      // Insert the card into the container
      container.insertAdjacentHTML('beforeend', card);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
