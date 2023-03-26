//ir a contacto
var links = document.querySelectorAll( '.desplazar' );

    links.forEach( link =>{
        link.addEventListener( "click", event => {
            
            event.preventDefault();
            let moveTo = link.getAttribute( 'moveTo' );
            document.getElementById( moveTo ).scrollIntoView(true);

        });
    });

// ***************Botones para habilitar inputs************************
let btnBackground = document.getElementById('btnBackground');
btnBackground.addEventListener('click', () =>{

  let inputBackground = document.getElementById('inputBackground')
  inputBackground.style.display = "block";
  inputBackground.focus()
  alert("Modificá el input y dá enter")

})
    // Modificar Fondo
    function modificarBackground (valor) {
      // document.getElementById('imgBackground').setAttribute ('src', valor)
      document.getElementById('imgBackground').style.backgroundImage = `url(${valor})`
    }

            //Controla si se hizo enter
            let inputBackground = document.getElementById('inputBackground')
            inputBackground.addEventListener('keyup', (e) => {
              logMessage(`Key "${e.key}" released [event: keyup]`);
              if (e.key == "Enter"){
                document.getElementById("inputBackground").style.display="none";
              }
            })

let btnAvatar = document.getElementById('btnAvatar');
btnAvatar.addEventListener('click', () =>{

  let inputAvatar = document.getElementById('inputAvatar')
  inputAvatar.style.display = "block";
  inputAvatar.focus()
  alert("Modificá el input y dá enter")

})

      // Modificar Avatar
      function modificarAvatar (valor) {
        // document.getElementById('inputAvatar').innerHTML = valor
        document.getElementById('imgAvatar').setAttribute ('src', valor)

      }

              //Controla si se hizo enter
              let inputAvatar = document.getElementById('inputAvatar')
              inputAvatar.addEventListener('keyup', (e) => {
                logMessage(`Key "${e.key}" released [event: keyup]`);
                if (e.key == "Enter"){
                  document.getElementById("inputAvatar").style.display="none";
                }
              })

let btnNombre = document.getElementById('btnNombre');
btnNombre.addEventListener('click', () =>{

  let inputNombre = document.getElementById('inputNombre')
  inputNombre.style.display = "block";
  inputNombre.focus()
  alert("Modificá el input y dá enter")

})

    // Modificar Nombre
    function modificarNombre (valor) {
      document.getElementById('textNombre').innerHTML = valor

    }

            //Controla si se hizo enter
            let inputNombre = document.getElementById('inputNombre')

            inputNombre.addEventListener('keyup', (e) => {
              logMessage(`Key "${e.key}" released [event: keyup]`);
              if (e.key == "Enter"){
                document.getElementById("inputNombre").style.display="none";
              }

            })

let btnDescripcion = document.getElementById('btnDescripcion');
btnDescripcion.addEventListener('click', () =>{

  let inputDescripcion = document.getElementById('inputDescripcion')
  inputDescripcion.style.display = "block";
  inputDescripcion.focus()
  alert("Modificá el input y dá enter")

})

    // Modificar Descripcion
    function modificarDescripcion (valor) {
      document.getElementById('textDescripcion').innerHTML = valor
    }
            //Controla si se hizo enter
            let inputDescripcion = document.getElementById('inputDescripcion')
            inputDescripcion.addEventListener('keyup', (e) => {
              logMessage(`Key "${e.key}" released [event: keyup]`);
              if (e.key == "Enter"){
                document.getElementById("inputDescripcion").style.display="none";
              }
            })

let btnAboutMe = document.getElementById('btnAboutMe');
btnAboutMe.addEventListener('click', () =>{


  let inputAboutMe = document.getElementById('inputAboutMe')
  inputAboutMe.style.display = "block"
  inputAboutMe.focus()
  alert("Modificá el input y dá enter. O ingresá un archivo txt")
  let file1 = document.getElementById('file1')
  file1.style.display = "block"

  let textAcercade = document.getElementById('textAcercade').innerHTML
  console.log(textAcercade);

})

    // Modificar AcercaDe
    function modificarAcercade (valor) {
      document.getElementById('textAcercade').innerHTML = valor
    }
    function logMessage (message) {
      console.log(message + "<br>");
    }
      //Controla si se hizo enter
      let inputAboutMe = document.getElementById('inputAboutMe')
      inputAboutMe.addEventListener('keyup', (e) => {
        logMessage(`Key "${e.key}" released [event: keyup]`);
        if (e.key == "Enter"){
          document.getElementById("inputAboutMe").style.display="none";
          document.getElementById('file1').style.display = "none"
        }
      })

       //Carga el contenido de un archivo de texto y lo muestra en el input
       function showFile(input) {
        let file = input.files[0];
        alert(`File name: ${file.name}`); // e.g my.png
        // alert(`Last modified: ${file.lastModified}`);  // e.g 1523424324

        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
          console.log(reader.result);
          document.getElementById("textAcercade").innerText = reader.result;

          document.getElementById("inputAboutMe").style.display="none";
          document.getElementById('file1').style.display = "none"
        }
        reader.onerror = function () {
          console.log(reader.error);
        }
      }

  // //Borrar hash de la url de los anclas
  //   window.onhashchange = function () {
  //     window.history.pushState('', document.title, window.location.pathname)
  //   }

    // Boton y modal Login
    const login = document.getElementById("login");
    login.addEventListener("click", btnLogin);

    function btnLogin() {
      if (document.getElementById('login').innerText == "LOGOUT") {
        document.getElementById('login').innerText = "LOGIN"
        // alert("CERRANDO MODO EDICIÓN")
        deshabilitarBotones()
      } else {
        modalLogin()
      }
    };

    function modalLogin() {
      Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (login == "Ale" && password == "123456") {
            document.getElementById('login').innerText = "LOGOUT"
            // alert("contraseña ingresada correctamente")
            habilitarBotones()
            return { login: login, password: password }

          } else {
            alert("Ha ingresado mal la contraseña")
            Swal.showValidationMessage(`Please enter login and password`)
          }

        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })
    }

   // *****
    // ***** Habilitar botones de edicion y delete
   // *****

    function habilitarBotones() {
      // alert("botones habilitados")
      let botones = document.querySelectorAll(".btnEdicion")
      let botones2 = document.querySelectorAll(".btnAdd")
      let botones3 = document.querySelectorAll(".btnDelete")

      for (let index = 0; index < botones.length; index++) {
        botones[index].style.display = "inline-block"
      }

      for (let index = 0; index < botones2.length; index++) {
        botones2[index].style.display = "inline-block"
      }

      for (let index = 0; index < botones3.length; index++) {
        botones3[index].style.display = "inline-block"
      }

      document.getElementById('login').style.backgroundColor = "green"

    }

    function deshabilitarBotones() {
      // alert("botones deshabilitados")

      document.getElementById('login').style.backgroundColor = "#e9573f"

      let botones = document.querySelectorAll(".btnEdicion")
      let botones2 = document.querySelectorAll(".btnAdd")
      let botones3 = document.querySelectorAll(".btnDelete")

      for (let index = 0; index < botones.length; index++) {
        botones[index].style.display = "none"
      }

      for (let index = 0; index < botones2.length; index++) {
        botones2[index].style.display = "none"
      }

      for (let index = 0; index < botones3.length; index++) {
        botones3[index].style.display = "none"
      }

      document.getElementById('inputBackground').style.display = "none"
      document.getElementById('inputAvatar').style.display = "none"
      document.getElementById('inputNombre').style.display = "none"
      document.getElementById('inputDescripcion').style.display = "none"
      document.getElementById('inputAboutMe').style.display = "none"

    }

    // $(document).ready(function () { irArriba(); }); //Hacia arriba

    //   /* Boton ir para arriba */
    // function irArriba() {
    //   $('.ir-arriba').click(function () { $('body,html').animate({ scrollTop: '0px' }, 1000); });
    //   $(window).scroll(function () {
    //     if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
    //   });
    //   $('.ir-abajo').click(function () { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
    // }

//Para crear pdf
    let boton = document.getElementById("crearpdf");
    let container = document.getElementById("contenedor");

    boton.addEventListener("click", event => {
        event.preventDefault();
        // boton.style.display = "none";
        window.print();
    }, false);

    // container.addEventListener("click", event => {
    //     boton.style.display = "initial";
    // }, false);

    //Boton ADD works

    let btnAdd = document.getElementById('btnAddWorks')
    btnAddWorks.addEventListener('click', addWorks)

    async function addWorks() {
      const { value: formValues } = await Swal.fire({
        title: 'Work Experience',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">'+
          '<input id="swal-input3" class="swal2-input">'+
          '<input id="swal-input4" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
    }


    //Boton ADD education

    let btnEducation = document.getElementById('btnEducation')
    btnEducation.addEventListener('click', addEducation)

    async function addEducation() {
      const { value: formValues } = await Swal.fire({
        title: 'Education',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">'+
          '<input id="swal-input3" class="swal2-input">'+
          '<input id="swal-input4" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
    }
    

        //Boton ADD skills

        let btnSkills = document.getElementById('btnSkills')
        btnSkills.addEventListener('click', addSkills)
    
        async function addSkills() {
          const { value: formValues } = await Swal.fire({
            title: 'Professional Skills',
            html:
              '<input id="swal-input1" class="swal2-input">' +
              '<input id="swal-input4" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input4').value
              ]
            }
          })

          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          }
        }

    //Boton ADD projets

    let btnProjects = document.getElementById('btnProjects')
    btnProjects.addEventListener('click', addProjects)

    async function addProjects() {
      const { value: formValues } = await Swal.fire({
        title: 'Projects',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">'+
          '<input id="swal-input3" class="swal2-input">'+
          '<input id="swal-input4" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
    }