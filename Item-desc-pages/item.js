let cartButton = document.querySelector('.addToCart');
let size = document.getElementById('size');
let sizeWarn = document.querySelector('.sizeWarn');
let quantityWarn = document.querySelector('.quantityWarn');
let quantity = document.getElementById('quantity');

cartButton.addEventListener('click', () => {

    if(size.value == "") {
        sizeWarn.style.display = 'inline-block';
    } else {
        if(quantity.value < 1) {
            quantityWarn.style.display = 'inline-block'
        } else {
            cartButton.classList.toggle('active');
                
            if(cartButton.classList.contains('active')) {
                setTimeout(() => {
                    cartButton.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path></svg><span>Added To Cart</span>'
                }, 400);
            } else {
                cartButton.innerHTML = 'ADD TO CART'
            }
            sizeWarn.style.display = 'none';
            quantityWarn.style.display = 'none';
        }
    }
})
