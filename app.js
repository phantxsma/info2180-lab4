document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".btn"); 

    button.addEventListener("click", function() {
        var userInput = document.getElementById("superhero-name").value; 
        var result = document.querySelector(".result");

        fetch('superheroes.php?query=' + userInput)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;

                var h2Element = document.createElement("h2");
                h2Element.textContent = "RESULT";
                result.insertBefore(h2Element, result.firstChild); 
            })
    })
})