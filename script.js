//tabelinha de variáveis em milissegundos
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

let total;
let finalDate;
let intervalId;

if (localStorage.getItem("timer")) {
    finalDate = localStorage.getItem("timer");
    // a cada 1 segundo, execute a função timer. Guarde o id do setInterval em intervalId
    intervalId = setInterval(timer, 1000);
    console.log("tem o timer");
}


function start() {
    const date = document.querySelector("input").value
    finalDate = new Date(date).getTime() // data final em milissegundos

    // salvando uma chave
    localStorage.setItem("timer", finalDate);

    // a cada 1 segundo, execute a função timer. Guarde o id do setInterval em intervalId
    intervalId = setInterval(timer, 1000);
}

function timer() {
    let now = new Date().getTime(); // data atual em milissegundos
    total = finalDate - now; // diferença entre a data final e a data atual em milissegundos
    const days = Math.floor(total / day); // a diferença em dias
    const hours = Math.floor((total % day) / hour) + 3; // a diferença em horas (o restante de dias) + 3 (corrigindo o fuso horário, que, por padrão, vem com GMT 0)
    const minutes = Math.floor((total % hour) / minute); // a diferença em minutos (o restante de horas)
    const seconds = Math.floor((total % minute) / second); // a diferença em minutos (o restante de horas)

    document.querySelector("h1").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;
}

function stop() {
    localStorage.removeItem("timer");
    document.querySelector("h1").innerText = `😉`;
    clearInterval(intervalId);
}