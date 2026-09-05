/* =====================================================
   FASTBITE - LOCAL STORAGE
   ===================================================== */


/**
 * Save data to LocalStorage
 *
 * @param {string} key
 * @param {*} value
 */
function saveData(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error(
            "LocalStorage save error:",
            error
        );

        return false;
    }
}


/**
 * Get data from LocalStorage
 *
 * @param {string} key
 * @param {*} defaultValue
 */
function getData(key, defaultValue = null) {

    try {

        const data = localStorage.getItem(key);

        if (data === null) {
            return defaultValue;
        }

        return JSON.parse(data);

    } catch (error) {

        console.error(
            "LocalStorage read error:",
            error
        );

        return defaultValue;
    }
}


/**
 * Remove data from LocalStorage
 *
 * @param {string} key
 */
function removeData(key) {

    try {

        localStorage.removeItem(key);

        return true;

    } catch (error) {

        console.error(
            "LocalStorage remove error:",
            error
        );

        return false;
    }
}


/**
 * Clear all FastBite application data
 */
function clearFastBiteStorage() {

    const keys = [
        "fastfood_products",
        "fastfood_categories",
        "fastfood_customers",
        "fastfood_current_user",
        "fastfood_cart",
        "fastfood_orders",
        "fastfood_offers",
        "fastfood_messages",
        "fastfood_admin",
        "fastfood_settings"
    ];

    keys.forEach(function (key) {
        localStorage.removeItem(key);
    });

    console.log("FastBite storage cleared.");
}
