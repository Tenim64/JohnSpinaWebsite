function setMap() {
    let placeholder = document.querySelector('#map-wrapper .placeholder');

    let evenementIndex = window.location.hash.replace('#', '');
    
    let mapWrapperChildren = document.querySelectorAll('#map-wrapper>*');
    mapWrapperChildren.forEach(child => {
        child.style.display = 'none';
    });
    
    if (window.location.hash == '' || window.location.hash == '#'){
        placeholder.style.display = '';
    }else {
        mapWrapperChildren[parseInt(evenementIndex) + 1].style.display = '';
    }
}

setMap();
window.onhashchange = setMap;