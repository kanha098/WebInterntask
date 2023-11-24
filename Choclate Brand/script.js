document.addEventListener('DOMContentLoaded', function() {
    const chocolates = document.querySelectorAll('.chocolate');
    const selectedList = document.getElementById('selectedList');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    chocolates.forEach(chocolate => {
        chocolate.addEventListener('click', function() {
            const price = parseFloat(chocolate.getAttribute('data-price'));
            if (totalPrice + price <= 8.00) {
                totalPrice += price;
                const listItem = document.createElement('li');
                listItem.textContent = `${chocolate.textContent} - $${price.toFixed(2)}`;
                selectedList.appendChild(listItem);
                totalPriceElement.textContent = totalPrice.toFixed(2);
            } else {
                alert('You have reached the maximum limit of 8 items in your bundle.');
            }
        });
    });
});