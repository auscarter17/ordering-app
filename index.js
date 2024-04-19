import { menuArray } from '/data.js'

const menu = document.getElementById('menu')
const cart = document.getElementById('cart')

let currentCart = []

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
      <button class="add-to-cart-btn" id="add-to-cart-btn" data-cart="${item.id}">+</button>
    </div>
  `
})

document.addEventListener('click', function(e) {
  if (e.target.dataset.cart){
    addToCart(e.target.dataset.cart)
  }
  else if (e.target.dataset.remove){
    removeFromCart(e.target.dataset.remove)
  }
  else if (e.target === document.getElementById('complete-order-btn')) {
    document.getElementById('order-modal').classList.remove('hidden')
  }
  else if (e.target === document.getElementById('under-modal')) {
    document.getElementById('order-modal').classList.add('hidden')
  }
  else if (e.target === document.getElementById('submit-payment-button')) {
    submitOrder()
  }
})


function addToCart(itemId) {
  const targetCartObj = menuArray.filter(function(targetItem) {
    return(targetItem.id == itemId)
  })[0]
  currentCart.push(targetCartObj)
  renderCart(currentCart)
}

function removeFromCart(itemId) {
  currentCart = currentCart.filter(function (itemToRemove) {
    return itemToRemove.id != itemId
  })
  console.log(currentCart)
  renderCart(currentCart)
}

function submitOrder() {
  document.getElementById('order-modal').classList.add('hidden')
  cart.classList.add('hidden')
}

function renderCart(arr) {
  if (arr.length > 0) {
    cart.classList.remove('hidden')
  }
  else {
    cart.classList.add('hidden')
  }
  document.getElementById('cart-list').innerHTML = ``
  arr.forEach(function (menuItem) {
    document.getElementById('cart-list').innerHTML += `
    <div class="cart-item" id="cart-item">
      <h2>${menuItem.name}</h2>
      <p class="remove-btn" data-remove="${menuItem.id}">remove</p>
      <h2 class="cart-price" id="cart-price">$${menuItem.price}</h2>
    </div>
    `
  })
  let cartTotal = 0
  cartTotal = arr.reduce(function (total, currentValue){
    return total + currentValue.price
  }, 0)
  document.getElementById('cart-total-price').innerText = cartTotal
  console.log(cartTotal)
}