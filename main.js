let liked = new Audio("./Sounds/zapsplat_cartoon_bubble_pop_005_40277.mp3");
let disLiked = new Audio("./Sounds/zapsplat_cartoon_bubble_pop_006_40278.mp3");


//SideBar Declaration

let menu = document.getElementById("menu-ico");
let sidebar = document.querySelector(".sidebar");

//SideBar Function

menu.addEventListener("click", () => {
  sidebar.classList.toggle('active');
});


let favButton = document.querySelectorAll('.heart-ico-item');

for(let i = 0; i < favButton.length; i++) {
  favButton[i].addEventListener('click', addToFav);
}


let emptyHeart = '<path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>';

let filledHeart = '<path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>';



function addToFav(e) {
  
  if(e.target.innerHTML == emptyHeart) {
    liked.play();
    e.target.innerHTML = filledHeart;
    e.target.classList.add('heart-selected');

    if (e.target.classList.contains("heart-selected")) {
      let favNotification = document.createElement("div");
      favNotification.classList.add("notify");
      favNotification.innerHTML =
        '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg><p>Added To Favourites</p>';
  
      notificationContainer.appendChild(favNotification);
  
      setTimeout(() => {
        favNotification.remove();
      }, 3000); 
    }
  } else {
    disLiked.play();
    e.target.innerHTML = emptyHeart;
    e.target.classList.remove('heart-selected');

    let favRemoveNotification = document.createElement("div");
    favRemoveNotification.classList.add("remove-notify");
    favRemoveNotification.innerHTML =
      '<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="currentColor"></path></svg><p>Removed From Favourites</p>';

    notificationContainer.appendChild(favRemoveNotification);

    setTimeout(() => {
      favRemoveNotification.remove();
    }, 3000);
  }
}

//Cart Declaration

let cart = document.getElementById("cart-ico");
let cartTab = document.querySelector(".cart-tab");
let cartIconItem = document.querySelectorAll(".cart-ico-item");
let closeCart = document.querySelector('.close-cart');
let cartItem = document.querySelectorAll('.cart-inner-item');

//Cart function

for (let i = 0; i < cartIconItem.length; i++) {
  cartIconItem[i].addEventListener("click", addToCart);
}

cart.addEventListener('click', () => {
  cartTab.classList.toggle("cart-active");
});

closeCart.addEventListener('click', () => {
    cartTab.classList.remove('cart-active');
})


for(let i = 0; i < cartIconItem.length; i++) {
  cartIconItem[i].addEventListener('click', addToCartClicked);
}


function addToCartClicked(e) {
  let button = e.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.querySelectorAll('.fabric-title')[0].innerHTML;
  let price = shopItem.querySelectorAll('.price')[0].innerHTML;
  let imageSrc = shopItem.querySelectorAll('.shop-item-img')[0].src;

  addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
  
  let cartItems = document.querySelector('.cart-items');

  let cartRow = document.createElement('div');
  cartRow.classList.add('cart-inner-item');

  let cartItemName = cartItems.getElementsByClassName('fabric-title');
  
  for(let i = 0; i < cartItemName.length; i++) {
    if(cartItemName[i].innerText == title) {
      let loginPopup = document.createElement('div');
      loginPopup.classList.add('signup')
  
      let loginContent = `<div class="itemAlready-container">
      <div class="itemAlready-inner-container">
    <svg class="itemAlready-close" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>
    <h1>Item already exists in Cart</h1>
  </div>
</div>`
  
    loginPopup.innerHTML = loginContent;
  
    let loginContainer = document.querySelector('.signup-main-container');
    loginContainer.classList.add('signup-active');
    loginContainer.appendChild(loginPopup);
    
    let itemAlreadyClose = document.querySelector('.itemAlready-close');
    
    itemAlreadyClose.addEventListener('click', () => {
      loginContainer.classList.remove('signup-active');
      loginPopup.remove();
    })
    return;
    }
  }


  let cartRowContent = `
  <img class="item-img" src="${imageSrc}" alt="item">
        <div class="cart-text-container">
        <h5 class="fabric-title">${title}</h5>
        <p>adidas</p>
        <div class="quantity-amount">
        <p><svg class="minus" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 11H19V13H5z"></path></svg><span class="cart-quantity">1</span><svg class="plus" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"></path></svg></p>
        <div class="price">${price}</div>
      </div>
      </div>
      `

    cartRow.innerHTML = cartRowContent;

  cartItems.append(cartRow);

  
  let checkout = document.querySelector('.checkout');

      checkout.style.display = 'inline-block';

let cartQuantity = cartRow.getElementsByClassName('cart-quantity');

let minus = cartRow.getElementsByClassName('minus');
let plus = cartRow.getElementsByClassName('plus');

let count = 1;

for(let i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', () => {
    if(count > 1) {
          count--
            cartQuantity[i].textContent = count;
          } else {
            cartRow.remove();
        }
  })
}

for(let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', () => {
    count++
    cartQuantity[i].textContent = count;
  })
}

}

//Notification declaration

let notificationContainer = document.getElementById("notification-container");

//Notification function

for(let i = 0; i < cartIconItem.length; i++) {
  cartIconItem[i].addEventListener('click', addToCart);
}

function addToCart() {
    let cartNotification = document.createElement("div");
    cartNotification.classList.add("notify");
    cartNotification.innerHTML =
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg><p>Added To Cart</p>';

    notificationContainer.appendChild(cartNotification);

    setTimeout(() => {
      cartNotification.remove();
    }, 3000);
  };

  let checkout = document.querySelector('.checkout');
  
  checkout.addEventListener('click', () => {
    let loginPopup = document.createElement('div');
    loginPopup.classList.add('signup')

    let loginContent = `<form action="signup.php">
    <div class="login-container">
          <div class="login-inner-container">
        <h1>Sign up</h1>
        <svg class="signup-close" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>
        <div class="name">
          <label  for="fname">First Name</label>
          <input type="text" name="fname" id="fname" required/>
          <label for="lname">Last Name</label>
          <input type="text" name="lname" id="lname" required/>
        </div>
          <label for="email">E-mail</label>
          <input type="email" name="email" id="email" required/>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required  required minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"/>
          <label for="retype-password">Re-enter Password</label>
          <input type="password" name="retype-password" id="retype-password" required/>
          <div class="checkbox-container">
          <input type="checkbox" name="tncs" id="tncs" required>
          <label for="tncs">I agree to the terms & conditions</label>
        </div>
        <div class="newsletter-container">
          <input type="checkbox" name="newsletter" id="newsletter" checked>
          <label for="tncs">I wish to subscribe for news letter</label>
        </div>
          <button class="submit" type="submit">Create Account</button>
      </div>
    </div>
  </form>`

  loginPopup.innerHTML = loginContent;

  let loginContainer = document.querySelector('.signup-main-container');
  loginContainer.classList.add('signup-active');
  loginContainer.appendChild(loginPopup);

  cartTab.classList.remove('cart-active')

  let signupClose = document.querySelector('.signup-close');
  signupClose.addEventListener('click', () => {
    loginPopup.remove();
    loginContainer.classList.remove('signup-active')
  })
})

// Cookie Popup

let cookiePopup = document.querySelector('.cookie-popup');
let acceptCookie = document.querySelector('.accept-cookie');
let rejectCookie = document.querySelector('.reject-cookie');
let customizeCookie = document.querySelector('.customize-cookie');

const key = 'cookie';
const value = 'status';

// Check if key already exists in session storage
if (sessionStorage.getItem(key)) {
  console.log(`Key ${key} already exists in session storage`);
  cookiePopup.remove();
} else {
  console.log('Session not found');
}

function cookieShow() {

  setTimeout(() => {
    cookiePopup.classList.add('cookie-show')
  }, 1000);
}

acceptCookie.addEventListener('click', () => {
  acceptCookie.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>';
  setTimeout(() => {
    cookiePopup.classList.remove('cookie-show')
  }, 1000);
  setTimeout(() => {
    acceptCookie.classList.add('accept-clicked')
  }, 100);

  sessionStorage.setItem(key, value);

})

rejectCookie.addEventListener('click', () => {
  rejectCookie.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg>';

  setTimeout(() => {
    cookiePopup.classList.remove('cookie-show');
  }, 1000);

  setTimeout(() => {
    rejectCookie.classList.add('reject-clicked');
  }, 100);

  sessionStorage.setItem(key, value);
})


let customizeCookiePopup = document.createElement('div');
customizeCookie.addEventListener('click', () => {
  customizeCookiePopup.classList.add('cookie-customization');
  let customizeContent = `
  <h3>About Your Privacy</h3>
  <p>We process your data to deliver content or advertisements and measure the delivery of such content or advertisements to extract insights about our website. We share this information with our partners on the basis of consent and legitimate interest. You may exercise your right to consent or object to a legitimate interest, based on a specific purpose below or at a partner level in the link under each purpose. These choices will be signaled to our vendors.</p>
  <button class="allow-all-cookies"></button>
  <div class="checkbox-container">
    <div class="collapsible">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294"
            viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path>
            <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path>
        </svg>
        <p>Strictly Necessary Cookies</p>
    </div>
    <div class="always-active">Always active</div>
</div>
    <div class="checkbox-container">
        <div class="collapsible">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294"
                viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298">
                </path>
                <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299">
                </path>
            </svg>
            <p>Functional Cookies</p>
        </div>

        <div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
        </div>
    </div>
    <div class="checkbox-container">
        <div class="collapsible">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294"
                viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298">
                </path>
                <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299">
                </path>
            </svg>
            <p>Performance Cookies</p>
        </div>

        <div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <div class="checkbox-container">
        <div class="collapsible">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294"
                viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298">
                </path>
                <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299">
                </path>
            </svg>
            <p>
                Personalised ads and content <br />
                measurement, audience insights <br />
                and product development
            </p>
        </div>

        <div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
        </div>
    </div>
    <div class="final-btns">
      <div id="reject-btn">Reject all</div>
      <div id="submit-btn">Submit My Choices</div>
  </div>`;

customizeCookiePopup.innerHTML = customizeContent;
let loginContainer = document.querySelector('.signup-main-container');
loginContainer.classList.add('signup-active');
loginContainer.appendChild(customizeCookiePopup);


const rejectBtn = document.getElementById('reject-btn');

rejectBtn.addEventListener('click', () => {
  customizeCookiePopup.remove();
  loginContainer.classList.remove('signup-active');


  setTimeout(() => {
    cookiePopup.classList.remove('cookie-show');
  }, 300);

  sessionStorage.setItem(key, value);
});


let submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', () => {
  customizeCookiePopup.remove();
  loginContainer.classList.remove('signup-active');

  setTimeout(() => {
    cookiePopup.classList.remove('cookie-show');
  }, 300);

  sessionStorage.setItem(key, value);
});
});

//Favorite items section

let heartico = document.getElementById('heart-ico');
let favItemContainer = document.querySelector('.fav-items-container');

heartico.addEventListener('click', () => {

  favItemContainer.classList.toggle('fav-items-container-active');

});


for(let i = 0; i < favButton.length; i++) {
  favButton[i].addEventListener('click', ToFavList);
}

function ToFavList(e) {
  
}