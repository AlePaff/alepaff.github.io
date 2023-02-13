// crea el boton de link junto al enlace, nombre y el icono
function crear_boton_link(link, desc) {
    return `<a class="button" href='${link}' target='_blank'><span>${desc}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:1rem;height:1rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>
    `
  }

  //devuelve un html de una array de lenguajes (ej. ["html", "css", "js"] devuelve un html con los iconos de los lenguajes)
  function lenguajes(array_lang) {
    // var html = "https://cdn-icons-png.flaticon.com/512/1216/1216733.png";
    var html = "icons/html5.png";
    var css = "icons/css.png";
    var js = "icons/js.png";
    // var js = "./icons/js_alt.png";
    var boostrap = "icons/boostrap.png";
    // var boostrap_alt = ".icons/boostrap_alt.png";
    var isotope = "icons/isotope.ico";
    var python = "icons/python.png";
    var jquery = "icons/jquery.png";
    var c = "icons/c.svg";
    // var gitflow_alt = "icons/gitflow_alt.png";
    var gitflow = "icons/gitflow.png";
    var java = "icons/java.png";
    var chakra = "icons/chakra.png";
    var react = "icons/react.ico";

    var total = "<div id='imagenes'>";

    for (let i = 0; i < array_lang.length; i++) {
      if (array_lang[i] == "html") {
        total += `<img src='${html}' height='32' width='32' title='HTML'>`;
      } else if (array_lang[i] == "css") {
        total += `<img src='${css}' height='32' width='32' title='CSS'>`;
      } else if (array_lang[i] == "js") {
        total += `<img src='${js}' height='32' width='32' title='JS'>`;
      } else if (array_lang[i] == "boostrap") {
        total += `<img src='${boostrap}' height='32' width='32' title='Boostrap (JS)'>`;
      } else if (array_lang[i] == "isotope") {
        total += `<img src='${isotope}' height='32' width='32' title='Isotope (JS)'>`;
      } else if (array_lang[i] == "python") {
        total += `<img src='${python}' height='32' width='32' title='Python'>`;
      } else if (array_lang[i] == "jquery") {
        total += `<img src='${jquery}' height='32' width='32' title='Jquery (JS)'>`;
      } else if (array_lang[i] == "c") {
        total += `<img src='${c}' height='32' width='32' title='C'>`;
      } else if (array_lang[i] == "gitflow") {
        total += `<img src='${gitflow}' height='32' width='32' title='Uso destacable de Git'>`;
      } else if (array_lang[i] == "java") {
        total += `<img src='${java}' height='32' width='32' title='Java'>`;
      } else if (array_lang[i] == "chakra") {
        total += `<img src='${chakra}' height='32' width='32' title='Chakra UI'>`;
      } else if (array_lang[i] == "react") {
        total += `<img src='${react}' height='32' width='32' title='React'>`;
      } else if (array_lang[i] == "sass") {
        total += `<img src='icons/sass.png' height='32' width='32' title='Sass'>`;
      }
    }
    total += "</div>";
    return total;
  }

  function fiubaSpan() {
    return `<span title="Facultad de Ingeniería de la Universidad de Buenos Aires"><u>FIUBA</u></span>`;
  }

  //jquery para el hover sobre los items
  $(document).ready(function () {
    var bloque1 = document.getElementById("bloque1");
    var bloque2 = document.getElementById("bloque2");

    //por default se muestra el primer item
    $("#bloque1").show();
    $("#bloque2").show();
    bloque1.innerHTML = "";
    bloque1.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["react", "chakra", "css", "js"]) + "<h4>Sabelo Fiuba</h4> </div>";
    bloque1.innerHTML += `<p>Se trata de una recolección de material de apuntes, resumenes, noticias, grupos y nuevos proyectos relacionados a la ` + fiubaSpan() + `. Primero construido en solo Html, JS y Css y luego actualizado a React, usando ChakraUI como framework de estilos. Utiliza la api de Github para saber la ultima actualización del proyecto y la de Google Analytics para saber la cantidad de visitas.</p>`;
    bloque1.innerHTML += `<div id='links'>` + crear_boton_link("https://alepaff.github.io/sabelo-fiuba/", "Demo") + crear_boton_link("https://github.com/AlePaff/sabelo-fiuba", "Repo") + `</div>`;
    bloque2.innerHTML = "";
    bloque2.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["java", "gitflow"]) + "<h4>T.E.G</h4> </div>";
    bloque2.innerHTML += "<p>Implementación en Java del popular juego <a href='https://es.wikipedia.org/wiki/TEG'>TEG</a> para la materia Algoritmos y Programación III de la " + fiubaSpan() + ", con fuerte enfazis en un diseño de Programación Orientada a Objetos (POO).</p>";
    bloque2.innerHTML += `<div id='links'>` + crear_boton_link("https://github.com/nspiguelman/algo3_tp2", "Repo") + `</div>`;

    // $("#bloque1").hide();
    // $("#bloque2").hide();

    // proyectos propios
    $("#sabelo-fiuba").hover(function () {

      $("#bloque1").show();
      //lenguajes, descripcion, links
      bloque1.innerHTML = "";
      bloque1.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["react", "chakra", "css", "js"]) + "<h4>Sabelo Fiuba</h4> </div>";
      bloque1.innerHTML += `<p>Se trata de una recolección de material de apuntes, resumenes, noticias, grupos y nuevos proyectos relacionados a la ` + fiubaSpan() + `. Primero construido en solo Html, JS y Css y luego actualizado a React, usando ChakraUI como framework de estilos. Utiliza la api de Github para saber la ultima actualización del proyecto y la de Google Analytics para saber la cantidad de visitas.</p>`;
      bloque1.innerHTML += `<div id='links'>` + crear_boton_link("https://alepaff.github.io/sabelo-fiuba/", "Demo") + crear_boton_link("https://github.com/AlePaff/sabelo-fiuba", "Repo") + `</div>`;


    });


    $("#lok-events").hover(function () {

      $("#bloque1").show();
      bloque1.innerHTML = "";
      bloque1.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["html", "css", "js"]) + "<h4>LOK Events</h4> </div>";
      bloque1.innerHTML += "<p>Proyecto para probar como crear tablas dinamicas en Javascript, actualizandose según eventos periódicos del juego League of Kingdoms</p>";
      bloque1.innerHTML += `<div id='links'>` + crear_boton_link("https://alepaff.github.io/lok-events", "Demo") + crear_boton_link("https://github.com/AlePaff/lok-events", "Repo") + `</div>`;
    });

    $("#fiuba-knowledge").hover(function () {
      $("#bloque1").show();
      bloque1.innerHTML = "";
      bloque1.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["html", "js", "python"]) + "<h4>Fiuba Knowledge</h4> </div>";
      bloque1.innerHTML += "<p>Pequeño proyecto para la recopilación de temas que se ven en cada materia de la " + fiubaSpan() + ", aqui aprendí como hacer scraping de datos desde pdfs para luego procesarlos utilizando un módulo de Python y presentarlos en la web</p>";
      bloque1.innerHTML += `<div id='links'>` + crear_boton_link("https://alepaff.github.io/FIUBA-knowledge/", "Demo") + crear_boton_link("https://github.com/AlePaff/FIUBA-knowledge", "Repo") + `</div>`;
    });

    $("#lok-treasure-items").hover(function () {
      $("#bloque1").show();
      bloque1.innerHTML = "";
      bloque1.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["html", "css", "js", "jquery", "isotope", "boostrap"]) + "<h4>LOK Treasure Items</h4> </div>";
      bloque1.innerHTML += "<p>Web para ordenar y filtrar items de League of Kingdoms (LOK) de acuerdo a sus habilidades, power-ups, grados, etc. Se utilizó una librería de js para crear el grid y la logica. Los datos se obtuvieron del juego oficial.</p>";
      bloque1.innerHTML += `<div id='links'>` + crear_boton_link("https://alepaff.github.io/LOK-Treasure-items/", "Demo") + crear_boton_link("https://github.com/AlePaff/LOK-Treasure-items", "Repo") + `</div>`;
    });

    $("#donut-knowledge").hover(function () {
      $("#bloque1").show();
      bloque1.innerHTML = "";
      bloque1.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["sass", "js", "jquery"]) + "<h4>Donut Knowledge</h4> </div>";
      bloque1.innerHTML += "<p>Mapa interactivo de infografías para visualizar ramas complejas de la ciencia y el conocimiento en general. Utilizando la librería <a href='http://www.outsharked.com/imagemapster/' target='_blank'>ImageMapster</a>, y <a href='https://sass-lang.com/' target='_blank'>Sass</a> para el diseño.</p>";
      bloque1.innerHTML += `<div id='links'>` + crear_boton_link("https://alepaff.github.io/the-donut-of-knowledge-map/", "Demo") + crear_boton_link("https://github.com/AlePaff/the-donut-of-knowledge-map", "Repo") + `</div>`;
    });



    // academico
    $("#algo3-teg").hover(function () {
      $("#bloque2").show();
      bloque2.innerHTML = "";
      bloque2.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["java", "gitflow"]) + "<h4>T.E.G</h4> </div>";
      bloque2.innerHTML += "<p>Implementación en Java del popular juego <a href='https://es.wikipedia.org/wiki/TEG'>TEG</a> para la materia Algoritmos y Programación III de la " + fiubaSpan() + ", con fuerte enfazis en un diseño de Programación Orientada a Objetos (POO).</p>";
      bloque2.innerHTML += `<div id='links'>` + crear_boton_link("https://github.com/nspiguelman/algo3_tp2", "Repo") + `</div>`;
    });

    $("#shell").hover(function () {
      $("#bloque2").show();
      bloque2.innerHTML = "";
      bloque2.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["c"]) + "<h4>Shell</h4> </div>";
      bloque2.innerHTML += "<p>Implementación en C de un interprete de comandos <a href='https://es.wikipedia.org/wiki/Shell_(inform%C3%A1tica)'>Shell</a> con las funcionalidades minimas para Unix similar a bash, zsh y fish para la materia Sistemas Operativos de la " + fiubaSpan() + ".</p>";
      bloque2.innerHTML += `<div id='links'>` + crear_boton_link("https://github.com/AlePaff/TPS-sisop/tree/entrega-shell", "Repo") + `</div>`;
    });

    $("#malloc").hover(function () {
      $("#bloque2").show();
      bloque2.innerHTML = "";
      bloque2.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["c", "gitflow"]) + "<h4>Malloc</h4> </div>";
      bloque2.innerHTML += "<p>Implementación del manejo del heap de las funciones malloc(), calloc(), realloc(), free() de la librería estandar de C para la administración de memoria para la materia Sistemas Operativos de la " + fiubaSpan() + ".</p>";
      bloque2.innerHTML += `<div id='links'>` + crear_boton_link("https://github.com/AlePaff/TPS-sisop/tree/entrega-malloc", "Repo") + `</div>`;
    });

    $("#sched").hover(function () {
      $("#bloque2").show();
      bloque2.innerHTML = "";
      bloque2.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["c", "gitflow"]) + "<h4>Scheduller</h4> </div>";
      bloque2.innerHTML += "<p>Solución al <a href='https://pdos.csail.mit.edu/6.828/2017/index.html'>exokernel JOS del MIT</a> de licencia libre para la implementación del cambio de contexto para procesos y scheduler/planificador sobre un sistema operativo preexistente, utilizando una modificación del algoritmo MLFQ para la materia Sistemas Operativos de la " + fiubaSpan() + ".</p>";
      bloque2.innerHTML += `<div id='links'>` + crear_boton_link("https://github.com/AlePaff/TPS-sisop/tree/entrega-sched", "Repo") + `</div>`;
    });


    $("#filesystem").hover(function () {
      $("#bloque2").show();
      bloque2.innerHTML = "";
      bloque2.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(["c", "gitflow"]) + "<h4>File System</h4> </div>";
      bloque2.innerHTML += "<p>Implementación de un sistema de archivo para Linux, utilizando el mecanismo <a href='https://en.wikipedia.org/wiki/Filesystem_in_Userspace'>FUSE</a> provisto por el kernel para la materia Sistemas Operativos de la " + fiubaSpan() + ".</p>";
      bloque2.innerHTML += `<div id='links'>` + crear_boton_link("https://github.com/AlePaff/TPS-sisop/tree/entrega-filesystem", "Repo") + `</div>`;
    });

  });