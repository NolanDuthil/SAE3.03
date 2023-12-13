import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { handlerClickOnNav } from '../main';

let V = {};

V.uicalendar = new Calendar('#calendar', {
  defaultView: 'week',
  isReadOnly: true,
  usageStatistics: false,
  useDetailPopup: true,
  week: {
    startDayOfWeek: 1,
    dayNames: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    workweek: true,
    hourStart: 8,
    hourEnd: 20,
    taskView: false,
    eventView: ['time'],
  },
  month: {
    startDayOfWeek: 1,
    dayNames: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    workweek: true,
    taskView: false,
    eventView: ['time'],
  },
  template: {
    time: function (event) {
      return `<span style="color: white;">${event.title}</span>`;
    }
  },


});

let nav = document.querySelector('.nav');
nav.addEventListener("click", handlerClickOnNav)
let search = document.querySelector("#search");
search.addEventListener("keyup", handlerClickOnNav)

V.colorMap = {
  mmi1 : {CM :"#660000", TD:"#990000",TP:"#CC0000",AUTRE:"#FF0000"},
  mmi2 : {CM :"#355E3B", TD:"#228B22", TP:"#50C878",AUTRE:"#00FF00"},
  mmi3 : {CM:"#00008B",TD:"#0047AB",TP:"#000FFF",AUTRE:"#0000FF"}
}

export { V };
