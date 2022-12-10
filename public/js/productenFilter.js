const filterElement = document.querySelector('#filter');

function filterProducten() {
    let categorie = filterElement.value;
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

filterElement.addEventListener('change', () => filterProducten());