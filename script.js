const cart = [];

const productos = [
  { nombre: "Botella de agua", precio: 1.0, imagen: "https://cdn-icons-png.flaticon.com/512/865/865021.png" },
  { nombre: "Papas fritas", precio: 2.5, imagen: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { nombre: "Chocolate", precio: 1.5, imagen: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" },
  { nombre: "Detergente líquido", precio: 3.0, imagen: "https://cdn-icons-png.flaticon.com/512/2913/2913469.png" }
];

function addToCart(product, price) {
  cart.push({ product, price });
  renderCart();
}

function renderCart() {
  const itemsContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");
  itemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemEl = document.createElement("p");
    itemEl.textContent = `${item.product} - $${item.price.toFixed(2)}`;
    itemsContainer.appendChild(itemEl);
    total += item.price;
  });

  totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}

function toggleCart() {
  const cartEl = document.getElementById("cart");
  cartEl.style.display = cartEl.style.display === "flex" ? "none" : "flex";
}

function renderProductos() {
  const container = document.getElementById("product-list");
  productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <p>${p.nombre}</p>
      <p>$${p.precio.toFixed(2)}</p>
      <button class="btn add-to-cart" onclick="addToCart('${p.nombre}', ${p.precio})">Agregar al carrito</button>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProductos);