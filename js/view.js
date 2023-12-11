import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

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
    time: function(event) {
      return `<span style="color: white;">${event.title}</span>`;
    }
  },
 
 
});

let prev = document.querySelector('#prev');
prev.addEventListener("click", () => V.uicalendar.prev());

let actu = document.querySelector('#actu');
actu.addEventListener("click", () => V.uicalendar.today());

let next = document.querySelector('#next');
next.addEventListener("click", () => V.uicalendar.next());

V.ColorCalendar = function(){
  V.uicalendar.setCalendarColor('mmi1', {
    backgroundColor : '#FF0000'});
  
  V.uicalendar.setCalendarColor('mmi2', {
      backgroundColor : '#00FF00'});
  
  V.uicalendar.setCalendarColor('mmi3', {
        backgroundColor : '#0000FF'});
}

export { V };
