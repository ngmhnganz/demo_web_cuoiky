$(document).ready(function()
{
    $(".pc-nav-item").hover
    (function()
    {
      $(".nav-overlay").css("display", "block");}
      , 
    function()
    {
      $(".nav-overlay").css("display", "none");}
      );
});

function showSidenavShop(){

  console.log("showSidenavShop");
  document.getElementById("sidenav-recipe-bot").style.display="none";
  document.getElementById("sidenav-recipe-nuoc").style.display="none";
  document.getElementById("sidenav-recipe-aibiet").style.display="none";
  document.getElementById("sidenav-shop-nguyenlieu").style.display="block";
  document.getElementById("sidenav-shop-dungcu").style.display="block";
  document.getElementById("sidenav-shop-chebiensan").style.display="block";
}

function showSidenavRecipe(){
  console.log("showSidenavRecipe");
  document.getElementById("sidenav-shop-nguyenlieu").style.display="none";
  document.getElementById("sidenav-shop-dungcu").style.display="none";
  document.getElementById("sidenav-shop-chebiensan").style.display="none";
  document.getElementById("sidenav-recipe-bot").style.display="block";
  document.getElementById("sidenav-recipe-nuoc").style.display="block";
  document.getElementById("sidenav-recipe-aibiet").style.display="block";
}


function showSidenav(){
  console.log("showSidenav");
  document.getElementById("sidenav").style.transform="translateX(0)";
  document.getElementById("nav-mobile-overlay").style.display="block";
  document.getElementById("sidenav-recipe-bot").style.display="none";
  document.getElementById("sidenav-recipe-nuoc").style.display="none";
  document.getElementById("sidenav-recipe-aibiet").style.display="none";
  document.getElementById("sidenav-shop-nguyenlieu").style.display="block";
  document.getElementById("sidenav-shop-dungcu").style.display="block";
  document.getElementById("sidenav-shop-chebiensan").style.display="block";
  document.getElementById("header").style.transform="translateY(-100%)";
}

function closeSidenav(){
  console.log("closeSidenav");
  document.getElementById("sidenav").style.transform="translateX(-100%)";
  document.getElementById("nav-mobile-overlay").style.display="none";
  document.getElementById("header").style.transform="translateY(0)";
}

function showitemNguyenLieu(){
  console.log("howitemNguyenLieu");
  document.getElementById("sidenav-cate-list").style.display="none";
  document.getElementById("sidenav-cate").style.display="none";
  document.getElementById("sidenav-item-nguyenlieu").style.display="block";
}

