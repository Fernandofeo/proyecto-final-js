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
    usuarios.push(usuario );
    userid++;
  };

 const eliminarUsuario = (id ) => { 
    let existe= usuarios.some ( usuario => usuario.id=== id );
    if ( existe) { 
        usuarios = usuarios.filter ( usuarios => usuarios.ide !== id); 
    } else {alert ("No existe ningun usuario con ese ID ")}
 };

 const mostrarUSiarios = () => { 
    let nombresUsuarios = usuarios.map (usuario => ` ID:  ${usuario.id} - nombre: ${usuario.nombre}`);
    if( nombresUsuarios. length > 0) { 
        alert ( nombresUsuarios.join (" \n "))
    }else { 
        alert ("no hay usuarios registrados ");
    }
 }; 

 // menu de usuarios 
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
                let nombre = prompt ( "Ingrese su nombre");
                let apellido = prompt ( "Ingrese su apellido ");
                let edad = prompt ( "Ingrese su edad ");
                let usuarios = new Usuario ( nombre , apellido , edad  ); 
                agregarUsuario (usuarios);
                break;
            case 3 :
                let idUsuario = parseInt(prompt ("Ingrese el ID del usuario a eliminar"));
                eliminarUsuario(id);
                break;
            case 4 : 
                estado = false;
                menuPrincipal ();
                break;
            default
        }
    }
 }

