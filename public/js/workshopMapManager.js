function setMap() {
    let placeholder = document.querySelector('#map-wrapper .placeholder');

    let workshopIndex = window.location.hash.replace('#', '');
    console.log(workshopIndex);
    
    let mapWrapperChildren = document.querySelectorAll('#map-wrapper>*');
    mapWrapperChildren.forEach(child => {
        child.style.display = 'none';
    });
    
    if (window.location.hash == '' || window.location.hash == '#'){
        placeholder.style.display = 'block';
    }else {
        mapWrapperChildren[workshopIndex + 1].style.display = 'block';
    }
}

window.onhashchange = setMap();