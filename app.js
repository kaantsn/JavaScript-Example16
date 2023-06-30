function showRecipe(recipeName) {
    var popupOverlay = document.querySelector(".popup-overlay");
    var popupTitle = document.querySelector(".popup-title");
    var popupContent = document.querySelector(".popup-content");
    var ingredients = "";

    if (recipeName === "izgara-somon") {
        popupTitle.textContent = "Ana Yemek: Izgara Somon";
        ingredients = "4 dilim somon\nZeytinyağı\nLimon\nTuz\nKarabiber";
    } else if (recipeName === "patates-puresi") {
        popupTitle.textContent = "Yardımcı Yemek: Patates Püresi";
        ingredients = "4 büyük patates\n50 g tereyağı\n1/2 su bardağı süt\nTuz\nKarabiber";
    } else if (recipeName === "mercimek-corbasi") {
        popupTitle.textContent = "Çorba: Mercimek Çorbası";
        ingredients = "1 su bardağı yeşil mercimek\n1 soğan\n2 havuç\n2 patates\n2 yemek kaşığı un\n2 yemek kaşığı tereyağı\nTuz\nKarabiber";
    } else if (recipeName === "yesil-salata") {
        popupTitle.textContent = "Salata: Yeşil Salata";
        ingredients = "Yeşillik (marul, roka, nane vb.)\nDomates\nSalatalık\nZeytinyağı\nLimon\nTuz";
    } else if (recipeName === "elmali-turta") {
        popupTitle.textContent = "Tatlı: Elmalı Turta";
        ingredients = "3 adet elma\n1 su bardağı un\n1/2 su bardağı şeker\n125 g tereyağı\n1 adet yumurta\n1 çay kaşığı tarçın\n1 çay kaşığı vanilya özütü";
    }

    popupContent.textContent = "Malzemeler:\n" + ingredients;

    popupOverlay.style.display = "flex";
}

function hidePopup() {
    var popupOverlay = document.querySelector(".popup-overlay");
    popupOverlay.style.display = "none";
}
