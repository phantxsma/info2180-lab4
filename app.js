document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".btn")

    button.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET','superheroes.php', true);
        
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        };
        
        xhr.send();
    })
})