"use strict";

const userInfoOutput = document.getElementById("main");
const user = {
  name: "Vardenis",
  surname: "Pavardenis"
};

userInfoOutput.innerHTML = `<h2>User Information</h2>
<p>Vartotojo vardas yra (${user.name}), o pavardė (${user.surname}).</p>`;
