function setActivePage() {
    const page = window.location.pathname.split("/").pop();
    const query = 'nav a.nav-link[href="/'+page+'"]';
    const link = document.querySelector(query);
    link.classList.add('active');
    link.ariaCurrent="page";
}

setActivePage();