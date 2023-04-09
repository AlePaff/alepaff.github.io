// crea el boton de link junto al enlace, nombre y el icono
function crear_boton_link(link, desc) {
  return `<a class="button" href='${link}' target='_blank'><span>${desc}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:1rem;height:1rem;fill:currentColor"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"></rect><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path></g></g></svg></a>
    `
}

function fiubaSpan(lang) {
  let acronimos = {
    "es": { "FIUBA": "Facultad de Ingeniería de la Universidad de Buenos Aires" },
    "en": { "FIUBA": "Faculty of Engineering of the University of Buenos Aires" }
  }
  return `<span data-tooltip='${acronimos[lang]["FIUBA"]}' class="has-tooltip-arrow"><u>FIUBA</u></span>`;
}


function cargarInfo(current_lang, bloque1, bloque2) {
  cargarIdioma(current_lang);

  cargarBloque(bloque1, "sabelo-fiuba", current_lang);
  cargarBloque(bloque2, "algo3-teg", current_lang);

  $("#link-cv").attr("href", current_lang == "en" ? LINKS["cv"][current_lang] : LINKS["cv"][current_lang]);
  $("#link-linkedin").attr("href", current_lang == "en" ? LINKS["linkedin"][current_lang] : LINKS["linkedin"][current_lang]);
}


//toma cada id del DOM y llena la información correspondiente de acuerdo al
//idioma pasado por parámetro, desde el objeto LANG_TRANSLATION
function cargarIdioma(lang) {
  let lang_ids = Object.keys(LANG_TRANSLATION);
  lang_ids.forEach(id => {
    $(`#${id}`).html(LANG_TRANSLATION[id][lang])
  });
}


//cargar en el dom el bloque (descripcion, links, etc) de un proyecto
function cargarBloque(bloque, id, lang) {
  //evita cargar el bloque de nuevo - TODO: solucion temporal
  if (bloque.innerHTML.includes(PROJECTS[id].name) && bloque.innerHTML.includes(PROJECTS[id].desc[lang])) {
    return;
  }

  bloque.innerHTML = "";
  bloque.innerHTML += "<div class=wrapper-img-titulo>" + lenguajes(PROJECTS[id].prog_langs) + "<h4>" + PROJECTS[id].name + "</h4> </div>"
  PROJECTS[id].desc[lang] = PROJECTS[id].desc[lang].replace("FIUBA", fiubaSpan(lang));
  bloque.innerHTML += `<p>${PROJECTS[id].desc[lang]}</p>`;
  bloque.innerHTML += `<div class='links'>` + (PROJECTS[id].link_web == "" ? "" : crear_boton_link(PROJECTS[id].link_web, "Demo"))
    + crear_boton_link(PROJECTS[id].link_repo, "Repo") + `</div>`;

  //cambiar color background-color: #b9ff68; a los botones
  // $(`#${id}`).css("background-color", "#b9ff68");
}


var screen_size = 768;

//devuelve verdadero o falso dependiendo del tamaño de la pantalla ()
function isMobileDevice() {
  return $(window).width() <= screen_size;
}


// se encarga de añadir al dom los items e ids para identificar luego
function crearItemsId() {

  Object.keys(PROJECTS).forEach(id => {
    //si es un dispositivo movil no se crean los items con links
    let item;
    if (isMobileDevice()) {
      item = document.createElement("div");
    } else {
      item = document.createElement("a");
      item.setAttribute("href", PROJECTS[id].link_web);
      item.setAttribute("target", "_blank");
    }

    item.setAttribute("id", id);
    item.setAttribute("class", "column is-narrow item");
    item.innerHTML = `<span>${PROJECTS[id].name}</span>`;

    if (PROJECTS[id].type == "project") {
      $("#mis-proyectos-items").append(item);
    }
    else if (PROJECTS[id].type == "academic") {
      $("#mis-academicos-items").append(item);
    }

  });
}


$(document).ready(function () {
  let current_lang = "en";

  crearItemsId();
  cargarIdioma(current_lang);

  //jquery para el hover sobre los items
  var bloque1 = document.getElementById("bloque1");
  var bloque2 = document.getElementById("bloque2");

  //items por default
  $("#bloque1").show();
  $("#bloque2").show();

  cargarInfo(current_lang, bloque1, bloque2);

  // proyectos propios
  $("#sabelo-fiuba").on("mouseenter", function () {
    cargarBloque(bloque1, "sabelo-fiuba", current_lang)
    // $(this).toggleClass("active-item");
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
  $("#numbers").hover(function () {
    cargarBloque(bloque1, "numbers", current_lang)
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
  $("#irc").hover(function () {
    cargarBloque(bloque2, "irc", current_lang)
  });



  // ======= cambiar de idioma =======
  $("#boton-idioma").on("click", function () {
    $(this).toggleClass("active-lang");   //cambiar el tamaño del boton

    current_lang = $("#boton-idioma").data("lang");
    $("#boton-idioma").data("lang", current_lang == "en" ? "es" : "en");
    cargarInfo(current_lang, bloque1, bloque2);

    //reload needed animations    
    handAnimation()
  });


  // ======= ANIMACIONES =========
  const blob1_animation = anime({
    targets: '#blob-1 .blob-path',
    easing: 'easeInOutSine',
    duration: 15000,
    direction: 'alternate',
    d: [    //property keyframe llamado d
      { value: 'M45.7,-19.6C51.8,4,44.2,27.2,26.8,40.7C9.4,54.3,-17.8,58.1,-36.2,45.7C-54.7,33.3,-64.4,4.6,-56.9,-20.9C-49.4,-46.3,-24.7,-68.6,-2.5,-67.8C19.8,-67,39.6,-43.1,45.7,-19.6Z' },
    ],
    fill: {
      value: ["#8cabaf", "#8fb3b8"],
      duration: 15000,
      easing: 'easeInOutSine',
    },
    loop: true,
  });

  const blob2_animation = anime({
    targets: '#blob-2 .blob-path',
    easing: 'easeInOutSine',
    duration: 5000,
    direction: 'alternate',
    d: [    //property keyframe llamado d
      { value: 'M63.1,-27.9C68.4,-4.2,50.1,19.8,27.4,35.8C4.7,51.9,-22.4,60,-40,48.7C-57.7,37.4,-65.9,6.6,-57.6,-21.1C-49.4,-48.9,-24.7,-73.8,2.1,-74.5C28.9,-75.2,57.8,-51.7,63.1,-27.9Z' },
    ],
    loop: true,
  });


  const blob3_animation = anime({
    targets: '#blob-3 .blob-path',
    easing: 'linear',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 100000,
    loop: true

  });

  handAnimation()


});


function handAnimation(){  
  const hand_emoji_animation = anime({
    targets: '#hand-emoji',
    //hacer girar de un lado a otro
    rotate: {
      value: [0, 20, 0, -20, 0],
      duration: 100,
      easing: 'linear',
    },
    direction: 'alternate',
    autoplay: false,    //default paused
    loop: true
  });
  //on mouse hover play animation
  $("#hand-emoji").hover(() => {
    hand_emoji_animation.play();
  }, () => {  //on mouse leave pause animation
    hand_emoji_animation.pause();
  });
}