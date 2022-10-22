//Encabezado para las páginas
let cadH=`
<a id="logo" href="./index.html"><img src="./proyectoImag/loto(3).png" alt="ÉCLAT"></a>   
<h1>ÉCLAT Parfumerie</h1>
`
document.getElementById("idHeader").innerHTML=cadH;


//Menú para las páginas
let cadN=`
<input type="checkbox" id="check">
<label for="check" class="menuboton">
    <i class="fa-solid fa-bars" id="menu"></i>
    <i class="fa-regular fa-circle-xmark" id="close"></i>
</label>
<ul class="menu">
    <li><a href="./index.html">Inicio</a></li>
    <li><a>Fragancias</a>
        <ul class="submenu">
            <li><a href="./fraganciasfemeninas.html">Damas</a></li>
            <li><a href="./fraganciasmasculinas.html">Caballeros</a></li>
            <li><a href="./fraganciasinfantiles.html">Niños</a></li> 
        </ul> 
    </li> 
    <li><a href="./maquillaje.html">Maquillaje</a></li>
    <li><a href="./promociones.html">Promociones</a></li>
    <li><a href="./contacto.html">Contacto</a></li>
    <li><a href="./ingresar.html">Ingresar</a></li>
</ul>
`
document.getElementById("idNav").innerHTML=cadN;


//Footer para las páginas

let cadF=`
<a class="social" target="_black" href="https://www.facebook.com">
<img src="./proyectoImag/facebook.png" alt="Facebook" title="Facebook">
</a>
<a class="social" target="_blank" href="https://wa.me/">
<img src="./proyectoImag/whatsapp.png" alt="Whatsapp" title="Whatsapp">
</a>
<a class="social" target="_blank" href="https://twitter.com/">
<img src="./proyectoImag/gorjeo.png" alt="Twitter" title="Twitter">
</a>
<a class="social" target="_blank" href="https://www.instagram.com">
<img src="./proyectoImag/instagram.png" alt="Instagram" title="Instagram">
</a>
<a class="social" href="./sucursales.html">
<img src="./proyectoImag/ubicacion.png" alt="Sucursales" title="Sucursales">
</a>
<p id="copyright">Copyright&copy; 2022 - Página creada por Romi, Sol y Ange - Todos los derechos reservados</p>
<div id="atribucion"> Iconos diseñados por <a target="_blank" href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a target="_blank" href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
`
document.getElementById("idFooter").innerHTML=cadF
