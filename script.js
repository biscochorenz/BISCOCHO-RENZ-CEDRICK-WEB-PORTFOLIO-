const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); 
});

let isDark = true;
 
function switchMode() {
  let body = document.getElementById("body");
  let navbar = document.getElementById("navbar");
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let skills = document.getElementById("skills");
  let projects = document.getElementById("projects");
  let contact = document.getElementById("contact");
  let footer = document.getElementById("footer");

  let boxes = document.querySelectorAll(".info-card, .skills-box, .projects-box, .contact-container, .contact-box");
  let headings = document.querySelectorAll(".section-title, .about-text h3, .info-card h4, .skills-box h4, .projects-box h4, .fact h5, .info-card strong, .info-list strong");
  let primaryBtns = document.querySelectorAll(".btn-primary");
  let secondaryBtns = document.querySelectorAll(".btn-secondary");
  let contactButtons = document.querySelectorAll(".contact-button");
  let footerLinks = document.querySelectorAll(".footer-links a");
  let tags = document.querySelectorAll(".tag");

  if (isDark) {
    document.getElementById("mode").src = "images/DARKMODE.png";
    
    body.style.backgroundColor = "#f8f9fa";
    body.style.color = "#212529";
    
    navbar.style.backgroundColor = "#ffffff";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    
    home.style.color = "black";
    about.style.color = "black";
    skills.style.color = "black";
    projects.style.color = "black";
    contact.style.color = "black";
    
    footer.style.backgroundColor = "#111317";
    footer.style.color = "hsl(180, 4%, 72%)";

    boxes.forEach(box => {
      box.style.backgroundColor = "#ffffff";
      box.style.color = "#212529";
      box.style.borderColor = "#dee2e6";
    });

    headings.forEach(h => {
      h.style.color = "#212529";
    });

    primaryBtns.forEach(btn => {
      btn.style.backgroundColor = "#f9ac54";
      btn.style.color = "#ffffff";
    });

    secondaryBtns.forEach(btn => {
      btn.style.borderColor = "#212529";
      btn.style.color = "#212529";
    });

    contactButtons.forEach(btn => {
      btn.style.color = "#212529";
    });

    footerLinks.forEach(link => {
      link.style.color = "#ffffff";
    });

    tags.forEach(tag => {
      tag.style.backgroundColor = "#f1f3f5";
      tag.style.color = "#d79447";
      tag.style.borderColor = "#dee2e6";
    });

    isDark = false;

  } else {
    document.getElementById("mode").src = "images/LIGHTMODE.png";
    
    body.style.backgroundColor = "#111317";
    body.style.color = "hsl(180, 4%, 72%)";
    
    navbar.style.backgroundColor = "#ffffff";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    
    home.style.color = "";
    about.style.color = "";
    skills.style.color = "";
    projects.style.color = "";
    contact.style.color = "";
    
    footer.style.backgroundColor = "";
    footer.style.color = "";

    boxes.forEach(box => {
      box.style.backgroundColor = "#1a1d24";
      box.style.color = "";
      box.style.borderColor = "#2a2d33";
    });

    headings.forEach(h => {
      h.style.color = "";
    });

    primaryBtns.forEach(btn => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    secondaryBtns.forEach(btn => {
      btn.style.borderColor = "";
      btn.style.color = "";
    });

    contactButtons.forEach(btn => {
      btn.style.color = "";
    });

    footerLinks.forEach(link => {
      link.style.color = "";
    });

    tags.forEach(tag => {
      tag.style.backgroundColor = "";
      tag.style.color = "";
      tag.style.borderColor = "";
    });

    isDark = true;
  }
}
