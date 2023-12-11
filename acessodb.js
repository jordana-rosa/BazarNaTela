const produto = document.querySelector("#produtos");
const xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = () => {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    let dados = JSON.parse(xmlHttp.responseText);
    if (produto != null && dados != null && dados.length > 0) {
      renderList(dados);
    }
  }
};
xmlHttp.open(
  "GET",
  "https://raw.githubusercontent.com/jordana-rosa/BazarNaTela/main/db.json",
  true
);
xmlHttp.send();

const renderList = (listaP) => {
  const div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("row-cols-4");
  div.classList.add("justify-content-center");
  div.classList.add("align-items-center");

  for (let item of listaP) {
    const div2 = document.createElement("div");
    div2.classList.add("col");
    div2.classList.add("d-flex");
    div2.classList.add("justify-content-center");
    div2.classList.add("align-items-center");
    div2.innerHTML = `
        <div class="card">
              <img src="${item.imagem}" class="card-img-top" alt="Product 1">
          <div class="card-body">
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">${item.descricao}</p>
              <p class="card-price">${item.preco}</p>
              <a href="#" class="favorite">
                   <i class="far fa-heart"></i> Reservar
              </a>
          </div>
        </div>
        
        
        `;
    div.appendChild(div2);
  }

  produto.appendChild(div);
};
