import react,{Component} from "react";

const Information = [
   {
    "label":"Fraise",
    "season":[4, 5, 6],
    "emoji":"🍓"
  },
  {
    "label":"Pomme",
    "season":[0, 1, 2, 3, 7, 8, 9, 10, 11],
    "emoji":"🍏"
  },
  {
    "label":"Orange",
    "season": [0, 1, 2],
    "emoji":"🍊"
  },
  {
    "label":"Citron",
    "season": [0, 1],
    "emoji":"🍋"
  },
  {
    "label":"Ail",
    "season": [6, 7, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Artichaut",
    "season": [4, 5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Asperge",
    "season": [3, 4, 5],
    "emoji":"🌱"
  },
  {
    "label":"Betterave",
    "season": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Blette",
    "season": [5, 6, 7, 8, 9, 10],
    "emoji":"🌱"
  },
  {
    "label":"Carotte",
    "season": [0, 1, 2, 8, 9, 10, 11],
    "emoji":"🐰"
  },
  {
    "label":"Céleri",
    "season": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Champignon de Paris",
    "season": [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11],
    "emoji":"🍄"
  },
  {
    "label":"Chou",
    "season": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Chou de Bruxelles",
    "season": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱🇧🇪"
  },
  {
    "label":"Chou-fleur",
    "season": [0, 1, 2, 8, 9, 10, 11],
    "emoji":"🌱🌸"
  },
  {
    "label":"Concombre",
    "season": [4, 5, 6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Courge",
    "season": [0, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Courgette",
    "season": [4, 5, 6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Cresson",
    "season": [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Echalote",
    "season": [9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Endive",
    "season": [0, 1, 2, 3, 4, 9],
    "emoji":"🌱"
  },
  {
    "label":"Epinard",
    "season": [0, 1, 2, 3, 4, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Fenouil",
    "season": [3, 5, 6, 7, 8, 9, 10],
    "emoji":"🌱"
  },
  {
    "label":"Haricot vert",
    "season": [5, 6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Laitue",
    "season": [4, 5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Mâche",
    "season": [0, 1, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Navet",
    "season": [0, 1, 2, 3, 4, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Maïs",
    "season": [6, 7, 8],
    "emoji":"🌽"
  },
  {
    "label":"Oignon",
    "season": [0, 1, 2, 3, 8, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Panais",
    "season": [0, 1, 2, 9, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Petit pois",
    "season": [4, 5, 6],
    "emoji":"🌱"
  },
  {
    "label":"Poireau",
    "season": [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Poivron",
    "season": [5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Potiron",
    "season": [0, 8, 9, 10, 11],
    "emoji":"🎃"
  },
  {
    "label":"Radis",
    "season": [2, 3, 4, 5],
    "emoji":"🌱"
  },
  {
    "label":"Salsifis",
    "season": [0, 1, 2, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Topinambour",
    "season": [0, 1, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Cassis",
    "season": [5, 6, 7],
    "emoji":"🌱"
  },
  {
    "label":"Châtaigne",
    "season": [9, 10],
    "emoji":"🌰"
  },
  {
    "label":"Clémentine",
    "season": [0, 1, 10, 11],
    "emoji":"🍊"
  },
  {
    "label":"Pamplemousse",
    "season": [1, 2, 3, 4, 5],
    "emoji":"🍊"
  },
  {
    "label":"Coing",
    "season": [9],
    "emoji":"🌱"
  },
  {
    "label":"Figue",
    "season": [6, 7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Groseille",
    "season": [5, 6, 7],
    "emoji":"🌱"
  },
  {
    "label":"Kiwi",
    "season": [0, 1, 2, 10, 11],
    "emoji":"🌱"
  },
  {
    "label":"Mandarine",
    "season": [0, 1, 10, 11],
    "emoji":"🍊"
  },
  {
    "label":"Melon",
    "season": [5, 6, 7, 8, 9],
    "emoji":"🍈"
  },
  {
    "label":"Mirabelle",
    "season": [7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Mûre",
    "season": [7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Nectarine",
    "season": [7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Myrtille",
    "season": [7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Noisette",
    "season": [8, 9, 10],
    "emoji":"🌰"
  },
  {
    "label":"Noix",
    "season": [8, 9],
    "emoji":"🌰"
  },
  {
    "label":"Prune",
    "season": [6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Quetsche",
    "season": [7, 8, 9],
    "emoji":"🌱"
  },
  {
    "label":"Reine Claude",
    "season": [8],
    "emoji":"🌱"
  },
  {
    "label":"Rhubarbe",
    "season": [3, 4, 5],
    "emoji":"🌱"
  },
  {
    "label":"Pêche",
    "season": [5, 6, 7, 8],
    "emoji":"🍑"
  },
  {
    "label":"Cerise",
    "season": [5, 6],
    "emoji":"🍒"
  },
  {
    "label":"Abricot",
    "season": [5, 6, 7],
    "emoji":"🍑"
  },
  {
    "label":"Framboise",
    "season": [5, 6, 7],
    "emoji":"🌱"
  },
  {
    "label":"Melon",
    "season": [5, 6, 7, 8],
    "emoji":"🌱"
  },
  {
    "label":"Poire",
    "season": [0, 1, 2, 7, 8, 9, 10, 11],
    "emoji":"🍐"
  },
  {
    "label":"Raisin",
    "season": [8, 9],
    "emoji":"🍇"
  },
  {
    "label":"Aubergine",
    "season": [5, 6, 7, 8],
    "emoji":"🍆"
  },
  {
    "label":"Brocoli",
    "season": [8, 9, 10],
    "emoji":"🌱"
  },
  {
    "label":"Tomate",
    "season": [5, 6, 7, 8],
    "emoji":"🍅"
  }
];

export default Information;
