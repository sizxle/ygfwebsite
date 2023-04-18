// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', read);
// } else {
//     read();
// }

// function read() {
//     const removeCartItemButtons = document.getElementsByClassName('btn-danger');
//     for (let i = 0; i < removeCartItemButtons.length; i++) {
//         let button = removeCartItemButtons[i];
//         button.addEventListener('click', removeCartItem);
//     }

//     const quantityInputs = document.getElementsByClassName('cart-quantity-input');
//     for (let i = 0; i < quantityInputs.length; i++) {
//         let input = quantityInputs[i];
//         input.addEventListener('change', quantityChanged);
//     }

//     const addToCartButtons = document.getElementsByClassName('shop-item-button');
//     for (let i = 0; i < addToCartButtons.length; i++) {
//         let button = addToCartButtons[i];
//         button.addEventListener('click', addToCartClicked);
//     }
//     document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
// }

// function purchaseClicked() {
//     alert('Please Purchase through our whatsapp');
//     const cartItems = document.getElementsByClassName('cart-items')[0];
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild);
//     }
//     updateCartTotal();
// }

// function removeCartItem() {
//     this.parentElement.parentElement.remove();
//     updateCartTotal();
// }

// function quantityChanged() {
//     if (isNaN(this.value) || this.value <= 0) {
//         this.value = 1;
//     }
//     updateCartTotal();
// }

// function addToCartClicked() {
//     const shopItem = this.parentElement.parentElement.parentElement;
//     const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
//     const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
//     const imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
//     addItemToCart(title, price, imageSrc);
//     updateCartTotal();
// }

// function addItemToCart(title, price, imageSrc) {
//     const cartRow = document.createElement('div');
//     cartRow.classList.add('cart-row');
//     const cartItems = document.getElementsByClassName('cart-items')[0];
//     const cartItemNames = cartItems.getElementsByClassName('cart-item-title');
//     for (let i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart');
//             return;
//         }
//     }
//     const cartRowContents = `
//         <div class="cart-item cart-column">
//             <img src="${imageSrc}" alt="" srcset="" width="50" height="50">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input type="number" class="cart-quantity-input" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>
//     `;
//     cartRow.innerHTML = cartRowContents;
//     cartItems.appendChild(cartRow);
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
// }

// function updateCartTotal() {
//     const cartItemContainer = document.getElementsByClassName('cart-items')[0];
//     const cartRows = cartItemContainer.getElementsByClassName('cart-row');
//     let total = 0;
//     for (let i = 0; i < cartRows.length; i++) {
//         const cartRow = cartRows[i];
//         const priceElement = cartRow.getElementsByClassName('cart-price')[0];
//         const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
//         const price = parseFloat(priceElement.innerText.replace('$', ''));
//         const quantity = quantityElement.value;
//         total = total + (price * quantity);
//     }
//     total = Math.round(total * 100) / 100;
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
// }

// Accordion 
// function myAccFunc() {
//     const x = document.getElementById("demoAcc");
//     if (x.className.indexOf("w3-show") == -1) {
//         x.className += " w3-show";
//     } else {
//         x.className = x.className.replace(" w3-show", "");
//     }
// }

 // Click on the "Jeans" link on page load to open the accordion for demo purposes
// document.getElementById("myBtn");


// // Open and close sidebar
// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
//     // document.getElementById("myOverlay").style.display = "block";
// }

// function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//     // document.getElementById("myOverlay").style.display = "none";
// }

///by sizxle

// Open and close sidebar
function openSideBar(){
    document.getElementById("sideBar").style.display = "block";
    document.getElementById("sideBarOverlay").style.display = "block";
}
function closeSideBar() {
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("sideBarOverlay").style.display = "none";
}