// ==========================
// MENU MOBILE
// ==========================

const menuBtn = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("ativo");

    menuBtn.textContent =
        menu.classList.contains("ativo") ? "X" : "☰";

});

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("ativo");
        menuBtn.textContent = "☰";

    });

});

window.addEventListener("resize", () => {

    if(window.innerWidth > 768){

        menu.classList.remove("ativo");
        menuBtn.textContent = "☰";

    }

});


// ==========================
// NAVEGAÇÃO DAS PÁGINAS
// ==========================

const conteudo = document.getElementById("conteudo");

function carregarPagina(pagina){

    let arquivo;

    switch (pagina) {

        case "home":
            arquivo = "pages/home.html";
            break;

        case "sobre":
            arquivo = "pages/sobre.html";
            break;

        case "produtos":
            arquivo = "pages/produtos.html";
            break;

        case "depoimentos":
            arquivo = "pages/depoimentos.html";
            break;

        case "contato":
            arquivo = "pages/contato.html";
            break;

        default:
            arquivo = "pages/home.html";

    }

    fetch(arquivo)
        .then(res => {

            if (!res.ok) {
                throw new Error(`Erro ${res.status}: ${arquivo} não encontrado.`);
            }

            return res.text();

        })
        .then(html => {

            conteudo.innerHTML = html;

        })
        .catch(err => {

            console.error(err);

            conteudo.innerHTML = `
                <section style="padding:60px; text-align:center;">
                    <h2>Erro ao carregar a página</h2>
                    <p>${err.message}</p>
                </section>
            `;

        });

}

// Carrega a Home ao abrir o site
carregarPagina("home");