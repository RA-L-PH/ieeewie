document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

// Add this JavaScript to your script.js file
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

function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul'); // Add a closing parenthesis here

    hamburger.classList.toggle('active');
    menu.classList.toggle('menu');
}

function closemenu() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul'); // Add a closing parenthesis here

    hamburger.classList.toggle('active');
    menu.classList.remove('menu');
}

function memberdefine(scriptrl){
    var team = document.getElementById("team");
    team.innerHTML = `<div class="loader">
                        </div>`;
    fetch(scriptrl)
    .then(response => response.json())
    .then(data => {
        var team = document.getElementById("team");
        const sortedData = data.sort((a, b) => {
            const roleOrder = ['Convenor','Chairperson','Vice-Chairperson','General Secretary','Treasurer','WebMaster','Head', 'Vice-Head', 'Executive'];
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
                <a class="fa-brands fa-linkedin" href="${item.linkedin}"></a>
            </div>`
            if(item.committee === "IEEE"){
                if (item.role === 'Head' || item.role === 'Vice-Head' || item.role === 'Chairperson' || item.role === 'Vice-Chairperson' || item.role === 'Convenor') {
                    ieeeHeadHtml += cardHtml; // Append the HTML string to the ieeeHeadHtml variable
                } else if (item.role === 'Executive' || item.role === 'General Secretary' || item.role === 'Treasurer' || item.role === 'WebMaster') {
                    ieeeExecutiveHtml += cardHtml; // Append the HTML string to the ieeeExecutiveHtml variable
                }
            }
            else if(item.committee === "WIE"){
                if (item.role === 'Head' || item.role === 'Vice-Head' || item.role === 'Chairperson' || item.role === 'Vice-Chairperson' || item.role === 'Convenor') {
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
    let imp = 'https://script.google.com/macros/s/AKfycbxjEERH1amYhaoyI6dUyQL9s_3sN46He37dqjGwEEEUa1dFRU0DSMjLIk-ohPudQYW3Rg/exec';
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
    var imp = 'https://script.google.com/macros/s/AKfycbzi3tlokjFhOFz6TlK5N5f_UOP5sH5GNp2-BWJPKCnkuoJOd7BxseGu0yjgiJi33_tQ5w/exec';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(2)');
    button.classList.add('active');

}

function technical(){
    var imp = 'https://script.google.com/macros/s/AKfycbzbgPvEs5pwDssniPugXqKMtoarZ4pyF4lKE5vJ-cHChDuaGkARbejlH-C4suLycv9z1g/exec';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(3)');
    button.classList.add('active');
}

function pr(){
    var imp = 'https://script.google.com/macros/s/AKfycbyJDIkDmOVRcdgFFDNcx68fnSXfkYlb3LdhelsM78gVwZODYx1NZWGisQhaz9EmVk_vwQ/exec';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(4)');
    button.classList.add('active');
}

function marketing(){
    var imp = 'https://script.google.com/macros/s/AKfycbzQEMalW1PJt1FbTi4zHsfgYS4qgapzN00UbG97quHw_1qI1ko6VPDKTLgduKX-pfOMug/exec';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(5)');
    button.classList.add('active');
}

function socialmedia(){
    var imp = 'https://script.google.com/macros/s/AKfycbxq4MP6q1oes1qF_1r6lPdk9U7CfTvDYqAowOjpjZqLAwVumclGnI0hoK1fI2kCI2_fiQ/exec';
    memberdefine(imp);

    var buttons = document.querySelectorAll('.branch button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    var button = document.querySelector('.branch button:nth-child(6)');
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
        var url = 'https://script.google.com/macros/s/AKfycbx4QCnFB4g91n-nj-s1CBuvYvSO4Ufg2WQ5NlfqKGZFaxNMryQj7B2OXCeqymiVNmmt/exec';
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