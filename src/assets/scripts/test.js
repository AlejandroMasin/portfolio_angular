window.addEventListener('load', ()=> {
    //Borrar hash de la url de los anclas
    window.onhashchange = function () {
        window.history.pushState('', document.title, window.location.pathname)
      }

})