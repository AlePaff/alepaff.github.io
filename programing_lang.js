
//dado un array ej. ["html", "css", "js"] devuelve una etiqueta html con los iconos de los lenguajes
function lenguajes(array_lang) {
    const ICON_PATH = "assets/icons/";

    const icons = {
        html: ICON_PATH + "html5.png",
        css: ICON_PATH + "css.png",
        js: ICON_PATH + "js.png",
        // js: ".ICON_PATH + /js_alt.png",
        boostrap: ICON_PATH + "boostrap.png",
        // boostrap: ICON_PATH + "boostrap_alt.png",
        isotope: ICON_PATH + "isotope.ico",
        python: ICON_PATH + "python.png",
        jquery: ICON_PATH + "jquery.png",
        c: ICON_PATH + "c.png",
        gitflow: ICON_PATH + "gitflow.png",
        java: ICON_PATH + "java.png",
        chakra: ICON_PATH + "chakra.png",
        react: ICON_PATH + "react.ico",
        // react: ICON_PATH + "react.svg",
        rust: ICON_PATH + "rust.png",
        vite: ICON_PATH + "vite.svg",
        vitest: ICON_PATH + "vitest.ico",
        tailwind: ICON_PATH + "tailwind.ico",
        typescript: ICON_PATH + "typescript.png",
        scss: ICON_PATH + "scss.png",
        firebase: ICON_PATH + "firebase.png",
    };
    
    let total = "<div id='imagenes'>";
    
    for (let i = 0; i < array_lang.length; i++) {
        const lang = array_lang[i];
        if (icons.hasOwnProperty(lang)) {
            total += `<img src='${icons[lang]}' height='32' width='32' title='${lang.toUpperCase()}'>`;
        }
    }
    
    total += "</div>";
    return total;
}