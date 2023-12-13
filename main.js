import Calendar from "@toast-ui/calendar/*";
import { M } from "./js/model.js";
import { V } from "./js/view.js";

/*
   Ce fichier correspond au contrôleur de l'application. Il est chargé de faire le lien entre le modèle et la vue.
   Le modèle et la vue sont définis dans les fichiers js/model.js et js/view.js et importés (M et V, parties "publiques") dans ce fichier.
   Le modèle contient les données (les événements des 3 années de MMI).
   La vue contient tout ce qui est propre à l'interface et en particulier le composant Toast UI Calendar.
   Le principe sera toujours le même : le contrôleur va récupérer les données du modèle et les passer à la vue.
   Toute opération de filtrage des données devra être définie dans le modèle.
   Et en fonction des actions de l'utilisateur, le contrôleur pourra demander au modèle de lui retourner des données filtrées
   pour ensuite les passer à la vue pour affichage.

   Exception : Afficher 1, 2 ou les 3 années de formation sans autre filtrage peut être géré uniquement au niveau de la vue.
*/


// loadind data (and wait for it !)
await M.init();

let all = [...M.getEvents("mmi1"),...M.getEvents("mmi2"),...M.getEvents("mmi3")];

for (let ev of all) {
  ev.backgroundColor = V.colorMap[ev.calendarId][ev.type];
}

let mmi1 = [];
let mmi2 = [];
let mmi3 = [];

all.forEach(el=> {
  if (el.calendarId == "mmi1") {
    mmi1.push(el);
  }
  else if (el.calendarId == "mmi2") {
    mmi2.push(el);
  }
  else if (el.calendarId == "mmi3") {
    mmi3.push(el);
  }
});

V.uicalendar.createEvents(mmi1);
V.uicalendar.createEvents(mmi2);
V.uicalendar.createEvents(mmi3);

function handlerClickOnNav(ev) {
  if (ev.target.id == "prev") {
    V.uicalendar.prev()
  }
  if (ev.target.id == "actu") {
    V.uicalendar.today()
  }
  if (ev.target.id == "next") {
    V.uicalendar.next()
  }

  if (ev.target.id == "mmi1") {
    V.uicalendar.setCalendarVisibility("mmi1", ev.target.checked);
  }

  if (ev.target.id == "mmi2") {
    V.uicalendar.setCalendarVisibility("mmi2", ev.target.checked);
  }

  if (ev.target.id == "mmi3") {
    V.uicalendar.setCalendarVisibility("mmi3", ev.target.checked);
  }

  if(ev.target.parentNode.id == 'groupe') {
    V.uicalendar.clear();
    all = M.EventAllByGroup(ev.target.value);
    for (let ev of all) {
      ev.backgroundColor = V.colorMap[ev.calendarId][ev.type];
    }
    V.uicalendar.createEvents(all);
    
  }

  if(ev.target.id == 'search'){
    let search = ev.target.value.split(' ');
    V.uicalendar.clear();
    all = M.Search(search);
    for (let ev of all) {
      ev.backgroundColor = V.colorMap[ev.calendarId][ev.type];
    }
    V.uicalendar.createEvents(all);
  }
  
}

export{handlerClickOnNav};