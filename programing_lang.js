const ICON_PATH = "assets/icons/";
const DEFAULT_ICON_PATH = "/assets/icons/default.png";
const ICONS = {
    html: {
        lang_name: 'HTML',
        path: ICON_PATH + "html5.png",
        imageObj: new Image(),
    },
    css: {
        lang_name: 'CSS',
        path: ICON_PATH + "css.png",
        imageObj: new Image(),
    },
    js: {
        lang_name: 'JavaScript',
        path: ICON_PATH + "js.png",
        imageObj: new Image(),
        // path: ".ICON_PATH + /js_alt.png",
    },
    boostrap: {
        lang_name: 'Bootstrap',
        path: ICON_PATH + "boostrap.png",
        // path: ICON_PATH + "boostrap_alt.png",
        imageObj: new Image(),
    },
    isotope: {
        lang_name: 'Isotope',
        path: ICON_PATH + "isotope.ico",
        imageObj: new Image(),
    },
    python: {
        lang_name: 'Python',
        path: ICON_PATH + "python.png",
        imageObj: new Image(),
    },
    jquery: {
        lang_name: 'jQuery',
        path: ICON_PATH + "jquery.png",
        imageObj: new Image(),
    },
    c: {
        lang_name: 'C',
        path: ICON_PATH + "c.png",
        imageObj: new Image(),
    },
    gitflow: {
        lang_name: 'GitFlow',
        path: ICON_PATH + "gitflow.png",
        imageObj: new Image(),
    },
    java: {
        lang_name: 'Java',
        path: ICON_PATH + "java.png",
        imageObj: new Image(),
    },
    chakra: {
        lang_name: 'Chakra-UI',
        path: ICON_PATH + "chakra.png",
        imageObj: new Image(),
    },
    react: {
        lang_name: 'React',
        path: ICON_PATH + "react.ico",
        // path: ICON_PATH + "react.svg",
        imageObj: new Image(),
    },
    rust: {
        lang_name: 'Rust',
        path: ICON_PATH + "rust.png",
        imageObj: new Image(),
    },
    vite: {
        lang_name: 'Vite',
        path: ICON_PATH + "vite.svg",
        imageObj: new Image(),
    },
    vitest: {
        lang_name: 'Vitest',
        path: ICON_PATH + "vitest.ico",
        imageObj: new Image(),
    },
    tailwind: {
        lang_name: 'Tailwind',
        path: ICON_PATH + "tailwind.ico",
        imageObj: new Image(),
    },
    typescript: {
        lang_name: 'TypeScript',
        path: ICON_PATH + "typescript.png",
        imageObj: new Image(),
    },
    scss: {
        lang_name: 'Scss/Sass',
        path: ICON_PATH + "scss.png",
        imageObj: new Image(),
    },
    firebase: {
        lang_name: 'Firebase',
        path: ICON_PATH + "firebase.png",
        imageObj: new Image(),
    },
    sql: {
        lang_name: 'SQL',
        path: ICON_PATH + "sql.webp",
        imageObj: new Image(),
    },
    php: {
        lang_name: 'PHP',
        path: ICON_PATH + "php.png",
        imageObj: new Image(),
    },
    airflow: {
        lang_name: 'Apache Airflow',
        path: ICON_PATH + "airflow.webp",
        imageObj: new Image(),
    },
    docker: {
        lang_name: 'Docker',
        path: ICON_PATH + "docker.webp",
        imageObj: new Image(),
    },
    minio: {
        lang_name: 'Minio / S3',
        path: ICON_PATH + "minio.png",
        imageObj: new Image(),
    },
};



//dado un array ej. ["html", "css", "js"] devuelve una etiqueta html con los iconos de los lenguajes
function lenguajes(array_lang) {
    let total = "<div id='imagenes'>";

    for (let i = 0; i < array_lang.length; i++) {
        const lang = array_lang[i];
        if (ICONS.hasOwnProperty(lang)) {
            total += `
            <div data-tooltip='${ICONS[lang].lang_name}' class="has-tooltip-arrow">
                <img src='${ICONS[lang].imageObj.src}' height='32' width='32' onerror="this.src='${DEFAULT_ICON_PATH}'">
            </div>`;
        }
    }

    total += "</div>";
    return total;
}