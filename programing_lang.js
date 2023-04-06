
//dado un array ej. ["html", "css", "js"] devuelve una etiqueta html con los iconos de los lenguajes
function lenguajes(array_lang) {
    const ICON_PATH = "assets/icons/";

    const icons = {
        html: {
            lang_name: 'HTML',
            path: ICON_PATH + "html5.png",
        },
        css: {
            lang_name: 'CSS',
            path: ICON_PATH + "css.png",
        },
        js: {
            lang_name: 'JavaScript',
            path: ICON_PATH + "js.png",
            // path: ".ICON_PATH + /js_alt.png",
        },
        boostrap: {
            lang_name: 'Bootstrap',
            path: ICON_PATH + "boostrap.png",
            // path: ICON_PATH + "boostrap_alt.png",
        },
        isotope: {
            lang_name: 'Isotope',
            path: ICON_PATH + "isotope.ico",
        },
        python: {
            lang_name: 'Python',
            path: ICON_PATH + "python.png",
        },
        jquery: {
            lang_name: 'jQuery',
            path: ICON_PATH + "jquery.png",
        },
        c: {
            lang_name: 'C',
            path: ICON_PATH + "c.png",
        },
        gitflow: {
            lang_name: 'GitFlow',
            path: ICON_PATH + "gitflow.png",
        },
        java: {
            lang_name: 'Java',
            path: ICON_PATH + "java.png",
        },
        chakra: {
            lang_name: 'Chakra-UI',
            path: ICON_PATH + "chakra.png",
        },
        react: {
            lang_name: 'React',
            path: ICON_PATH + "react.ico",
            // path: ICON_PATH + "react.svg",
        },
        rust: {
            lang_name: 'Rust',
            path: ICON_PATH + "rust.png",
        },
        vite: {
            lang_name: 'Vite',
            path: ICON_PATH + "vite.svg",
        },
        vitest: {
            lang_name: 'Vitest',
            path: ICON_PATH + "vitest.ico",
        },
        tailwind: {
            lang_name: 'Tailwind',
            path: ICON_PATH + "tailwind.ico",
        },
        typescript: {
            lang_name: 'TypeScript',
            path: ICON_PATH + "typescript.png",
        },
        scss: {
            lang_name: 'Scss/Sass',
            path: ICON_PATH + "scss.png",
        },
        firebase: {
            lang_name: 'Firebase',
            path: ICON_PATH + "firebase.png",
        },
    };


    let total = "<div id='imagenes'>";

    for (let i = 0; i < array_lang.length; i++) {
        const lang = array_lang[i];
        if (icons.hasOwnProperty(lang)) {
            total += `
            <div data-tooltip='${icons[lang].lang_name}' class="has-tooltip-arrow">
                <img src='${icons[lang].path}' height='32' width='32'>
            </div>`;
        }
    }

    total += "</div>";
    return total;
}