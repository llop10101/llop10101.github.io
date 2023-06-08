$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'month',
      editable: true,
      eventRender: function(event, element) {
        if (!event.className || !event.className.includes('important')) {
          element.find('.fc-day-number').css('visibility', 'hidden');
        }
      },
      events: [
        {
          title: 'Funció 1',
          start: '2023-12-25',
          end: '2023-12-10',
          className: 'important'
        },
        {
          title: 'Funció 2',
          start: '2023-12-26',
          end: '2023-12-15',
          className: 'important'
        },
        {
          title: 'Funció 3',
          start: '2023-12-29',
          end: '2023-12-20',
          className: 'important'
        },
        {
          title: 'Funció 4',
          start: '2023-12-30',
          end: '2023-12-25',
          className: 'important'
        }
      ]
    });
  });
  