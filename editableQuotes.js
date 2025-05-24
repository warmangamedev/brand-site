document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quoteText");
  const quoteAttribution = document.getElementById("quoteAttribution");

  let originalText = quoteText.innerText.trim();

  quoteText.addEventListener("input", () => {
    const currentText = quoteText.innerText.trim();
    if (currentText !== originalText) {
      quoteAttribution.textContent = "you, apparently..";
    } else {
      quoteAttribution.textContent = "client";
    }
  });
});