function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "username" && password == "Fragiova") {
     // Credenziali corrette, reindirizza l'utente alla pagina protetta
     window.location.href = "giochi.html";
    } else {
     // Credenziali errate, mostra un messaggio di errore
     document.getElementById("message").innerHTML = "Username o password errati.";
    }
   }
   