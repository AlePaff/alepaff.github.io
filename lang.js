let lang_select = ["en", "es"]

// En mi caso mi camino hacia la programación fué cuando de niño-adolescente tardaba mucho en abrir ciertas carpetas donde guardaba mis cosas así que me pregunté si había alguna especie de atajo, ahí es cuando descubrí AutoHotKey, donde al escribir “juegos” me abría mi carpeta de juegos. Cuando el primer script funcionó ya no habia vuelta atras podia hacer mis propios atajos, combinaciones de teclas, automatizar tareas, basicamente tenía el poder de crear! <br>


let LANG_TRANSLATION = {
    "boton-idioma": { "en": "Spanish", "es": "Ingles" },
    "about-me-title": { "en": "About me", "es": "About me" },
    "about-me": {
        "es": `Hola, soy Alejandro, y soy un <i>apasionado</i> por básicamente cualquier tema: desde saber las etimologías de las palabras hasta construir cosas de hierro y madera... hacer ejercicio, tocar el piano, conocer el porqué de las cosas, ver que hay una técnica para escribir más rápido así que ir de lleno a aprenderla, como puedo comunicarme con el otro, aprender muchos idiomas, ayudar, dar clases, estar con amigos y primos, reir siempre mucho, deprimirme, estresarme, ver porque me siento mal y cambiarlo, siempre practicando la introspección.
        <br><br>  
        Mas allá de lo mencionado debo concentrarme, y quiero desarrollarme en mi área (la informatica) y ser un profesional en ésta disciplina. Tengo especial interes en el desarrollo web, descubrí lo divertido y apasionante que es construir sitios útiles disponibles para todo el mundo como los que se verán en este portfolio.
        <br><br>
        Ahora mismo estoy buscando una posición de desarrollador junior para dar comienzo a mi carrera y trabajar entre profesionales, sé que el camino es largo pero quiero conocer y aprender las tecnologias de ésta área, en particular el front end.`,
       
        "en":
        `
        Hi, I'm Alejandro, and I'm a <i>passionate</i> for basically any subject: from knowing the etymologies of words to building things out of iron and wood... exercising, playing the piano, knowing the why of things, seeing that there is a technique to write faster so going all out to learn it, how I can communicate with the other, learning many languages, helping, teaching, being with friends and cousins, always laughing a lot, getting depressed, stressed, seeing why I feel bad and changing it, always practicing introspection.
        <br><br>
        Beyond the above mentioned I have to focus, and I want to develop myself in my area (computer science) and be a professional in this discipline. I have a special interest in web development, I discovered how fun and exciting it is to build useful sites available to everyone like the ones you will see in this portfolio.
        <br><br>
        Right now I am looking for a junior developer position to start my career and work among professionals, I know the road is long but I want to know and learn the technologies of this area, in particular, front end.
        `
    },
    "projects-title": { "en": "Projects", "es": "Proyectos" },
    "academic-title": { "en": "Academic", "es": "Academico" },
    "contacto-title": { "en": "Contact me", "es": "Contacto" },
    "contacto-texto": {
        "es": `Si quieres contactarme o ver mis otros repositorios puedes usar algunos de <br>los links de aqui, o si simplemente quieres saludar eres más que bienvenido! ^_^`,
        "en": `If you want to contact me or see my other repositories you can use some of <br>the links here, or if you just want to say hi you are more than welcome! ^_^`
    },

}


let PROJECTS = {
    //proyectos propios
    "sabelo-fiuba": {
        "type": "project",
        "name": "Sabelo Fiuba",
        "prog_langs": ["react", "chakra", "css", "js"],
        "desc": {
            "es": `Se trata de una recolección de material de apuntes, resumenes, noticias, grupos y nuevos proyectos relacionados a la FIUBA. Primero construido en solo Html, JS y Css y luego actualizado a React, usando ChakraUI como framework de estilos. Utiliza la api de Github para saber la ultima actualización del proyecto y la de Google Analytics para saber la cantidad de visitas.`,
            "en": `It is a collection of material of notes, summaries, news, groups and new projects related to FIUBA. First built in only Html, JS and Css and then updated to React, using ChakraUI as a style framework. It uses the Github api to know the last update of the project and Google Analytics to know the number of visits.`,
        },
        "link_web": "https://alepaff.github.io/sabelo-fiuba/",
        "link_repo": "https://github.com/AlePaff/sabelo-fiuba"
    },
    "lok-events": {
        "type": "project",
        "name": "LOK Events",
        "prog_langs": ["html", "css", "js"],
        "desc": {
            "es": `Proyecto sencillo para probar como crear tablas dinamicas en Javascript, actualizandose según eventos periódicos del juego League of Kingdoms`,
            "en": `Simple project to test how to create dynamic tables in Javascript, updating according to periodic events of the game League of Kingdoms`
        },
        "link_web": "https://alepaff.github.io/lok-events",
        "link_repo": "https://github.com/AlePaff/lok-events"
    },
    "fiuba-knowledge": {
        "type": "project",
        "name": "Fiuba Knowledge",
        "prog_langs": ["html", "js", "python"],
        "desc": {
            "es": `Pequeño proyecto para la recopilación de temas que se ven en cada materia de la FIUBA, aqui aprendí como hacer scraping de datos desde pdfs para luego procesarlos utilizando un módulo de Python y presentarlos en la web`,
            "en": `Small project for the collection of topics that are seen in each subject of FIUBA, here I learned how to scrape data from pdfs to then process them using a Python module and present them on the web`
        },
        "link_web": "https://alepaff.github.io/FIUBA-knowledge/",
        "link_repo": "https://github.com/AlePaff/FIUBA-knowledge"
    },
    "lok-treasure-items": {
        "type": "project",
        "name": "LOK Treasure Items",
        "prog_langs": ["html", "css", "js", "jquery", "isotope", "boostrap"],
        "desc": {
            "es": `Web para ordenar y filtrar items de League of Kingdoms (LOK) de acuerdo a sus habilidades, power-ups, grados, etc. Se utilizó una librería de js para crear el grid y la logica. Los datos se obtuvieron del juego oficial.`,
            "en": `Web to sort and filter items from League of Kingdoms (LOK) according to their skills, power-ups, degrees, etc. A js library was used to create the grid and logic. The data was obtained from the official game.`
        },
        "link_web": "https://alepaff.github.io/LOK-Treasure-items/",
        "link_repo": "https://github.com/AlePaff/LOK-Treasure-items"
    },
    "donut-knowledge": {
        "type": "project",
        "name": "Donut Knowledge",
        "prog_langs": ["sass", "js", "jquery"],
        "desc": {
            "es": `Mapa interactivo de infografías para visualizar ramas complejas de la ciencia y el conocimiento en general. Utilizando la librería <a href='http://www.outsharked.com/imagemapster/' target='_blank'>ImageMapster</a>, y <a href='https://sass-lang.com/' target='_blank'>Sass</a> para el diseño.`,
            "en": `Interactive infographic map to visualize complex branches of science and general knowledge. Using the <a href='http://www.outsharked.com/imagemapster/' target='_blank'>ImageMapster</a> library, and <a href='https://sass-lang.com/' target='_blank'>Sass</a> for the design.`
        },
        "link_web": "https://alepaff.github.io/the-donut-of-knowledge-map/",
        "link_repo": "https://github.com/AlePaff/the-donut-of-knowledge-map"
    },




    //academicos
    "algo3-teg": {
        "type": "academic",
        "name": "T.E.G",
        "prog_langs": ["java", "gitflow"],
        "desc": {
            "es": `Implementación en Java del popular juego <a href='https://es.wikipedia.org/wiki/TEG'>TEG</a> para la materia Algoritmos y Programación III de la FIUBA, con fuerte enfazis en un diseño de Programación Orientada a Objetos (POO).`,
            "en": `Java implementation of the popular game <a href='https://en.wikipedia.org/wiki/Risk_(game)'>Risk</a> for the Algorithms and Programming III subject of the FIUBA, with a strong focus on Object Oriented Programming (OOP).`
        },
        "link_web": "",
        "link_repo": "https://github.com/nspiguelman/algo3_tp2"
    },
    "shell": {
        "type": "academic",
        "name": "Shell",
        "prog_langs": ["c"],
        "desc": {
            "es": `Implementación del problema del MIT en C, de un interprete de comandos <a href='https://es.wikipedia.org/wiki/Shell_(inform%C3%A1tica)'>Shell</a> con las funcionalidades minimas para Unix similar a bash, zsh y fish para la materia Sistemas Operativos de la FIUBA.`,
            "en": `C implementation of a <a href='https://en.wikipedia.org/wiki/Shell_(computing)'>Shell</a> command interpreter with the minimum functionalities for Unix similar to bash, zsh and fish for the Operating Systems subject of the FIUBA.`
        },
        "link_web": "",
        "link_repo": "https://github.com/AlePaff/TPS-sisop/tree/entrega-shell"
    },
    "malloc": {
        "type": "academic",
        "name": "Malloc",
        "prog_langs": ["c", "gitflow"],
        "desc": {
            "es": `Implementación del manejo del heap de las funciones malloc(), calloc(), realloc(), free() de la librería estandar de C para la administración de memoria para la materia Sistemas Operativos de la FIUBA.`,
            "en": `Implementation of the heap management of the malloc(), calloc(), realloc(), free() functions of the standard C library for memory management for the Operating Systems subject of the FIUBA.`
        },
        "link_web": "",
        "link_repo": "https://github.com/AlePaff/TPS-sisop/tree/entrega-malloc"
    },
    "sched": {
        "type": "academic",
        "name": "Scheduller",
        "prog_langs": ["c", "gitflow"],
        "desc": {
            "es": `Solución al <a href='https://pdos.csail.mit.edu/6.828/2017/index.html'>exokernel JOS del MIT</a> de licencia libre para la implementación del cambio de contexto para procesos y scheduler/planificador sobre un sistema operativo preexistente, utilizando una modificación del algoritmo MLFQ para la materia Sistemas Operativos de la FIUBA.`,
            "en": `Solution to the <a href='https://pdos.csail.mit.edu/6.828/2017/index.html'>exokernel JOS of the MIT</a> of free license for the implementation of the context change for processes and scheduler / scheduler on an existing operating system, using a modification of the MLFQ algorithm for the Operating Systems subject of the FIUBA.`
        },
        "link_web": "",
        "link_repo": "https://github.com/AlePaff/TPS-sisop/tree/entrega-sched"
    },
    "filesystem": {
        "type": "academic",
        "name": "File System",
        "prog_langs": ["c", "gitflow"],
        "desc": {
            "es": `Implementación de un sistema de archivo para Linux, utilizando el mecanismo <a href='https://es.wikipedia.org/wiki/Filesystem_in_Userspace'>FUSE</a> provisto por el kernel para la materia Sistemas Operativos de la FIUBA.`,
            "en": `Implementation of a file system for Linux, using the <a href='https://en.wikipedia.org/wiki/Filesystem_in_Userspace'>FUSE</a> mechanism provided by the kernel for the Operating Systems subject of the FIUBA.`
        },
        "link_web": "",
        "link_repo": "https://github.com/AlePaff/TPS-sisop/tree/entrega-filesystem"
    }
}


let LINKS = {
    "cv": {
        "es": "https://docs.google.com/file/d/1dv-JAm9GOebINzoFUO5mB28ix0IvoSfGO9-DqpBUaDc/view",
        "en": "https://docs.google.com/document/d/1jylLBqreWfapL869we9bD8n83WwKzNEDmMU5yIB6DrI/view"
    },
    "linkedin": "https://www.linkedin.com/in/alejandro-paffetti-0b0b3b1a3/",
    "github": "https://github.com/AlePaff/"
}