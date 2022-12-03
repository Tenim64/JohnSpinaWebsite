function cookieValue(key) {
    return document.cookie.split('; ')
    .find((row) => row.startsWith(key+'='))
    ?.split('=')[1];
}
function themeGetter() {
    const theme = cookieValue('theme');
    const checkbox = document.querySelector("#themeCheck");
    switch (theme){
        case 'light':
            checkbox.checked = false;
            break;
        case 'dark':
            checkbox.checked = true;
            break;
        default:
            checkbox.checked = false;
            themeSetter();
            break;
    }
}
function themeSetter() {
    const checkbox = document.querySelector("#themeCheck");
    let theme;
    if (checkbox.checked) {
        theme = 'dark';
    }else {
        theme = 'light';
    }
    console.log(theme);
    let cookies = document.cookie.split(';');
    const themeIndex = cookies.findIndex(cookie => cookie.substring(0, 'theme='.length) == 'theme=');
    cookies[themeIndex] = 'theme='+theme;
    document.cookie = cookies.join(';');
}

document.querySelector("#themeCheck").addEventListener('change', () => themeSetter());
themeGetter();