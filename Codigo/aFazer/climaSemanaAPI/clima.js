function GetInfo() {

    var newNome = document.getElementById("cityInput");
    var cityNome = document.getElementById("nomeCidade");
    cityNome.innerHTML = newNome.value;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newNome.value + '&appid=f8280d0b6eff74964c22263490cc0b1c')
        .then(response => response.json())
        .then(data => {

            //pegando a temperatura minima and maxima 
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
            }

            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
            }
            //------------------------------------------------------------//

            //pegando os Icones
            for (i = 0; i < 5; i++) {
                document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }
            //------------------------------------------------------------//
            console.log(data)
        })

        .catch(err => alert("Cidade não encontrada: nome incorreto"))
}

function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "Belo horizonte";
    GetInfo();
}


//Pegando e apresentando o clima dos proximos 5 dias
var d = new Date();
var diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado",];

//Confere o numero de cada um doa dias da semana
function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = diaSemana[CheckDay(i)];
}
//------------------------------------------------------------//

//temp min, calculo e apresentação
document.getElementById("day1Min").innerHTML = Math.round(data.list[0].main.temp_min - 273.15, -2);
document.getElementById("day2Min").innerHTML = Math.round(data.list[1].main.temp_min - 273.15, -2);
document.getElementById("day3Min").innerHTML = Math.round(data.list[2].main.temp_min - 273.15, -2);
document.getElementById("day4Min").innerHTML = Math.round(data.list[3].main.temp_min - 273.15, -2);
document.getElementById("day5Min").innerHTML = Math.round(data.list[4].main.temp_min - 273.15, -2);

//temp max, calculo e apresentação
document.getElementById("day1Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day2Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day3Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day4Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day5Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);

//Icones do clima
document.getElementById("img1").src = "http://openweathermap.org/img/w/" +
    data.list[0].weather[0].icon
    + ".png";
document.getElementById("img2").src = "http://openweathermap.org/img/w/" +
    data.list[1].weather[0].icon
    + ".png";
document.getElementById("img3").src = "http://openweathermap.org/img/w/" +
    data.list[2].weather[0].icon
    + ".png";
document.getElementById("img4").src = "http://openweathermap.org/img/w/" +
    data.list[3].weather[0].icon
    + ".png";
document.getElementById("img5").src = "http://openweathermap.org/img/w/" +
    data.list[4].weather[0].icon
    + ".png";

//exibindo os dias da semana
document.getElementById("day1").innerHTML = diaSemana[CheckDay(0)];
document.getElementById("day2").innerHTML = diaSemana[CheckDay(1)];
document.getElementById("day3").innerHTML = diaSemana[CheckDay(2)];
document.getElementById("day4").innerHTML = diaSemana[CheckDay(3)];
document.getElementById("day5").innerHTML = diaSemana[CheckDay(4)];

diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda";
diaSemana[2] = "Terça";
diaSemana[3] = "Quarta";
diaSemana[4] = "Quinta";
diaSemana[5] = "Sexta";
diaSemana[6] = "Sábado";

// Dados de usuários para serem utilizados para o mock-fake baseado no nosso modelo de cadastro de eventos
const dadosCertos = {
    eventos: [
        {
            "nomeEvento": "Reuniãozinha social",
            "data": "04/11/2021",
            "tipo": "festa",
            "cidade": "são paulo",
            "email": "adm@gmail.com",
            "local": "rua das flores"
        },
    ]
};

const mock1 = JSON.parse(dadosCertos);

const dadosErrados = {
    eventos: [
        {
            "nomeEvento": "campeonato de xadrez",
            "data": "02/10/2021",
            "tipo": "campeonato",
            "Cidade": "asahdhadhad",//nome falso
            "email": "adm@abc.com",
            "local": "rua prudente"
        },
    ]
};

const mock2 = JSON.parse(dadosErrados);