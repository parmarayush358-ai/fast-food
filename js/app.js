/* =====================================================
   FASTBITE - MAIN APPLICATION
   ===================================================== */


document.addEventListener("DOMContentLoaded", function () {

    initializeApp();

});


/**
 * Initialize application
 */
function initializeApp() {

    initializeMobileMenu();

    initializeCurrentYear();

    initializeCartCount();

}


/**
 * Mobile navigation
 */
function initializeMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (!menuToggle || !mainNav) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle("active");

            const isOpen =
                mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.textContent =
                isOpen ? "✕" : "☰";

        }
    );


    /*
     * Close menu after clicking a navigation link
     */
    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mainNav.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/**
 * Set current year automatically
 */
function initializeCurrentYear() {

    const yearElement =
        document.getElementById("currentYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}


/**
 * Update cart counter
 */
function initializeCartCount() {

    const cart =
        getData("fastfood_cart", []);


    updateCartCount(cart);

}


/**
 * Update cart count in navbar
 *
 * @param {Array} cart
 */
function updateCartCount(cart) {

    const cartCount =
        document.querySelector(".cart-count");


    if (!cartCount) {
        return;
    }


    if (!Array.isArray(cart)) {

        cartCount.textContent = "0";

        return;
    }


    const totalItems =
        cart.reduce(
            function (total, item) {

                return total +
                    Number(item.quantity || 0);

            },
            0
        );


    cartCount.textContent =
        totalItems > 99
            ? "99+"
            : totalItems;

}
