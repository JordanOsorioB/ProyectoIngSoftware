function mostrarAlerta(){
    console.log('Prueba de mensaje');
    alert('alojaa prueba');
    Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
    `
    });
}

fetch('menu.html')
.then(response => response.text())
.then(html => document.getElementById('loadMenu').innerHTML = html)
.catch(error => console.error('Error al cargar el menú:', error));


fetch('footer.html')
.then(response => response.text())
.then(html => document.getElementById('loadFooter').innerHTML = html)
.catch(error => console.error('Error al cargar el Folder:', error));



function obtenerNumeros(){
    var $primerNumero = document.getElementById("valor1");
    console.log($primerNumero.value);

    var $segundoNumero = document.getElementById("valor2");
    console.log($segundoNumero.value);

    var $resultado = document.getElementById("resultado");
    console.log($segundoNumero.value+$primerNumero.value);

    var intPrimerNumero = parseInt($primerNumero.value);
    var intSegundoNumero = parseInt($segundoNumero.value);
    console.log(intPrimerNumero + intSegundoNumero);

    document.getElementById('resultado').value = (intPrimerNumero + intSegundoNumero);
    
   


}
function sumar2(){
    var intValor1 = parseInt(document.getElementById('valor1').value);
    var intValor2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').value = intValor1 + intValor2;

}