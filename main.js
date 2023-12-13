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

V.uicalendar.createEvents(M.getEvents('mmi1'));

V.uicalendar.createEvents(M.getEvents('mmi2'));

V.uicalendar.createEvents(M.getEvents('mmi3'));

V.ColorCalendar();

let event1 = M.getEvents("mmi1");
let event2 = M.getEvents("mmi2");
let event3 = M.getEvents("mmi3");

let changes = {};

event1.forEach(event => {
  if (event.title.includes("CM")) {
    changes.backgroundColor = "#660000"
  }
  else if (event.title.includes("TD")) {
    changes.backgroundColor = "#990000"
  }
  else if (event.title.includes("TP")) {
    changes.backgroundColor = "#CC0000"
  }
  else {
    changes.backgroundColor = "#FF0000"
  }
  V.uicalendar.updateEvent(event.id, event.calendarId, changes);
});

event2.forEach(event => {
  if (event.title.includes("CM")) {
    changes.backgroundColor = "#355E3B"
  }
  else if (event.title.includes("TD")) {
    changes.backgroundColor = "#228B22"
  }
  else if (event.title.includes("TP")) {
    changes.backgroundColor = "#50C878"
  }
  else {
    changes.backgroundColor = "#00FF00"
  }
  V.uicalendar.updateEvent(event.id, event.calendarId, changes);
});

event3.forEach(event => {
  if (event.title.includes("CM")) {
    changes.backgroundColor = "#00008B"
  }
  else if (event.title.includes("TD")) {
    changes.backgroundColor = "#0047AB"
  }
  else if (event.title.includes("TP")) {
    changes.backgroundColor = "#000FFF"
  }
  else {
    changes.backgroundColor = "#0000FF"
  }
  V.uicalendar.updateEvent(event.id, event.calendarId, changes);
});

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
    V.uicalendar.createEvents(M.EventAllByGroup(ev.target.value));
    
  }

  if(ev.target.id == 'search'){
    let search = ev.target.value.split(' ');
    V.uicalendar.clear();
    V.uicalendar.createEvents(M.Search(search));
  }
  
}

export{handlerClickOnNav};