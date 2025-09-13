function mostrarb() {
      let pesqui = document.getElementById("pesqui");
      if (pesqui.style.display === "none" || pesqui.style.display === "") {
        pesqui.style.display = "block"; // aparece
      } else {
        pesqui.style.display = "none"; // esconde
      }

    }
    const carousel = document.querySelector('.carousel');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const btnMenu = document.getElementById("btn-menu");
    const btnFechar = document.getElementById("btn-fechar");
    const menuLateral = document.getElementById("menu");

    next.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    btnMenu.addEventListener("click", () => {
      menuLateral.classList.add("ativo");
    });

    btnFechar.addEventListener("click", () => {
      menuLateral.classList.remove("ativo");
    });

   