const zz = () => {

    let btn = document.querySelector(".icon");

    let links = document.querySelector(".links");


    btn.addEventListener("click" , function ()  {
        links.classList.toggle("show");
    });
};


zz();




