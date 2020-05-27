import react,{Component} from "react";

const Information = [
   {
    "label":"Fraise",
    "compo":[0],
    "emoji":"🍓"
  },
  {
    "label":"Pomme",
    "compo":[0, 1, 2, 3, 7, 8, 9, 10, 11],
    "emoji":"🍏"
  },
  {
    "label":"Orange",
    "compo": [0, 1, 2],
    "emoji":"🍊"
  },
  {
    "label":"Citron",
    "compo": [1],
    "emoji":"🍋"
  },
  {
    "label":"Ail",
    "compo": [6, 7, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Artichaut",
    "compo": [4, 5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Asperge",
    "compo": [3, 4, 5],
    "emoji":"🌱"
  },
  {
    "label":"Betterave",
    "compo": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Blette",
    "compo": [5, 6, 7, 8, 9, 10],
    "emoji":"🌱"
  },
  {
    "label":"Carotte",
    "compo": [0, 1, 2, 8, 9, 10, 11],
    "emoji":"🐰"
  },
  {
    "label":"Céleri",
    "compo": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Champignon de Paris",
    "compo": [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11],
    "emoji":"🍄"
  },
  {
    "label":"Chou",
    "compo": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Chou de Bruxelles",
    "compo": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱🇧🇪"
  },
  {
    "label":"Chou-fleur",
    "compo": [0, 1, 2, 8, 9, 10, 11],
    "emoji":"🌱🌸"
  },
  {
    "label":"Concombre",
    "compo": [4, 5, 6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Courge",
    "compo": [0, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Courgette",
    "compo": [4, 5, 6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Cresson",
    "compo": [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Echalote",
    "compo": [9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Endive",
    "compo": [0, 1, 2, 3, 4, 9],
    "emoji":"🌱"
  },
  {
    "label":"Epinard",
    "compo": [0, 1, 2, 3, 4, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Fenouil",
    "compo": [3, 5, 6, 7, 8, 9, 10],
    "emoji":"🌱"
  },
  {
    "label":"Haricot vert",
    "compo": [5, 6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Laitue",
    "compo": [4, 5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Mâche",
    "compo": [0, 1, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Navet",
    "compo": [0, 1, 2, 3, 4, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Maïs",
    "compo": [6, 7, 8],
    "emoji":"🌽"
  },
  {
    "label":"Oignon",
    "compo": [0, 1, 2, 3, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Panais",
    "compo": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Petit pois",
    "compo": [4, 5, 6],
    "emoji":"🌱"
  },
  {
    "label":"Poireau",
    "compo": [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Poivron",
    "compo": [5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Potiron",
    "compo": [0, 8, 9, 10, 11],
    "emoji":"🎃"
  },
  {
    "label":"Radis",
    "compo": [2, 3, 4, 5],
    "emoji":"🌱"
  },
  {
    "label":"Salsifis",
    "compo": [0, 1, 2, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Topinambour",
    "compo": [0, 1, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Cassis",
    "compo": [5, 6, 7],
    "emoji":"🌱"
  },
  {
    "label":"Châtaigne",
    "compo": [9, 10],
    "emoji":"🌰"
  },
  {
    "label":"Clémentine",
    "compo": [0, 1, 10, 11],
    "emoji":"🍊"
  },
  {
    "label":"Pamplemousse",
    "compo": [1, 2, 3, 4, 5],
    "emoji":"🍊"
  },
  {
    "label":"Coing",
    "compo": [9],
    "emoji":"🌱"
  },
  {
    "label":"Figue",
    "compo": [6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Groseille",
    "compo": [5, 6, 7],
    "emoji":"🌱"
  },
  {
    "label":"Kiwi",
    "compo": [0, 1, 2, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Mandarine",
    "compo": [0, 1, 10, 11],
    "emoji":"🍊"
  },
  {
    "label":"Melon",
    "compo": [5, 6, 7, 8, 9],
    "emoji":"🍈"
  },
  {
    "label":"Mirabelle",
    "compo": [7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Mûre",
    "compo": [7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Nectarine",
    "compo": [7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Myrtille",
    "compo": [7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Noisette",
    "compo": [8, 9, 10],
    "emoji":"🌰"
  },
  {
    "label":"Noix",
    "compo": [8, 9],
    "emoji":"🌰"
  },
  {
    "label":"Prune",
    "compo": [6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Quetsche",
    "compo": [7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Reine Claude",
    "compo": [8],
    "emoji":"🌱"
  },
  {
    "label":"Rhubarbe",
    "compo": [3, 4, 5],
    "emoji":"🌱"
  },
  {
    "label":"Pêche",
    "compo": [5, 6, 7, 8],
    "emoji":"🍑"
  },
  {
    "label":"Cerise",
    "compo": [5, 6],
    "emoji":"🍒"
  },
  {
    "label":"Abricot",
    "compo": [5, 6, 7],
    "emoji":"🍑"
  },
  {
    "label":"Framboise",
    "compo": [5, 6, 7],
    "emoji":"🌱"
  },
  {
    "label":"Melon",
    "compo": [5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Poire",
    "compo": [0, 1, 2, 7, 8, 9, 10, 11],
    "emoji":"🍐"
  },
  {
    "label":"Raisin",
    "compo": [8, 9],
    "emoji":"🍇"
  },
  {
    "label":"Aubergine",
    "compo": [5, 6, 7, 8],
    "emoji":"🍆"
  },
  {
    "label":"Brocoli",
    "compo": [8, 9, 10],
    "emoji":"🌱"
  },
  {
    "label":"Tomate",
    "compo": [5, 6, 7, 8],
    "emoji":"🍅"
  }
];

export default Information;
