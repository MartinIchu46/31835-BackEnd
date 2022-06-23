class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre= nombre,
        this.apellido= apellido,
        this.libros= [],
        this.mascotas= []
    }

    getFullName(){
        return '${this.nombre} ${this.apellido}'
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor){
        let libroNuevo = [nombre, autor];
        this.libro.push(libroNuevo);
    }

    getBookNames() {
        let bookNames= [];
        for (let i=0; i<this.libro.length; i++) {
            bookNames.push(this.libro.nombre)
        }
        return bookNames

    }


}