/**
* StringBuilder: Optimización y legibilidad en la creación de cadenas
* @version  0.1
* @since 2018
*/
class StringBuilder {
  // "strings" almacena el arreglo que contiene a los elementos que confirman la
  // cadena
  constructor(){
    this.strings = new Array();
  }
  // Adiciona al final la cadena recibida como parámetro.
  // Si es un valor nulo no se adiciona
  append(value) {
    if(value) {
      this.strings.push(value);
    }
    return this;
  }
  // Limpia el arreglo de cadenas
  clear() {
    this.strings.length = 0;
  }
  // Regresa una cadena conformada por los elementos del arreglo
  toString() {
    return this.strings.join("");
  }
  //// TODO: Más funcionalidad de StringBuilder (como en Java)
}
