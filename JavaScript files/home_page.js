function showMenuEn() {
    var menu_img = document.getElementById("menu_img");
    menu_img.style.transform = "rotate(180deg)";

    var menu_but = document.getElementById("menu_but");
    menu_but.onclick = hideMenuEn;

    var container = document.createElement("div");
    var moodboards = document.createElement("a");
    var sketches = document.createElement("a");
    var sew_pat = document.createElement("a");
    var drapings = document.createElement("a");
    var clothes = document.createElement("a");

    container.style.textAlign = "center";
    container.id = "menu";

    moodboards.className = "nav_item";
    moodboards.textContent = "Moodboards";
    moodboards.href = "HTML files/Moodboards_en.html";

    sketches.className = "nav_item";
    sketches.textContent = "Sketches";
    sketches.href = "HTML files/Sketches_en.html";

    sew_pat.className = "nav_item";
    sew_pat.textContent = "Sewing Patterns";
    sew_pat.href = "HTML files/Patrons_en.html";

    drapings.className = "nav_item";
    drapings.textContent = "Drapings";
    drapings.href = "HTML files/Drapings_en.html";

    clothes.className = "nav_item";
    clothes.textContent = "Clothes";
    clothes.href = "HTML files/Clothes_en.html";

    container.appendChild(moodboards);
    container.appendChild(sketches);
    container.appendChild(sew_pat);
    container.appendChild(drapings);
    container.appendChild(clothes);
    nav_bar.appendChild(container);
}

function showMenuFr() {
    var menu_img = document.getElementById("menu_img");
    menu_img.style.transform = "rotate(180deg)";

    var menu_but = document.getElementById("menu_but");
    menu_but.onclick = hideMenuFr;

    var container = document.createElement("div");
    var moodboards = document.createElement("a");
    var sketches = document.createElement("a");
    var sew_pat = document.createElement("a");
    var drapings = document.createElement("a");
    var clothes = document.createElement("a");

    container.style.textAlign = "center";
    container.id = "menu";

    moodboards.className = "nav_item";
    moodboards.textContent = "Planches de Tendances";
    moodboards.href = "Moodboards_fr.html";

    sketches.className = "nav_item";
    sketches.textContent = "Esquisses";
    sketches.href = "Sketches_fr.html";

    sew_pat.className = "nav_item";
    sew_pat.textContent = "Patrons";
    sew_pat.href = "Patrons_fr.html";

    drapings.className = "nav_item";
    drapings.textContent = "Moulages";
    drapings.href = "Drapings_fr.html";

    clothes.className = "nav_item";
    clothes.textContent = "Vêtements";
    clothes.href = "Clothes_fr.html";

    container.appendChild(moodboards);
    container.appendChild(sketches);
    container.appendChild(sew_pat);
    container.appendChild(drapings);
    container.appendChild(clothes);
    nav_bar.appendChild(container);
}

function hideMenuEn() {
    var menu_img = document.getElementById("menu_img");
    menu_img.style.transform = "rotate(0deg)";

    var menu_but = document.getElementById("menu_but");
    menu_but.onclick = showMenuEn;

    var container = document.getElementById("menu");
    container.parentNode.removeChild(container);
}

function hideMenuFr() {
    var menu_img = document.getElementById("menu_img");
    menu_img.style.transform = "rotate(0deg)";

    var menu_but = document.getElementById("menu_but");
    menu_but.onclick = showMenuFr;

    var container = document.getElementById("menu");
    container.parentNode.removeChild(container);
}