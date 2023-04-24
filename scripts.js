let active_items = {
  bloque1: "sabelo-fiuba",
  bloque2: "algo3-teg",
}

function cargarInfo(current_lang, bloque1, bloque2) {
  cargarIdioma(current_lang);

  bloque1.innerHTML = cargarBloque(active_items.bloque1, current_lang);
  bloque2.innerHTML = cargarBloque(active_items.bloque2, current_lang);

  addEventListeners(current_lang, bloque1, bloque2)

  $("#link-cv").attr("href", current_lang == "en" ? LINKS["cv"][current_lang] : LINKS["cv"][current_lang]);
  $("#link-linkedin").attr("href", current_lang == "en" ? LINKS["linkedin"][current_lang] : LINKS["linkedin"][current_lang]);
}

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

//toma cada id del DOM y llena la información correspondiente de acuerdo al
//idioma pasado por parámetro, desde el objeto LANG_TRANSLATION
function cargarIdioma(lang) {
  let lang_ids = Object.keys(LANG_TRANSLATION);
  lang_ids.forEach(id => {
    $(`#${id}`).html(LANG_TRANSLATION[id][lang])
  });
}


//cargar en el dom el bloque (descripcion, links, etc) de un proyecto
function cargarBloque(id, lang) {
  //evita cargar el bloque de nuevo - TODO: solucion temporal
  // if (bloque.innerHTML.includes(PROJECTS[id].name) && bloque.innerHTML.includes(PROJECTS[id].desc[lang])) {
  //   return;
  // }
  var block = "";
  block += "<div class=wrapper-img-titulo>" + lenguajes(PROJECTS[id].prog_langs) + "<h4>" + PROJECTS[id].name + "</h4> </div>"
  PROJECTS[id].desc[lang] = PROJECTS[id].desc[lang].replace("FIUBA", fiubaSpan(lang));
  block += `<p>${PROJECTS[id].desc[lang]}</p>`;
  block += `<div class='links'>` + (PROJECTS[id].link_web == "" ? "" : crear_boton_link(PROJECTS[id].link_web, "Demo"))
    + crear_boton_link(PROJECTS[id].link_repo, "Repo") + `</div>`;

  return block;
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


function addEventListeners(current_lang, bloque1, bloque2) {

  const proyectos = {
    "sabelo-fiuba": "",
    "lok-events": "",
    "fiuba-knowledge": "",
    "lok-treasure-items": "",
    "donut-knowledge": "",
    "numbers": "",
  }
  const academic = {
    "algo3-teg": "",
    "shell": "",
    "malloc": "",
    "sched": "",
    "filesystem": "",
    "irc": "",
  }
  for (let i in proyectos) {
    proyectos[i] = cargarBloque(i, current_lang)
  }
  for (let i in academic) {
    academic[i] = cargarBloque(i, current_lang)
  }


  // ===== EVENT LISTENERS =====
  // // proyectos propios
  for (let i in proyectos) {
    $(`#${i}`).on("mouseenter", () => {
      bloque1.innerHTML = proyectos[i];               // Cambiar contenido de bloque1
      $("#mis-proyectos-items .active-item").removeClass("active-item");        //Desactivar cualquier otro elemento activo
      $(`#${i}`).addClass("active-item");             //Activar el elemento actual
      active_items.bloque1 = i;
    })
  }
  // academico
  for (let i in academic) {
    $(`#${i}`).on("mouseenter", () => {
      bloque2.innerHTML = academic[i];
      $("#mis-academicos-items .active-item").removeClass("active-item");
      $(`#${i}`).addClass("active-item");
      active_items.bloque2 = i;
    })
  }

  //default active items
  $(`#${active_items.bloque1}`).addClass("active-item"); 
  $(`#${active_items.bloque2}`).addClass("active-item");
}

//precarga las imagenes para que sean guardadas en chaché
function cargarImagenes() {
  for (let i in ICONS) {
    ICONS[i].imageObj.src = ICONS[i].path;
  }
}

// ======== MAIN ==========
$(document).ready(function () {
  let current_lang = "en";

  cargarImagenes()
  crearItemsId();

  //jQuery para el hover sobre los items
  var bloque1 = document.getElementById("bloque1");
  var bloque2 = document.getElementById("bloque2");
  //items por default
  $("#bloque1").show();
  $("#bloque2").show();

  cargarInfo(current_lang, bloque1, bloque2);



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
      { value: 'M67.6,-36.8C79.2,-19,74.2,10.5,60.2,33.8C46.2,57.1,23.1,74.2,-1.6,75.1C-26.3,76.1,-52.6,60.8,-63.8,39.1C-75,17.4,-71.1,-10.7,-58,-29.3C-44.8,-48,-22.4,-57.2,2.8,-58.8C28,-60.5,56.1,-54.5,67.6,-36.8Z' },
      { value: 'M60,-40.4C69,-18.9,61.7,6.2,49,26.8C36.3,47.3,18.1,63.3,-4.2,65.7C-26.5,68.1,-53,57,-62,38.6C-71,20.2,-62.6,-5.6,-49.3,-29.5C-36.1,-53.4,-18.1,-75.5,3.7,-77.7C25.5,-79.8,50.9,-61.9,60,-40.4Z' },
    ],
    fill: {
      value: ["#92b9be", "#8fb3b8"],
      duration: 15000,
      easing: 'easeInOutSine',
    },
    loop: true,
  });

  const blob2_animation = anime({
    targets: '#blob-2 .blob-path',
    easing: 'easeInOutSine',
    duration: 15000,
    direction: 'alternate',
    d: [    //property keyframe llamado d
      { value: 'M51.1,-14.2C60.1,11,56.9,42.5,37.5,58.1C18.1,73.7,-17.5,73.5,-34,58.7C-50.5,43.9,-47.8,14.6,-38.9,-10.4C-30.1,-35.5,-15,-56.3,3,-57.3C21.1,-58.3,42.1,-39.4,51.1,-14.2Z' },
      { value: 'M63.1,-27.9C68.4,-4.2,50.1,19.8,27.4,35.8C4.7,51.9,-22.4,60,-40,48.7C-57.7,37.4,-65.9,6.6,-57.6,-21.1C-49.4,-48.9,-24.7,-73.8,2.1,-74.5C28.9,-75.2,57.8,-51.7,63.1,-27.9Z' }
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


function handAnimation() {
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
  $("#saludo").hover(() => {
    hand_emoji_animation.play();
  }, () => {  //on mouse leave pause animation
    //wait 1 seconds
    setTimeout(() => {
      hand_emoji_animation.pause();
    }, 1000);
  });
}