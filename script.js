function addToCart(productName) {
    alert(`${productName} added to cart!`);
  }
  
  function closePopup() {
    document.getElementById("discount-popup").style.display = "none";
  }
  
  window.onload = function () {
    setTimeout(() => {
      document.getElementById("discount-popup").style.display = "flex";
    }, 500);
  };