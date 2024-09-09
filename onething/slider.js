var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});





async function fetchData() {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw9gyQCzOcOx04XVDwaShCJ81d3PiDtxRDc6VVppbU78PftzGH97bwImcPLocPGlhfShw/exec');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function loadContent(rawLink) {
  // Store the link in localStorage so output.html can access it
  localStorage.setItem('rawLink', rawLink);

  // Redirect to output.html
  window.location.href = 'output.html';
}

async function imageSlide() {
  const slides = document.getElementById('imageslide');
  const data = await fetchData();
  console.log(data);
  
  if (data && slides) {
    data.forEach(item => {
      slides.innerHTML += `
        <div class="swiper-slide">
          <img src="${item.link}" alt="Slide Image" onclick="loadContent('${item.imgSrc}')"/>
        </div>
      `;
    });
  } else {
    console.error('No data or slides element found');
  }
}


imageSlide();