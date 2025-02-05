/*
const usuario = {
    nombre: 'Juan',
    edad: 25,
    direccion: {
        ciudad: 'Granada',
        pais: 'España'
    },
    lenguajes: ['JavaScript', 'Python', 'Java', 'bash', 'Lua', ],
    genero: 'M',
    saludo: function() {
        console.log(`Hola, soy ${this.nombre}`);
        console.log(this.genero === 'M' ? 'Soy un chico' : 'Soy una chica');//true o false
        console.log(`Tengo ${this.edad} años`);
        console.log(`Vivo en ${this.direccion.ciudad}, ${this.direccion.pais}`);
        console.log(`Mis lenguajes de programación favoritos son: ${this.lenguajes.join(', ')}`);
        console.log('¡Encantado de conocerte!');
    }
}
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario['nombre']);
console.log(Object.keys(usuario))
for (let i=0; i<Object.keys(usuario).length; i++) {
    console.log(Object.keys(usuario)[i]);
    console.log(Object.values(usuario)[i]);
    }
    for (let clave in usuario) {
        console.log(clave, usuario[clave]);
    }
    
   usuario.nombre = "diego"
   usuario.edad++;
   usuario.saludo();
   
/**
 console.log(usuario['nombre']);
/*
    


**/
class Usuario {
    constructor(nombre, edad, direccion, lenguajes, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.lenguajes = lenguajes;
        this.genero = genero;
    }
    saludo() {
        console.log(`Hola, soy ${this.nombre}`);
        console.log(this.genero === 'M' ? 'Soy un chico' : 'Soy una chica');
        console.log(`Tengo ${this.edad} años`);
        console.log(`Vivo en ${this.direccion.ciudad}, ${this.direccion.pais}`);
        console.log(`Mis lenguajes de programación favoritos son: ${this.lenguajes.join(', ')}`);
        console.log('¡Encantado de conocerte!');
    }

    cumplirAnios() {
        this.edad++;
    }
    
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
    
    aprenderLenguaje(nuevoLenguaje) {
        this.lenguajes.push(nuevoLenguaje);
    }

    olvidarLenguaje(lenguajeOlvidado) {
        this.lenguajes = this.lenguajes.filter(lenguaje => lenguaje !== lenguajeOlvidado);
    }

    cambiarGenero(nuevoGenero) {
        this.genero = nuevoGenero;
    }
}
const usuario = new Usuario('Juan',25,{ciudad: 'Granada', pais:'España'},['javaScript','Python', 'Java', 'bash', 'Lua',])
usuario.olvidarLenguaje('Lua')
usuario.saludo();