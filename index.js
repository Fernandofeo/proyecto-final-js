/*// Solicitar un nombre 
let nombre = prompt ("ingrese su nombre") .toLowerCase();
console.log( `Bienvenido ${nombre}`);

// Solicitar una edad +18 
let edad 
 while (true) {
  edad = prompt ("Ingrese su edad: ");
  if (edad >= 18 ){ console.log(" Ingreso correcto") ; break ;  }
  else {console.log( "Ingrese una edad correcta + 18 ")}}
  
// solicitar nombre de empresa 
let nombreEmpresa = prompt ("Por favor ingrese su empresa ") .toLowerCase()
alert ( ` Bienvenido ${nombre} de la empresa ${ nombreEmpresa} `);
*/

// usuario 
let  userid = 1;
let usuarios  =  [ ]; 
 class usuario { 
    constructor ( nombre , apellido , edad ){
        this. nombre= nombre;
        this. apellido = apellido;
        this. edad = edad;
        this. id = userid; 
    }
 }

 const agregarUsuario = (usuario)=> {
    usuarios.push( usuario );
    userid++ 
  };

 const eliminarUsuario = (id ) => { 
    let existe= usuarios.some ( usuario => usuario.id=== id );
    if ( existe) { 
        usuarios = usuarios.filter ( usuarios => usuarios.ide !== id); 
    } else {alert ("No existe ningun usuario con ese ID ")}
 };

 const mostrarUSiarios = () => { 
    let nombresUsuarios = usuarios.map (usuario => ` ID:  ${usuario.id} - Nombre: ${usuario.nombre} - Edad: ${usuario.edad} `);
    if( nombresUsuarios. length > 0) { 
        alert ( nombresUsuarios.join (" \n "))
    }else { 
        alert ("no hay usuarios registrados ");
    }
 }; 
 /*
 const menuUsuarios = () =>{
  let estado = true ;
  while ( estado ) { 
      let opcion= parseInt(
          prompt (
              `
              Menu Usuarios 
              1- Mostrar usuarios
              2- Agregar Usuarios 
              3- Eliminar Usuarios
              4- Volver 
              `
          )
      );
      switch ( opcion ) {
          case 1 : 
              mostrarUSiarios();
              break;
          case 2 :
              let nombre = prompt ( "Ingrese su nombre") .toLowerCase();
              let apellido = prompt ( "Ingrese su apellido ") .toLowerCase();
              let edad ; 
                while (true) {
                 edad = prompt("Ingrese su edad: ");
                if (edad >= 18) {
                    break;
                } else {
                    alert("ingreso apto mayores de 18 ");
                }
                };
             let usuario = new  usuario ( nombre , apellido, edad ); 
             agregarUsuario (usuario) ;
             break; 
    
          case 3 :
              let idUsuario = parseInt(prompt ("Ingrese el ID del usuario a eliminar"));
              eliminarUsuario(idUsuario);
              break;
          case 4 : 
              estado = false;
              menuPrincipal ();
              break;
          default :
          alert ("Ingrese una opcion valida ");
          break;
         }
  }
}

menuUsuarios();
*/
const menuUsuarios = () => {
    let estado = true;
    while (estado) {
        let opcion = parseInt(
            prompt(
                `
              Menu Usuarios 
              1- Mostrar usuarios
              2- Agregar Usuarios 
              3- Eliminar Usuarios
              4- Volver 
              `
            )
        );
        switch (opcion) {
            case 1:
                mostrarUsuarios(); // Corregido el nombre de la función
                break;
            case 2:
                let nombre = prompt("Ingrese su nombre").toLowerCase();
                let apellido = prompt("Ingrese su apellido").toLowerCase();
                let edad;
                while (true) {
                    edad = prompt("Ingrese su edad: ");
                    if (edad >= 18) {
                        break;
                    } else {
                        alert("Ingreso apto para mayores de 18");
                    }
                }
                let nuevoUsuario = new Usuario(nombre, apellido, edad); // Asumiendo que tienes una clase Usuario definida
                agregarUsuario(nuevoUsuario);
                break;

            case 3:
                let idUsuario = parseInt(prompt("Ingrese el ID del usuario a eliminar"));
                eliminarUsuario(idUsuario);
                break;
            case 4:
                estado = false;
                menuPrincipal();
                break;
            default:
                alert("Ingrese una opción válida");
                break;
        }
    }
};
menuUsuarios()