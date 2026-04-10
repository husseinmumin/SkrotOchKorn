
document.addEventListener("DOMContentLoaded", function()
{
    createMenu(); 
});

function createMenu()
{
    const nav = document.querySelector("nav");

    const menuItems =
    [
        {text: "Home", link: "index.html"},
        {text: "Products", link: "products.html"},
        {text: "Contact", link: "contact.html"},
        {text: "Media", link: "media.html"}
    ];

    menuItems.forEach(item =>
    {
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.text;
        nav.appendChild(a);
    });
}

function calculateTotal()
{
    let total = 0;

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox =>
    {
        if (checkbox.checked)
        {
            total += parseInt(checkbox.value);
        }
    });

    document.getElementById("totalprice").innerHTML = "Total: " + total.toLocaleString() + " kr";
}