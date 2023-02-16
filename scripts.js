// crea el boton de link junto al enlace, nombre y el icono
function crear_boton_link(link, desc) {
  return `<a class="button" href='${link}' target='_blank'><span>${desc}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:1rem;height:1rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>
    `
}

function fiubaSpan(lang) {
  let acronimos = {
    "es": {"FIUBA": "Facultad de Ingeniería de la Universidad de Buenos Aires"},
    "en": {"FIUBA": "Faculty of Engineering of the University of Buenos Aires"}
  }
  // return `<span title="Facultad de Ingeniería de la Universidad de Buenos Aires"><u>FIUBA</u></span>`;
  return `<span title="${acronimos[lang]["FIUBA"]}"><u>FIUBA</u></span>`;
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


function cargarIdioma(lang) {
  let lang_ids = Object.keys(LANG_TRANSLATION);
  lang_ids.forEach(id => {
    // console.log(LANG_TRANSLATION[id][lang])
    $(`#${id}`).html(LANG_TRANSLATION[id][lang])
  });
}


function cargarBloque(bloque, id, lang) {
  //evita cargar el bloque de nuevo
  if (bloque.innerHTML.includes(PROJECTS[id].name) && bloque.innerHTML.includes(PROJECTS[id].desc[lang])) {
    // TODO: solucion temporal
    return;
  }

  bloque.innerHTML = "";
  bloque.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(PROJECTS[id].prog_langs) + "<h4>" + PROJECTS[id].name + "</h4> </div>"
  PROJECTS[id].desc[lang] = PROJECTS[id].desc[lang].replace("FIUBA", fiubaSpan(lang));
  bloque.innerHTML += `<p>${PROJECTS[id].desc[lang]}</p>`;
  bloque.innerHTML += `<div class='links'>` + crear_boton_link(PROJECTS[id].link_web, "Demo") + crear_boton_link(PROJECTS[id].link_repo, "Repo") + `</div>`;

  //agregar la clase active al item seleccionado
  // $(`#${id}`).addClass("active");
  console.log("AAAAA")
}

$(document).ready(function () {
  let current_lang = "en";

  cargarIdioma(current_lang);

  //jquery para el hover sobre los items
  var bloque1 = document.getElementById("bloque1");
  var bloque2 = document.getElementById("bloque2");

  //items por default
  $("#bloque1").show();
  $("#bloque2").show();
  cargarBloque(bloque1, "sabelo-fiuba", current_lang);
  cargarBloque(bloque2, "algo3-teg", current_lang);


  // proyectos propios
  $("#sabelo-fiuba").on("mouseenter", function () {
    cargarBloque(bloque1, "sabelo-fiuba", current_lang)
  });
  $("#lok-events").hover(function () {
    cargarBloque(bloque1, "lok-events", current_lang)
  });
  $("#fiuba-knowledge").hover(function () {
    cargarBloque(bloque1, "fiuba-knowledge", current_lang)
  });
  $("#lok-treasure-items").hover(function () {
    cargarBloque(bloque1, "lok-treasure-items", current_lang)
  });
  $("#donut-knowledge").hover(function () {
    cargarBloque(bloque1, "donut-knowledge", current_lang)
  });



  // academico
  $("#algo3-teg").hover(function () {
    cargarBloque(bloque2, "algo3-teg", current_lang)
  });
  $("#shell").hover(function () {
    cargarBloque(bloque2, "shell", current_lang)
  });
  $("#malloc").hover(function () {
    cargarBloque(bloque2, "malloc", current_lang)
  });
  $("#sched").hover(function () {
    cargarBloque(bloque2, "sched", current_lang)
  });
  $("#filesystem").hover(function () {
    cargarBloque(bloque2, "filesystem", current_lang)
  });


  
  //cambiar de idioma
  $("#boton-idioma").on("click", function () {
    current_lang = $("#boton-idioma").data("lang");
    $("#boton-idioma").data("lang", current_lang == "en" ? "es" : "en");
    console.log(current_lang);
    cargarIdioma(current_lang);

    cargarBloque(bloque1, "sabelo-fiuba", current_lang);
    cargarBloque(bloque2, "algo3-teg", current_lang);
  });
});