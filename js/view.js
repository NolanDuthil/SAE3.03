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
  template: {
    time: function (event) {
      return `<span style="color: white;">${event.title}</span>`;
    }
  },


});

/*let check = document.querySelectorAll('input[type="checkbox]');
check.addEventListener("click", () => V.uicalendar.setCalendarVisibility());*/

V.ColorCalendar = function () {
  V.uicalendar.setCalendarColor('mmi1', {
    backgroundColor: '#FF0000'
  });

  V.uicalendar.setCalendarColor('mmi2', {
    backgroundColor: '#00FF00'
  });

  V.uicalendar.setCalendarColor('mmi3', {
    backgroundColor: '#0000FF'
  });
}

let nav = document.querySelector('.nav');
nav.addEventListener("click", handlerClickOnNav)
let search = document.querySelector("#search");
search.addEventListener("keyup", handlerClickOnNav)



export { V };
