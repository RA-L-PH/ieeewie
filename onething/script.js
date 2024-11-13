document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function learn() {
    window.location.href = "learn.html";
}

function blog() {
    window.location.href = "blog.html";
}

function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul');

    hamburger.classList.toggle('active');
    menu.classList.toggle('menu');
}

function closemenu() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul');
}

// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create the popup element
    const popup = document.createElement('div');
    popup.id = 'popup';

    // Create the close button container
    const closeButtonContainer = document.createElement('div');
    closeButtonContainer.style.width = '100%';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = `<i class="fas fa-times"></i>`;
    closeButtonContainer.appendChild(closeButton);

    // Create the content container
    const popupContentContainer = document.createElement('div');
    popupContentContainer.style.width = '100%';

    // Create content for the popup
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
        <img src="assets/imagefinal.jpg" alt="SFIT Logo">
        <h1>SFIT: A Name Synonymous with Excellence in Education</h1>
        <p>SFIT has come a long way from its modest inception to the grand celebration of its silver jubilee. The journey of this prestigious institution is a testament to its vision, dedication, and unwavering commitment to fostering academic growth and holistic development.</p>
        <p>Join us as we commemorate our journey and take pride in its countless achievements, transformative educational experiences, and the impact it has had on the lives of its students and the community.</p>
    `;
    popupContentContainer.appendChild(popupContent);

    // Append the close button container and content container to the popup
    popup.appendChild(closeButtonContainer);
    popup.appendChild(popupContentContainer);

    // Append the popup to the body
    document.body.appendChild(popup);

    // Display the popup
    popup.style.display = 'block';

    // Add event listener to the close button to hide the popup
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

function memberdefine(branch) {
    var scriptrl = `https://script.google.com/macros/s/AKfycbx9krwAXXb4WXGbAUSpF1JTM4c6_ScctoMIIdxPvI08HioMAePVjcUAs7uMgIEH83atpA/exec?branch=${branch}`;
    var team = document.getElementById("team");
    team.innerHTML = `<div class="loader">
                        </div>`;
    fetch(scriptrl)
    .then(response => response.json())
    .then(data => {
        var team = document.getElementById("team");
        const sortedData = data.sort((a, b) => {
            const roleOrder = ['Convenor','Co-Convenor', 'Chairperson','Vice-Chairperson','General Secretary','Treasurer','WebMaster','Head', 'Vice-Head', 'Executive'];
            return roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
        });

    
    let html = ''; // Initialize an empty string to build the HTML
    let headHtml = ''; // Initialize an empty string to build the Head HTML
    let executiveHtml = ''; // Initialize an empty string to build the Executive HTML
    let ieeeHtml = '';
    let wieHtml = '';

    let ieeeHeadHtml = ''; // Initialize an empty string to build the Head HTML for IEEE
    let ieeeExecutiveHtml = ''; // Initialize an empty string to build the Executive HTML for IEEE
    let wieHeadHtml = ''; // Initialize an empty string to build the Head HTML for WIE
    let wieExecutiveHtml = ''; // Initialize an empty string to build the Executive HTML for WIE

    sortedData.forEach(item => {
        if (Object.values(item).some(value => value !== "" && value !== null)) {
            const cardHtml = `
            <div class="card">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>${item.role}</p>
                <a class="fa-brands fa-linkedin" style="padding:3px;" href="${item.linkedin}"></a>
            </div>`
            if(item.committee === "IEEE"){
                if (item.role === 'Head' || item.role === 'Vice-Head' || item.role === 'Chairperson' || item.role === 'Vice-Chairperson' || item.role === 'Convenor' || item.role === 'Co-Convenor') {
                    ieeeHeadHtml += cardHtml; // Append the HTML string to the ieeeHeadHtml variable
                } else if (item.role === 'Executive' || item.role === 'General Secretary' || item.role === 'Treasurer' || item.role === 'WebMaster') {
                    ieeeExecutiveHtml += cardHtml; // Append the HTML string to the ieeeExecutiveHtml variable
                }
            }
            else if(item.committee === "WIE"){
                if (item.role === 'Head' || item.role === 'Vice-Head' || item.role === 'Chairperson' || item.role === 'Vice-Chairperson' || item.role === 'Convenor' || item.role === 'Co-Convenor') {
                    wieHeadHtml += cardHtml; // Append the HTML string to the wieHeadHtml variable
                } else if (item.role === 'Executive' || item.role === 'General Secretary' || item.role === 'Treasurer' || item.role === 'WebMaster') {
                    wieExecutiveHtml += cardHtml; // Append the HTML string to the wieExecutiveHtml variable
                }
            }
            
        }
    });

    if (ieeeHeadHtml !== '' || ieeeExecutiveHtml !== '') { // Check if there is at least one IEEE committee member
        ieeeHtml += '<h2><strong>IEEE</strong></h2></br>';
        ieeeHtml += '<div class="flexbox">' + ieeeHeadHtml + '</div>';
        ieeeHtml += '<div class="flexbox">' + ieeeExecutiveHtml + '</div>';
        html += ieeeHtml;
    }

    if (wieHeadHtml !== '' || wieExecutiveHtml !== '') { // Check if there is at least one WIE committee member
        wieHtml += '<h2><strong>WIE</strong></h2></br>';
        wieHtml += '<div class="flexbox">' + wieHeadHtml + '</div>';
        wieHtml += '<div class="flexbox">' + wieExecutiveHtml + '</div>';
        html += wieHtml;
    }

    team.innerHTML = html;
    });
}



function convenors(){
    let imp = 'Convenor';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:first-child');
    button.classList.add('active');
}

convenors()

function core(){
    var imp = 'Core';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(2)');
    button.classList.add('active');

}

function technical(){
    var imp = 'Technical';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(3)');
    button.classList.add('active');
}

function pr(){
    var imp = 'PR';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(4)');
    button.classList.add('active');
}

function marketing(){
    var imp = 'Marketing';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(5)');
    button.classList.add('active');
}

function socialmedia(){
    var imp = 'Social Media';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(6)');
    button.classList.add('active');
}

function creative(){
    var imp = 'Creative';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(7)');
    button.classList.add('active');

}

const eventLetter = document.getElementById("eventletter");
function openEventLetter() {
    // Add the show class to the event letter
    eventLetter.classList.add('show');
  };

// Get the form element
const form = document.getElementById('eventletterform');

// Add an event listener to the form submission
function submit() {
    var email = document.getElementById('email').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    console.log(email+lname+fname);

    if (email && fname && lname) {
        var url = 'https://script.google.com/macros/s/AKfycbwzJx6DN96S9o7k-75J5zkoepQkObGEdIqassOjZ9382XNVwt1DUnglVIY5vjUlxiJj/exec';
        var data = {
            'fname': fname,
            'lname': lname,
            'email': email,
        };
        
        var params = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        
        fetch(url, params)
            .then(response => {
                closeEventLetter();
            })
    }
}

document.getElementById('submit-button').addEventListener('click', submit);

function closeEventLetter() {
  eventLetter.classList.remove('show');
}