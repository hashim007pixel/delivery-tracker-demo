function track() {
  const invoiceId = document.getElementById("invoiceInput").value;
  if (invoiceId.trim() !== "") {
    window.location.href = `track.html?id=${encodeURIComponent(invoiceId)}`;
  }
}
