const equipo = [
    {
        idequipo: "1",
        Descripcion: "Equipo de manta",
        Serie: "A"
    },
    {
        idequipo: "2",
        Descripcion: "Equipo de guayaquil",
        Serie: "B"  
    },
    {
        idequipo: "3",
        Descripcion: "Equipo de Quito",
        Serie: "A"
    },
    {
        idequipo: "4",
        Descripcion: "Equipo de calceta",
        Serie: "B"
    },
    {
        idequipo: "5",
        Descripcion: "Equipo de imbabura",
        Serie: "C"
    }
];

const torneo = [
    {
        idtorneo: "1",
        Descripcion: "Liga pro",
    },
    {
        idtorneo: "2",
        Descripcion: "Liga intercantonal"
    },
    {
        idtorneo: "3",
        Descripcion: "Liga interprovincial"
    },
    {
        idtorneo: "4",
        Descripcion: "Liga Europea"
    },
    {
        idtorneo: "5",
        Descripcion: "Liga Española"
    }
];

const partidos = [
    {
        idpartido: "1",
        torneo:{
            idtorneo: "1",
            Descripcion: "Liga pro",
        },
        equipo1: {
            idequipo: "1",
            Descripcion: "Equipo de manta",
            Serie: "A"
        },
        equipo2:{
            idequipo: "2",
            Descripcion: "Equipo de manta",
            Serie: "A"
        }
        , golesEquipo1:2
        , golesEquipo2:2
        , observacion: "Que buen gol del equipo 1"

    },
    {
        idpartido: "2",
        torneo:{
            idtorneo: "2",
            Descripcion: "Liga intercantonal"
        },
        equipo1: {
            idequipo: "2",
            Descripcion: "Equipo de guayaquil",
            Serie: "B"
        },
        equipo2:{
            idequipo: "3",
            Descripcion: "Equipo de Quito",
            Serie: "A"
        }
        , golesEquipo1:1
        , golesEquipo2:3
        , observacion: "Que buen gol del equipo 3"

    },
    {
        idpartido: "3",
        torneo:{
            idtorneo: "3",
            Descripcion: "Liga interprovincial"
        },
        equipo1: {
            idequipo: "3",
            Descripcion: "Equipo de Quito",
            Serie: "A"
        },
        equipo2:{
            idequipo: "1",
            Descripcion: "Equipo de manta",
            Serie: "A"
        }
        , golesEquipo1:1
        , golesEquipo2:1
        , observacion: "Empate"

    },
    {
        idpartido: "4",
        torneo:{
            idtorneo: "4",
            Descripcion: "Liga Europea"
        },
        equipo1: {
            idequipo: "4",
            Descripcion: "Equipo de calceta",
            Serie: "B"
        },
        equipo2:{
            idequipo: "5",
            Descripcion: "Equipo de imbabura",
            Serie: "C"
        }
        , golesEquipo1:5
        , golesEquipo2:0
        , observacion: "Goleada"

    },
    {
        idpartido: "5",
        torneo:{
            idtorneo: "5",
            Descripcion: "Liga Española"
        },
        equipo1: {
            idequipo: "1",
            Descripcion: "Equipo de manta",
            Serie: "A"
        },
        equipo2:{
            idequipo: "4",
            Descripcion: "Equipo de calceta",
            Serie: "B"
        }
        , golesEquipo1:3
        , golesEquipo2:0
        , observacion: "Goleada"

    },
    
    
];

console.log("Equipos:");
equipo.forEach(function(equipo) {
    console.log(equipo);
});

console.log("\nTorneos:");
for (let key in torneo) {
    console.log(torneo[key]);
}

console.log("\nPartidos:");
for (let partido of partidos) {
    console.log(partido);
}

function partidoscallback(ID: string, callback: (err: Error | undefined, res: any | undefined) => void) {
    const partidoEncontrado = partidos.find(partido => partido.idpartido === ID);
    callback(undefined, partidoEncontrado);
}

const ID: string = "1"; 
if (parseInt(ID) > 5) {
    console.log("Partido no encontrado.");
} else {
    partidoscallback(ID, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Partido encontrado:");
            console.log(res);
        } 
    });
}


// Fetch y promesis
fetch('https://restcountries.com/v3/name/ecuador')
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data: any[]) => {
    const country = data[0];
    console.log("Información del país (Fetch con Promises):");
    console.log("Nombre: " + country.name.common);
    console.log("Capital: " + country.capital[0]);
    console.log("Población: " + country.population);
  })
  .catch((error: Error) => {
    console.error('Fetch error:', error);
  });

// async/await
async function getCountryAsync(): Promise<void> {
  try {
    const response = await fetch('https://restcountries.com/v3/name/ecuador');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const country = data[0];
    console.log("Información del país (Async/await):");
    console.log("Nombre: " + country.name.common);
    console.log("Capital: " + country.capital[0]);
    console.log("Población: " + country.population);
  } catch (error) {
    console.error('Async/await error:', error);
  }
}

getCountryAsync();
