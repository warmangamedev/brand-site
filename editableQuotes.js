document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quoteText");
  const quoteAttribution = document.getElementById("quoteAttribution");
  const quoteLink = document.getElementById("quoteLink");

  let originalText = quoteText.innerText.trim();

  quoteText.addEventListener("input", () => {
    const currentText = quoteText.innerText.trim();
    if (currentText !== originalText) {
      quoteAttribution.textContent = "you, apparently..";
      quoteLink.href = "https://www.linkedin.com/feed/";
    } else {
      quoteAttribution.textContent = "'a client'";
      quoteLink.href = "https://www.linkedin.com/in/matisse-waghemans-59786020b/";
    }
  });
});