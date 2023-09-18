window.onload = init;

function init(){
    /* Controladores */
    
    const btn_menu = document.querySelector(".menu--icon");
    /* Escuchadores */
    btn_menu.addEventListener("click", showMenu);

    /* Funciones */
    function showMenu(e){
        btn_menu.className += " hide"
    }
}

