document.getElementById("currencySubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("currencyInput").value;
    if (value === "")
      return;
    console.log(value);

    //currency
  const url = "http://api.currencylayer.com/live?access_key=f463700ac5a0a986bbed8f98cbb87a5a&currencies=USD," + value + "&format=1";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      //forecast += "<h5>Highest Temperature: " + json.list[i].main.temp_max + " &deg;F</h5>";
      results += "<h3> 1 USD equals: " + json.quotes.USDKRW.toFixed(2) + " " + value + "</h3>";
      document.getElementById("currencyResults").innerHTML = results;
    })
});
