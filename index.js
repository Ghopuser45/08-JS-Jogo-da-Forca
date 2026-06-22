const prompt = require("prompt-sync")();

const categorias = {

Hardware: [

    {
        palavra: "teclado",
        dica: "Periférico utilizado para digitação."
    },

    {
        palavra: "monitor",
        dica: "Dispositivo responsável por exibir imagens."
    },

    {
        palavra: "processador",
        dica: "Considerado o cérebro do computador."
    },

    {
        palavra: "memoria",
        dica: "Componente utilizado para armazenar dados temporariamente."
    },

    {
        palavra: "gabinete",
        dica: "Estrutura que abriga os componentes do computador."
    },

    {
        palavra: "placamae",
        dica: "Componente que conecta todas as partes do computador."
    },

    {
        palavra: "ssd",
        dica: "Dispositivo de armazenamento mais rápido que o HD."
    }
],

Paises: [

    {
        palavra: "brasil",
        dica: "Maior país da América do Sul."
    },

    {
        palavra: "japao",
        dica: "País conhecido por sua tecnologia e cultura dos samurais."
    },

    {
        palavra: "canada",
        dica: "País da América do Norte famoso por seus invernos rigorosos."
    },

    {
        palavra: "portugal",
        dica: "País europeu que colonizou o Brasil."
    },

    {
        palavra: "argentina",
        dica: "País vizinho do Brasil conhecido pelo tango."
    },

    {
        palavra: "mexico",
        dica: "País da América do Norte famoso por tacos e mariachis."
    },

    {
        palavra: "italia",
        dica: "País europeu conhecido por pizza e massas."
    }
],

InstrumentosMusicais: [

    {
        palavra: "violao",
        dica: "Instrumento de cordas muito popular no Brasil."
    },

    {
        palavra: "guitarra",
        dica: "Instrumento amplamente utilizado no rock."
    },

    {
        palavra: "bateria",
        dica: "Conjunto de instrumentos de percussão."
    },

    {
        palavra: "piano",
        dica: "Instrumento de teclas presente em músicas clássicas."
    },

    {
        palavra: "flauta",
        dica: "Instrumento de sopro bastante antigo."
    },

    {
        palavra: "saxofone",
        dica: "Instrumento muito associado ao jazz."
    },

    {
        palavra: "trompete",
        dica: "Instrumento de metal utilizado em bandas e orquestras."
    }
]

};

function mostrarPalavra(palavra, letrasCorretas) {
    let exibicao = "";

    for (let letra of palavra) {
        if (letrasCorretas.includes(letra)) {
            exibicao += letra.toUpperCase() + " ";
        } else {
            exibicao += "_ ";
        }
    }

    return exibicao;
}

    function desenharForca(erros) {

    const forca = [

` 
 +---+
 |   |
     |
     |
     |
     |
=========`,

`
 +---+
 |   |
 O   |
     |
     |
     |
=========`,

`
 +---+
 |   |
 O   |
 |   |
     |
     |
=========`,

`
 +---+
 |   |
 O   |
/|   |
     |
     |
=========`,

`
 +---+
 |   |
 O   |
/|\\  |
     |
     |
=========`,

`
 +---+
 |   |
 O   |
/|\\  |
/    |
     |
=========`,

`
 +---+
 |   |
 O   |
/|\\  |
/ \\  |
     |
=========`
    ];

    console.log(forca[erros]);
}

function jogar() {
    console.log("***===== JOGO DA FORCA =====***\n");

    const nome = prompt("Digite seu nome: ");

    console.log("\nCategorias:");

    const nomesCategorias = Object.keys(categorias);

    nomesCategorias.forEach((categoria, indice) => {
        console.log(`${indice + 1} - ${categoria}`);
    });

    const opcao = parseInt(prompt("\nEscolha uma categoria: "));

    if (opcao < 1 || opcao > nomesCategorias.length) {
        console.log("\nCategoria inválida.");
        return;
    }

    const categoriaEscolhida = nomesCategorias[opcao - 1];

    const palavras = categorias[categoriaEscolhida];

    const palavraSorteada =
        palavras[Math.floor(Math.random() * palavras.length)];

    const palavra = palavraSorteada.palavra;
    const dica = palavraSorteada.dica;

    let erros = 0;
    const maxErros = 6;
    let dicaUsada = false;

    let letrasCorretas = [];
    let letrasTentadas = [];

    while (erros < maxErros) {
        console.log("\n--------------------------------");

        desenharForca(erros);

        console.log(`Jogador: ${nome}`);
        console.log(`Categoria: ${categoriaEscolhida}`);

        console.log(
            `\nPalavra: ${mostrarPalavra(palavra, letrasCorretas)}`
        );

        console.log(
            `Letras tentadas: ${letrasTentadas.join(", ")}`
        );

        console.log(
            `Erros restantes: ${maxErros - erros}`
        );

       const letra = prompt(
        "\nDigite uma letra ou digite 'dica': "
        ).toLowerCase();

        if (letra === "dica") {

            if (dicaUsada) {

                console.log("\nVocê já utilizou a dica.");

            } else {

                console.log("\n!!!===== DICA =====!!!");
                console.log(dica);

                console.log(
                    "\nPenalidade: você perdeu 1 tentativa."
                );

                erros++;
                dicaUsada = true;
            }

            continue;
        }

        if (letrasTentadas.includes(letra)) {
            console.log("Você já tentou essa letra.");
            continue;
        }

        letrasTentadas.push(letra);

        if (palavra.includes(letra)) {
            letrasCorretas.push(letra);
        } else {
            erros++;
        }

        let venceu = true;

        for (let caractere of palavra) {
            if (!letrasCorretas.includes(caractere)) {
                venceu = false;
                break;
            }
        }

        if (venceu) {
            const pontuacao = (maxErros - erros) * 10;

            console.log("\n***===== RESULTADO =====***");

            console.log(`Jogador: ${nome}`);
            console.log("Resultado: Vitória");
            console.log(`Palavra: ${palavra.toUpperCase()}`);
            console.log(`Pontuação: ${pontuacao}`);

            return;
        }
    }

    console.log("\n***===== RESULTADO =====***");

    console.log(`Jogador: ${nome}`);
    console.log("Resultado: Derrota");
    console.log(`Palavra correta: ${palavra.toUpperCase()}`);
    console.log("Pontuação: 0");
}

while (true) {
    jogar();

    const resposta =
        prompt("\nDeseja jogar novamente? (s/n): ");

    if (resposta.toLowerCase() !== "s") {
        console.log("\nObrigado por jogar!");
        break;
    }
}