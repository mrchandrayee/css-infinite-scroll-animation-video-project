const copyButton = document.getElementById("copyCss");
const snippet = document.getElementById("snippet");

copyButton.addEventListener("click", async () => {
  const text = snippet.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied!";
    setTimeout(() => { copyButton.textContent = "Copy CSS"; }, 1400);
  } catch {
    copyButton.textContent = "Select code to copy";
    setTimeout(() => { copyButton.textContent = "Copy CSS"; }, 1800);
  }
});
