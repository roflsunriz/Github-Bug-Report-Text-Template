document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-template]");
  if (!button) {
    return;
  }

  const source = button.getAttribute("data-copy-template");
  if (!source) {
    return;
  }

  const originalLabel = button.textContent;

  try {
    const response = await fetch(source, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load template: ${response.status}`);
    }

    const text = await response.text();
    await navigator.clipboard.writeText(text);

    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1500);
  } catch (error) {
    console.error(error);
    button.textContent = "Copy failed";
    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1500);
  }
});
