function setCopyright(){
    const currentYear = (new Date()).getFullYear();
    const startingYear = "2021";
    const outputText = "© "+startingYear+"-"+currentYear;
    document.querySelector('#copyright').textContent = outputText;
}

setCopyright();