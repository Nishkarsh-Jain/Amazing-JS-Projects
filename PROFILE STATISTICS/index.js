const counterEls = document.querySelectorAll(".counter");

counterEls.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEl.innerText; //converting string to number.
    const dataCeil = counterEl.getAttribute("data-ceil");
    // console.log(dataCeil);
    //We want each no should display simultaneously, so we divide this by the smallest data-ceil num.
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
