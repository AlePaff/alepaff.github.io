
//dado un array ej. ["html", "css", "js"] devuelve una etiqueta html con los iconos de los lenguajes
function lenguajes(array_lang) {

    const icons = {
        html: "icons/html5.png",
        css: "icons/css.png",
        js: "icons/js.png",
        // js: "./icons/js_alt.png",
        boostrap: "icons/boostrap.png",
        // boostrap: "icons/boostrap_alt.png",
        isotope: "icons/isotope.ico",
        python: "icons/python.png",
        jquery: "icons/jquery.png",
        c: "icons/c.png",
        gitflow: "icons/gitflow.png",
        java: "icons/java.png",
        chakra: "icons/chakra.png",
        react: "icons/react.ico",
        // react: "icons/react.svg",
        rust: "icons/rust.png",
        vite: "icons/vite.svg",
        vitest: "icons/vitest.ico",
        tailwind: "icons/tailwind.ico",
        typescript: "icons/typescript.png",
        scss: "icons/scss.png",
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