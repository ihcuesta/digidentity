function toggleMenu() {
    document.getElementById("menu-mob").classList.toggle("menu-open");
    document.getElementById("x").classList.toggle("visible");
    document.getElementById("search").classList.toggle("hidden");
    document.getElementById("user").classList.toggle("hidden");
    document.getElementById("logo-mob").classList.toggle("hidden");
    document.getElementById("space").classList.toggle("display");
}

function toggleLang() {
    document.getElementById("menu-lang").classList.toggle("visible");

};

function show1() {
    document.getElementById("block-tech1").classList.toggle("height");
};

function show2() {
    document.getElementById("block-tech2").classList.toggle("height");
};

function show3() {
    document.getElementById("block-tech3").classList.toggle("height");
};

function show4() {
    document.getElementById("block-tech4").classList.toggle("height");
};

function show5() {
    document.getElementById("block-tech5").classList.toggle("height");
};

function show6() {
    document.getElementById("block-tech6").classList.toggle("height");
};

//function changeNL() {
//    document.getElementById("language").innerHTML = "NL<i class='chevlang fas fa-chevron-down'></i>";
//    document.getElementById("NL").style.display = "none";
//    document.getElementById("EN").style.display = "block";
//    document.getElementById("ES").style.display = "block";
//    toggleLang();
//};
//
//function changeEN() {
//    document.getElementById("language").innerHTML = "EN<i class='chevlang fas fa-chevron-down'></i>";
//    document.getElementById("EN").style.display = "none";
//    document.getElementById("NL").style.display = "block";
//    document.getElementById("ES").style.display = "block";
//    toggleLang();
//};
//
//function changeES() {
//    document.getElementById("language").innerHTML = "ES<i class='chevlang fas fa-chevron-down'></i>";
//    document.getElementById("ES").style.display = "none";
//    document.getElementById("EN").style.display = "block";
//    document.getElementById("NL").style.display = "block";
//    toggleLang();
//};


 !function(r,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():r.transformicons=n()}(this||window,function(){"use strict";var r={},n={transform:["click"],revert:["click"]},t=function(r){return"string"==typeof r?Array.prototype.slice.call(document.querySelectorAll(r)):void 0===r||r instanceof Array?r:[r]},o=function(r){return"string"==typeof r?r.toLowerCase().split(" "):r},e=function(r,e,f){var i=(f?"remove":"add")+"EventListener",s=t(r),a=s.length,u={};for(var l in n)u[l]=e&&e[l]?o(e[l]):n[l];for(;a--;)for(var d in u)for(var m=u[d].length;m--;)s[a][i](u[d][m],c)},c=function(n){r.toggle(n.currentTarget)};return r.add=function(n,t){return e(n,t),r},r.remove=function(n,t){return e(n,t,!0),r},r.transform=function(n){return t(n).forEach(function(r){r.classList.add("tcon-transform")}),r},r.revert=function(n){return t(n).forEach(function(r){r.classList.remove("tcon-transform")}),r},r.toggle=function(n){return t(n).forEach(function(n){r[n.classList.contains("tcon-transform")?"revert":"transform"](n)}),r},r});


//FORMS SWITCH
var cat = document.getElementsByClassName("cat");
    var catactive = document.getElementsByClassName("cat-active");
    var form = document.getElementsByClassName("form");
var clean = document.getElementsByClassName("clean");

function cleanAll() {
    for (var i = 0; i < clean.length; i++) {
        clean[i].classList.remove("hidden");
        clean[i].classList.remove("visible");
    };
    
    for (var i = 0; i < cat.length; i++) {
        
        cat[i].style.display = "none ";
        catactive[i].style.display = "none "; 
        form[i].style.display = "none ";
    };
}

function catActive1() {
     
    cat[1].style.display = "block ";
    cat[2].style.display = "block ";
    catactive[0].style.display = "block ";
    form[0].style.display = "block ";
}

function catActive2() {
    
    cat[0].style.display = "block ";
    cat[2].style.display = "block ";
    catactive[1].style.display = "block ";
    form[1].style.display = "block ";
}

function catActive3() {
   
    cat[0].style.display = "block ";
    cat[1].style.display = "block ";
    catactive[2].style.display = "block ";
    form[2].style.display = "block ";
}


//SHOW FORM
function showForm() {
   
    document.getElementById("dark-bg").classList.toggle("visible");
}
