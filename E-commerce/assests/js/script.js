
// console.log("Script loaded!");


document.addEventListener("DOMContentLoaded", function () {

    var swiper = new Swiper(".hero-swiper", {
        grabCursor: true,
        // centeredSlides: true,
        slidesPerView: "auto",
        // loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        pagination: {
            el: '.hero-swiper .swiper-pagination',
            clickable: true,
        },

    });

    var productSwiper = new Swiper(".products-swiper", {

        slidesPerView: 4.5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // const wishlistLinks = document.querySelectorAll(".whislistLink");

    // wishlistLinks.forEach(link => {
    //     link.addEventListener("click", function (e) {
    //         e.preventDefault(); // Prevent navigation
    //         const heartPath = this.querySelector(".whishlist");
    //         heartPath.classList.toggle("active");
    //     });
    // });



    // if (document.querySelector(".whislistLink")) {

    //     const wishlistButtons = document.querySelectorAll(".whislistLink");

    //     wishlistButtons.forEach(button => {
    //         button.addEventListener("click", function (e) {
    //             e.preventDefault();

    //             const productSlide = this.closest(".productSlide");
    //             const image = productSlide.querySelector("img").getAttribute("src");
    //             const name = productSlide.querySelector(".pName").textContent;
    //             const price = productSlide.querySelector(".salePrice").textContent;

    //             const product = {
    //                 image,
    //                 name,
    //                 price,
    //             };

    //             let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


    //             const exists = wishlist.some(item => item.name === product.name);
    //             if (!exists) {
    //                 wishlist.push(product);
    //                 localStorage.setItem("wishlist", JSON.stringify(wishlist));
    //                 alert("Added to wishlist");
    //             } else {
    //                 alert("Already in wishlist");
    //             }
    //         });
    //     });

    // }

    const wishlistLinks = document.querySelectorAll(".whislistLink");

    wishlistLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();


            const heartPath = this.querySelector(".whishlist");
            heartPath.classList.toggle("active");


            const productSlide = this.closest(".productSlide");
            const image = productSlide.querySelector("img").getAttribute("src");
            const name = productSlide.querySelector(".pName").textContent;
            const price = productSlide.querySelector(".salePrice").textContent;

            const product = { image, name, price };
            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            const exists = wishlist.some(item => item.name === product.name);
            if (!exists) {
                wishlist.push(product);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                alert("Added to wishlist");
            } else {
                alert("Already in wishlist");
            }
        });
    });



    if (document.querySelector(".whislistItems")) {
        const wishlistContainer = document.querySelector(".whislistItems");
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        wishlistContainer.innerHTML = "";

        wishlist.forEach(product => {
            wishlistContainer.innerHTML += `
      <div class="productSlide pCard">
        <div class="productImage">
          <img src="${product.image}" width="160" height="160" />
          <a href="#" class="deleteLink"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3.57143H2.33333L3.66667 19H14.3333L15.6667 3.57143H1M9 7.42857V15.1429M12.3333 7.42857L11.6667 15.1429M5.66667 7.42857L6.33333 15.1429M6.33333 3.57143L7 1H11L11.6667 3.57143" stroke="black" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
          <button class="addToCartBtn"><svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M2.75 3.75H5.75L8 16.5H20" stroke="white" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>  Add to Cart</button>
        </div>
        <div class="productInfo">
          <p class="pName">${product.name}</p>
          <span class="salePrice">${product.price}</span>
        </div>
      </div>
    `;
        });


        wishlistContainer.addEventListener("click", function (e) {
            if (e.target.closest(".deleteLink")) {
                e.preventDefault();
                const card = e.target.closest(".productSlide");
                const name = card.querySelector(".pName").textContent;

                let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
                const updatedWishlist = wishlist.filter(item => item.name !== name);
                localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                card.remove();
            }
        });

    }


    // addto cart functionality
    const addToCartButtons = document.querySelectorAll(".addToCartBtn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = {
                name: this.closest(".productSlide").querySelector(".pName").textContent,
                price: this.closest(".productSlide").querySelector(".salePrice").textContent,
                image: this.closest(".productSlide").querySelector("img").src
            };
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const exists = cart.some(item => item.name === product.name);
            if (!exists) {
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Added to cart");
            } else {
                alert("Already in cart");
            }
        })

    });

    const cartContainer = document.querySelector(".cartContainer");
    // const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartContainer && document.querySelector(".cartHeaderRow")) {

        cartContainer.querySelectorAll(".cartItemRow").forEach(row => row.remove());

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.forEach(product => {
            const total = parseFloat(product.price.replace(/[^0-9.]/g, "")) * product.quantity;
            const row = document.createElement("div");
            row.className = "cartItemRow";
            row.innerHTML = `
                <div class="cartItem"><img src="${product.image}" alt="" height="54" width="54"> ${product.name}</div>
                <div class="cartPrice">${product.price}</div>
                <div class="cartQuantity">${product.quantity}</div>
                <div class="cartTotal">$${total}</div>
                <div class="cartActions"><button class="removeBtn primaryBtn">Remove</button></div>
            `;
            cartContainer.appendChild(row);
        });


        cartContainer.addEventListener("click", function (e) {
            if (e.target.classList.contains("removeBtn")) {
                const row = e.target.closest(".cartItemRow");
                const name = row.querySelector(".cartItem").textContent.trim();
                cart = cart.filter(item => !name.includes(item.name));
                localStorage.setItem("cart", JSON.stringify(cart));
                row.remove();
            }
        });
    }



});

