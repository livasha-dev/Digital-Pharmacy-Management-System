const form = document.getElementById("orderForm");
const result = document.getElementById("orderResult");

function selectMedicine(medicineName) {

    document.getElementById("medicine").value = medicineName;

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("phone").value;

    const medicine =
        document.getElementById("medicine").value;

    const quantity =
        document.getElementById("quantity").value;

    result.innerHTML = `
        <div class="order-card">

            <h3>✓ Order Placed Successfully</h3>

            <p>
                <strong>Customer:</strong>
                ${customerName}
            </p>

            <p>
                <strong>Phone:</strong>
                ${phone}
            </p>

            <p>
                <strong>Medicine:</strong>
                ${medicine}
            </p>

            <p>
                <strong>Quantity:</strong>
                ${quantity}
            </p>

            <p>
                <strong>Status:</strong>
                Order Confirmed
            </p>

        </div>
    `;

    form.reset();
});
