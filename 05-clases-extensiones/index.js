function Usuario(id, nombre, edad){
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function(){
        return 'Hola, soy ' + this.nombre;
    }

    this.correr = function(){
        return 'Estoy corriendo';
    }
}

var usuario1 = new Usuario(1, 'Eduardo', 28),
    usuario2 = new Usuario(2, 'Andrea', 17);

if(String.prototype.ucwords === undefined) {
    String.prototype.ucwords = function(){
        var primeraLetra = this[0];
        return primeraLetra.toUpperCase() + this.substring(1, this.length);
    }
}

if(Number.prototype.esPar === undefined) {
    Number.prototype.esPar = function(){
        return this % 2 === 0;
    }
}

if(Usuario.prototype.calcularNacimiento === undefined) {
    Usuario.prototype.calcularNacimiento = function(){
        return new Date().getFullYear() - this.edad;
    }
}

