function redireccionar(){
    let selectElement = document.getElementById("matematicas");
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    window.location.href =  selectedOption;
}
