let user_points = sessionStorage.getItem("points");
document.querySelector(".points").innerHTML = user_points;

if (user_points > 60){
    let won = document.createElement("h2");
    won.innerHTML = "Felicidades ganaste";
    let div = document.getElementById("seh");
    div.appendChild(won);
    } else {
    let lose = document.createElement("h2");
    lose.innerHTML = "Has perdido, ¿¡Aceptarás la derrota!?"
    let div = document.getElementById("seh");
    div.appendChild(lose);
}