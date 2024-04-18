import { menuArray } from '/data.js'

const menu = document.getElementById('menu')


menuArray.forEach(function(item) {
  menu.innerHTML += `
  <div class="menu-item" id="menu-item">
    <div class="item-graphic">${item.emoji}</div>
      <div class="item-container">
        <div class="item-info" id="item-info">
            <h2>${item.name}</h2>
            <p class="desc">${item.ingredients.join(", ")}</p>
            <p>$${item.price}</p>
      </div>
      </div>
      <button class="add-to-cart-btn" id="add-to-cart-btn">+</button>
    </div>
  `
})

const addToCartBtn = document.getElementById('add-to-cart-btn');

addToCartBtn.addEventListener('click', function(e) {
  console.log(e.target)
  console.log('button clicked, yo');
});

const removeBtn = document.getElementById('remove-btn');

removeBtn.addEventListener('click', function() {
  console.log('item removed')
})