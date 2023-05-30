    function calcolaAreaTriangolo() {

    let base =document.getElementById ("base").value;

    let altezza = document.getElementById ("altezza").value;

    let areaTriangolo = (base * altezza)/2;

    let risultato = "<br><b>Area Triangolo: </b>" + areaTriangolo;
                document.getElementById("output").innerHTML = risultato;
    
    }