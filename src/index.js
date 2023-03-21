import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

//nav

document
  .querySelectorAll("nav a")[0]
  .addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "pink";
  });
document
  .querySelectorAll("nav a")[0]
  .addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "";
  });
document
  .querySelectorAll("nav a")[1]
  .addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "pink";
  });
document
  .querySelectorAll("nav a")[1]
  .addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "";
  });
document
  .querySelectorAll("nav a")[2]
  .addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "pink";
  });
document
  .querySelectorAll("nav a")[2]
  .addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "";
  });
document
  .querySelectorAll("nav a")[3]
  .addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "pink";
  });
document
  .querySelectorAll("nav a")[3]
  .addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "";
  });

//image
document.querySelectorAll("img")[0].addEventListener("click", function (e) {
  alert("Kumsalda sarı bir karavan");
});

document.querySelectorAll("img")[1].addEventListener("click", function (e) {
  alert("Dünya haritası");
});
document.querySelectorAll("img")[2].addEventListener("click", function (e) {
  alert("Kanal kenarında evler");
});

document.querySelectorAll("img")[3].addEventListener("click", function (e) {
  alert("Masmavi bir deniz");
});

window.addEventListener("load", function (e) {
  this.alert("Hoş geldin!");
});

//p
document.querySelector(".intro p").addEventListener("copy", function (e) {
  alert("Kopyalamayın!");
});

document
  .querySelector(".text-content p")
  .addEventListener("copy", function (e) {
    e.preventDefault();
    alert("Kopyalayamazsın!");
  });

document
  .querySelector(".content-destination h2")
  .addEventListener("dblclick", function (e) {
    e.target.style.color = "grey";
  });

//foter

document.querySelector("footer").addEventListener("wheel", function (e) {
  alert("görüşmek üzere!");
});

//buton
document
  .querySelectorAll(".destination .btn")[0]
  .addEventListener("mouseover", function (e) {
    e.target.style.width = "100%";
    e.target.style.height = "20%";
    e.target.style.fontSize = "30px";
    e.target.style.color = "red";
  });

document
  .querySelectorAll(".destination .btn")[0]
  .addEventListener("mouseleave", function (e) {
    e.target.style.width = "";
    e.target.style.height = "";
    e.target.style.fontSize = "";
    e.target.style.color = "";
  });

document
  .querySelectorAll(".destination .btn")[1]
  .addEventListener("mouseover", function (e) {
    e.target.style.width = "100%";
    e.target.style.height = "20%";
    e.target.style.fontSize = "30px";
    e.target.style.color = "red";
  });

document
  .querySelectorAll(".destination .btn")[1]
  .addEventListener("mouseleave", function (e) {
    e.target.style.width = "";
    e.target.style.height = "";
    e.target.style.fontSize = "";
    e.target.style.color = "";
  });
document
  .querySelectorAll(".destination .btn")[2]
  .addEventListener("mouseover", function (e) {
    e.target.style.width = "100%";
    e.target.style.height = "20%";
    e.target.style.fontSize = "30px";
    e.target.style.color = "red";
  });

document
  .querySelectorAll(".destination .btn")[2]
  .addEventListener("mouseleave", function (e) {
    e.target.style.width = "";
    e.target.style.height = "";
    e.target.style.fontSize = "";
    e.target.style.color = "";
  });
