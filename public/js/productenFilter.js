const filterElement = document.querySelector('#filter');

function filterProducten() {
    let categorie = filterElement.value;
    window.location.hash = '#' + categorie;
    const productElements = document.querySelectorAll('.product');
    if (categorie == ''){
        productElements.forEach(productElement => {
            productElement.parentElement.style.display = 'initial';
        });
        return;
    }
    productElements.forEach(productElement => {
        if (!productElement.classList.contains(categorie)){
            productElement.parentElement.style.display = 'none';
        }else {
            productElement.parentElement.style.display = 'initial';
        }
    });
}

function filterMetHash() {
    if (window.location.hash != '' || window.location.hash != '#'){
        console.log(window.location.hash);
        console.log(window.location.hash.replace('#', ''));
        filterElement.value = window.location.hash.replace('#', '');
        console.log(filterElement.value);
        filterProducten();
    }
}

filterMetHash();
filterElement.addEventListener('change', () => filterProducten());
window.onhashchange = filterMetHash;