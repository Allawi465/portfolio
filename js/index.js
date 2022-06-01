const sections = document.querySelectorAll("section"); 
const navList = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
    let navActiv = ""; 

    sections.forEach (section => {
        const sectionTop = section.offsetTop; 
        const sectionHeight = section.clientHeight;
      /*   console.log(sectionTop) */
        if (pageYOffset >= ( sectionTop - sectionHeight / 2)) {
            navActiv = section.getAttribute("id");
        }
    })

  /*   console.log(navActiv) */

    navList.forEach( li => {
        li.classList.remove("active");
        if(li.classList.contains(navActiv))[
            li.classList.add("active")
        ]
    })
});


/* console.log(navList) */