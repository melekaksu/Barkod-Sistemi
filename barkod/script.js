// Ürün Barkod ve Fiyatları
const products = {
    "123456789012": "250 TL",
    "987654321098": "655 TL"
};

// Elle Barkod Girip Fiyatı Gösterme
document.getElementById('fetchPrice').addEventListener('click', function() {
    const barcode = document.getElementById('barcodeInput').value;
    const price = products[barcode] || "Ürün Bulunamadı";
    document.getElementById('price').textContent = price;
});

// ZXing Kamera Taraması
function startCamera() {
    const codeReader = new ZXing.BrowserBarcodeReader();
    const previewElem = document.querySelector('video');

    // Kameradan Barkod Okuma ve Görüntüyü Ekranda Gösterme
    codeReader.decodeOnceFromVideoDevice(undefined, previewElem)
      .then(result => {
          console.log(result.text);
          document.getElementById('barcodeInput').value = result.text; 
          const price = products[result.text] || "Ürün Bulunamadı";
          document.getElementById('price').textContent = price; 
      })
      .catch(err => console.error(err));
}