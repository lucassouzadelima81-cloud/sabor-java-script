const divLIstaFimes = document.querySelector("#lista_filmes")
const btnTerror = document.querySelector("#btn_terror")
const filmes = [
  {
    titulo: "O Iluminado",
    sinopse: "Um homem se torna zelador de um hotel isolado e começa a perder a sanidade.",
    genero: "Terror"
  },
  {
    titulo: "Mad Max: Estrada da Fúria",
    sinopse: "Em um mundo pós-apocalíptico, um grupo foge de um tirano em uma perseguição implacável.",
    genero: "Ação"
  },
  {
    titulo: "Homem-Aranha: Através do Aranhaverso",
    sinopse: "Miles Morales viaja pelo multiverso e encontra uma equipe de Pessoas-Aranha.",
    genero: "Animação"
  },
  {
    titulo: "Superbad",
    sinopse: "Dois adolescentes co-dependentes enfrentam separação e situações hilárias em uma noite.",
    genero: "Comédia"
  },
  {
    titulo: "Indiana Jones e os Caçadores da Arca Perdida",
    sinopse: "Um arqueólogo aventureiro tenta encontrar uma relíquia bíblica antes dos nazistas.",
    genero: "Aventura"
  },
  { 
    titulo: "Hereditário", 
    sinopse: "Uma família descobre segredos aterrorizantes sobre sua ancestralidade após a morte da avó.", genero: "Terror" 
},
  { 
    titulo: "Invocação do Mal", 
    sinopse: "Investigadores paranormais ajudam uma família atormentada por uma presença sombria.", genero: "Terror" 
},
  { 
    titulo: "O Exorcista", 
    sinopse: "Uma mãe busca ajuda de padres para salvar sua filha possuída por um demônio.", 
    genero: "Terror" 
},
  { 
    titulo: "Pânico", 
    sinopse: "Um assassino mascarado usa clichês de filmes de terror para caçar adolescentes.", 
    genero: "Terror" 
},
  { 
    titulo: "Midsommar", 
    sinopse: "Um festival de verão sueco se transforma em um pesadelo pagão para um grupo de amigos.", genero: "Terror" 
},
  { 
    titulo: "A Bruxa", 
    sinopse: "Uma família puritana no século XVII é atormentada por forças malignas na floresta.", genero: "Terror" 
},
  { 
    titulo: "It: A Coisa", 
    sinopse: "Crianças enfrentam um palhaço mutante que se alimenta do medo em uma pequena cidade.", genero: "Terror" 
},
  { 
    titulo: "Nós", 
    sinopse: "Uma família é confrontada por versões assustadoras e idênticas de si mesmos.", 
    genero: "Terror" 
},
  { 
    titulo: "O Babadook", 
    sinopse: "Uma presença sinistra surge de um livro infantil para atormentar mãe e filho.", 
    genero: "Terror" 
},
  { 
    titulo: "Um Lugar Silencioso", 
    sinopse: "Uma família tenta sobreviver em silêncio absoluto para não ser caçada por monstros.", genero: "Terror" 
},
  { 
    titulo: "John Wick", 
    sinopse: "Um ex-assassino sai da aposentadoria para vingar a morte de seu cachorro.", 
    genero: "Ação" 

  },
  { 
    titulo: "Duro de Matar", 
    sinopse: "Um policial enfrenta terroristas que tomaram um prédio durante o Natal.", 
    genero: "Ação" 
},
  { 
    titulo: "Gladiador", 
    sinopse: "Um general traído busca vingança contra o imperador que assassinou sua família.", 
    genero: "Ação" 
},
  { 
    titulo: "Missão Impossível: Efeito Fallout", 
    sinopse: "Ethan Hunt corre contra o tempo após uma missão nuclear dar errado.", 
    genero: "Ação" 
},
  { 
    titulo: "Busca Implacável", 
    sinopse: "Um ex-agente usa suas habilidades para resgatar sua filha sequestrada em Paris.", 
    genero: "Ação" 
},
  { 
    titulo: "Top Gun: Maverick", 
    sinopse: "Maverick treina pilotos de elite para uma missão impossível e perigosa.", 
    genero: "Ação" 
},
  { 
    titulo: "Batman: O Cavaleiro das Trevas", 
    sinopse: "Batman enfrenta o caos absoluto causado pelo Coringa em Gotham.", 
    genero: "Ação" 
},
  { titulo: "Matrix", 
    sinopse: "Um programador descobre que a realidade é uma simulação e se junta à resistência.", 
    genero: "Ação" 
},
  { titulo: "Velozes e Furiosos 5", 
    sinopse: "Dom e sua equipe planejam um assalto milionário no Rio de Janeiro.", 
    genero: "Ação" 
},
  { titulo: "Resgate", 
    sinopse: "Um mercenário é enviado para resgatar o filho de um criminoso em Bangladesh.", 
    genero: "Ação" 
},

  // ANIMAÇÃO
  { 
    titulo: "Toy Story", 
    sinopse: "Brinquedos ganham vida e vivem aventuras quando os humanos não estão por perto.", 
    genero: "Animação" 
},
  { 
    titulo: "Shrek", 
    sinopse: "Um ogro solitário parte em uma missão para resgatar uma princesa e salvar seu pântano.", 
    genero: "Animação" 
},
  { 
    titulo: "A Viagem de Chihiro", 
    sinopse: "Uma menina entra em um mundo mágico governado por espíritos e deuses.", 
    genero: "Animação" 
},
  { 
    titulo: "O Rei Leão", 
    sinopse: "Um jovem leão deve encontrar seu caminho após a morte de seu pai, o rei.", 
    genero: "Animação" 
},
  { 
    titulo: "Procurando Nemo", 
    sinopse: "Um peixe-palhaço atravessa o oceano para encontrar seu filho capturado.", 
    genero: "Animação" 
},
  { 
    titulo: "Divertida Mente", 
    sinopse: "As emoções dentro da mente de uma menina tentam ajudá-la a lidar com mudanças.", 
    genero: "Animação" 
},
  { 
    titulo: "Homem-Aranha no Aranhaverso", 
    sinopse: "Diferentes versões do herói se unem para salvar o multiverso.", 
    genero: "Animação" 
},
  { 
    titulo: "Como Treinar o Seu Dragão", 
    sinopse: "Um jovem viking faz amizade com um dragão, mudando o destino de sua aldeia.", 
    genero: "Animação" 
},
  { 
    titulo: "Meu Malvado Favorito", 
    sinopse: "Um vilão planeja roubar a lua, mas é transformado por três órfãs.", 
    genero: "Animação" 
},
  { 
    titulo: "Wall-E", 
    sinopse: "Um pequeno robô na Terra abandonada embarca em uma jornada espacial por amor.", 
    genero: "Animação" 
},

  // COMÉDIA
  { 
    titulo: "Se Beber, Não Case!", 
    sinopse: "Amigos acordam em Las Vegas sem memória e sem o noivo após uma despedida de solteiro.", 
    genero: "Comédia" 
},
  { 
    titulo: "As Branquelas", 
    sinopse: "Dois agentes do FBI se disfarçam de socialites para investigar um sequestro.", 
    genero: "Comédia" 
},
  { 
    titulo: "Auto da Compadecida", 
    sinopse: "As aventuras de João Grilo e Chicó para sobreviverem no sertão.", 
    genero: "Comédia" 
},
  { 
    titulo: "Meninas Malvadas", 
    sinopse: "Uma garota entra no ensino médio e enfrenta as garotas mais populares da escola.", 
    genero: "Comédia" 
},
  { 
    titulo: "Click", 
    sinopse: "Um homem ganha um controle remoto que permite controlar o tempo de sua vida.", 
    genero: "Comédia" 
},
  { 
    titulo: "American Pie", 
    sinopse: "Quatro amigos fazem um pacto para perder a virgindade antes da formatura.", 
    genero: "Comédia" 
},
  { 
    titulo: "Todo Mundo em Pânico", 
    sinopse: "Uma sátira de filmes de terror onde um grupo de jovens é perseguido por um assassino.", 
    genero: "Comédia" 
},
  { 
    titulo: "Gente Grande", 
    sinopse: "Amigos de infância se reúnem com suas famílias para um final de semana nostálgico.", 
    genero: "Comédia" 
},
  { 
    titulo: "Debi & Lóide", 
    sinopse: "Dois amigos atrapalhados viajam pelo país para devolver uma maleta esquecida.", 
    genero: "Comédia" 
},
  { 
    titulo: "Ted", 
    sinopse: "O urso de pelúcia de um homem ganha vida e se torna seu melhor amigo desbocado.", 
    genero: "Comédia" 
},

  // AVENTURA
  { 
    titulo: "O Senhor dos Anéis: A Sociedade do Anel", 
    sinopse: "Um hobbit deve destruir um anel maligno para salvar o mundo.", 
    genero: "Aventura" 
},
  { 
    titulo: "Jurassic Park", 
    sinopse: "Dinossauros recriados em laboratório escapam e aterrorizam um parque temático.", 
    genero: "Aventura" 
},
  { 
    titulo: "Piratas do Caribe", 
    sinopse: "O capitão Jack Sparrow tenta recuperar seu navio de piratas amaldiçoados.", 
    genero: "Aventura" 
},
  { 
    titulo: "Interestelar", 
    sinopse: "Astronautas viajam por um buraco de minhoca em busca de um novo lar para a humanidade.", 
    genero: "Aventura" 
},
  { 
    titulo: "Harry Potter e a Pedra Filosofal", 
    sinopse: "Um órfão descobre que é bruxo e começa seus estudos em Hogwarts.", 
    genero: "Aventura" 
},
  { 
    titulo: "Jumanji: Bem-vindo à Selva", 
    sinopse: "Jovens são sugados para dentro de um jogo e devem sobreviver como avatares.", 
    genero: "Aventura" 
},
  { titulo: "Avatar", 
    sinopse: "Um soldado em Pandora se envolve com uma raça alienígena e luta por sua preservação.", 
    genero: "Aventura" 
},
  { titulo: "O Hobbit: Uma Jornada Inesperada", 
    sinopse: "Bilbo Bolseiro ajuda anões a recuperar seu reino das garras de um dragão.", 
    genero: "Aventura" 
},
  { titulo: "A Origem", 
    sinopse: "Ladrões entram nos sonhos das pessoas para roubar segredos corporativos.", 
    genero: "Aventura" 
  },
  { titulo: "Duna", sinopse: "Um jovem nobre precisa proteger o recurso mais valioso do universo em um planeta deserto.", genero: "Aventura" 

  }
];
function filtrarFilmesTerror() {
    const filmesTerror = filmes.filter((filme)=> {
        return filme.genero === "Terror"
    })
    console.log(filmesTerror)
}
btnTerror.addEventListener("click",filtrarFilmesTerror)
// filmes.forEach(filme => {
//     const li = document.createElement("li");
//     li.textContent = `${filme.titulo} - ${filme.genero}`;
//     document.querySelector("#lista_filmes").appendChild(li);
// });