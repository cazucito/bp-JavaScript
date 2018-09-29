/**
* PagePrinter: Herramientas para impresión en pantalla
* @version  0.1
* @since 2018
*/
class PagePrinter {
  // "string" A imprimir
  constructor(){
    this.string = "";
    this.defaultNoStringMessage="";
  }
  // Método estático par ala impresión en la página
  static println(_string, _elementId) {
    if(_elementId) {
      let node = document.getElementById(_elementId);
      if(_string) {
        node.innerHTML += _string + "<br>";
      } else {
        node.innerHTML += this.defaultNoStringMessage + "<br>";
      }
    }
  }
  // TODO: Más funcionalidad
  // TODO: Validar con los diferentes tipos de nodos de HTML
}
