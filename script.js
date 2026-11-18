const billingButtons = document.querySelectorAll(".billing-btn");
const prices = document.querySelectorAll(".price[data-monthly][data-yearly]");
const billingNotes = document.querySelectorAll(".billing-note");

function setBillingCycle(cycle) {
  billingButtons.forEach((button) => {
    const isActive = button.dataset.cycle === cycle;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  prices.forEach((price) => {
    price.style.opacity = "0";

    window.setTimeout(() => {
      price.textContent = Number(price.dataset[cycle]).toLocaleString("en-IN");
      price.style.opacity = "1";
    }, 120);
  });

  billingNotes.forEach((note) => {
    note.textContent = cycle === "yearly"
      ? "Billed annually · Save 20%"
      : "Billed monthly";
  });
}

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setBillingCycle(button.dataset.cycle);
  });
});
