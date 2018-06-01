const About = document.getElementsByClassName("about")[0]
const Portfolio = document.getElementsByClassName("portfolio")[0]
const Shows = document.getElementsByClassName("shows")[0]
const Contact = document.getElementsByClassName("contact")[0]

function switchToAbout() {
    Portfolio.style.display = "none";
    Shows.style.display = "none";
    Contact.style.display = "none";
    About.style.display = "initial"
}

function switchToPortfolio() {
    About.style.display = "none";
    Shows.style.display = "none";
    Contact.style.display = "none";
    Portfolio.style.display = "initial";
}

function switchToShows() {
    Contact.style.display = "none";
    Portfolio.style.display = "none";
    About.style.display = "none";
    Shows.style.display = "initial";
}

function switchToContact() {
    Portfolio.style.display = "none";
    Shows.style.display = "none";
    About.style.display = "none";
    Contact.style.display = "initial";
}