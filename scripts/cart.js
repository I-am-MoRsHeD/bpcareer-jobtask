

function addToCart(target) {
    const cartContainer = document.getElementById('cart-container');

    const getTitle = target?.parentNode?.parentNode?.childNodes[1]?.innerText;
    let getPriceString = target?.parentNode?.parentNode?.childNodes[3]?.childNodes[0];
    let getPrice = parseInt(getPriceString.innerText)


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-2 border-black rounded-lg p-2 m-2">
        <h1 class="font-bold "> ${getTitle} </h1>
        <p class="font-bold"> ${getPrice}$/each </p>
        <div id="cartValue" class="bg-white w-1/3 my-3 flex justify-between">
            <button class="px-1 bg-gray-300"> - </button>
            <span> 1 </span>
            <button class="px-1 bg-gray-300"> + </button>
        </div>
        <p class="flex justify-end"> <span class="font-bold">0 </span>$</p>
        <button class="px-3 py-2 font-semibold hover:scale-105 rounded-lg hover:font-bold bg-gray-300">Delete</button>
    </div>`
    cartContainer.appendChild(div);



    // add disabled in button
    const cartButton = target.parentNode?.parentNode?.childNodes[7]?.childNodes[1]
    cartButton.setAttribute('disabled', '')

    // counter of items
    let countItem = cartContainer.childNodes[1]?.childNodes[1];
    let countItemInt = parseInt(countItem.innerText);
    let countItemIncrease = countItemInt + 1;
    countItem.innerText = countItemIncrease;

    // functionality of delete button
    const deleteButton = cartContainer?.childNodes[3]?.childNodes[1].childNodes[9];
    deleteButton.addEventListener('click', function () {
        cartContainer.removeChild(div)
        cartButton.removeAttribute('disabled')
        let countItem = cartContainer.childNodes[1]?.childNodes[1];
        let countItemInt = parseInt(countItem.innerText);
        let countItemIncrease = countItemInt - 1;
        countItem.innerText = countItemIncrease;
    })


    let countValueString = cartContainer?.childNodes[3]?.childNodes[1].childNodes[5]?.childNodes[3]?.innerText;
    let value = parseInt(countValueString)

    // handle minus button
    const hanldeMinus = cartContainer?.childNodes[3]?.childNodes[1]?.childNodes[5]?.childNodes[1];
    hanldeMinus.addEventListener('click', function () {

        if (value > 0) {
            value = value - 1;
            const getField = cartContainer?.childNodes[3]?.childNodes[1]?.childNodes[5]?.childNodes[3]
            getField.innerText = value;

            // countdown the price
            const totalItemPrice = getPrice * parseInt(getField.innerText);

            const getPerValue = cartContainer?.childNodes[3]?.childNodes[1]?.childNodes[7]?.childNodes[1];

            getPerValue.innerText = totalItemPrice;
        }
    })

    // handle plus button
    const hanldePlus = cartContainer?.childNodes[3]?.childNodes[1]?.childNodes[5]?.childNodes[5];
    hanldePlus.addEventListener('click', function () {

        value = value + 1;
        const getField = cartContainer?.childNodes[3]?.childNodes[1]?.childNodes[5]?.childNodes[3]
        getField.innerText = value;

        // countdown the price
        const totalItemPrice = getPrice * parseInt(getField.innerText);
        const getPerValue = cartContainer?.childNodes[3]?.childNodes[1]?.childNodes[7]?.childNodes[1];
        getPerValue.innerText = totalItemPrice;
    })

    const totalItemPrice = getPrice * value;
    const getPerValue = cartContainer?.childNodes[3]?.childNodes[1]?.childNodes[7]?.childNodes[1];
    getPerValue.innerText = totalItemPrice;
    console.log(getPerValue.innerText)

}






