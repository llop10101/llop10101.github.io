var eventos = [
    { dia: 7, hora: '15:30' },
    { dia: 12, hora: '18:00' },
    { dia: 20, hora: '11:00' },
    { dia: 25, hora: '14:45' }
  ];
  
  var calendarContainer = document.querySelector('.calendar');
  var numeroDias = new Date(2023, 5, 0).getDate();
  
  for (var i = 1; i <= numeroDias; i++) {
    if (eventos.find(e => e.dia === i)) {
      var dayElement = document.createElement('div');
      dayElement.classList.add('calendar-day', 'event-day');
      dayElement.innerHTML = '-' + '<br>' + i + '/06/2023' + '<br>' + eventos.find(e => e.dia === i).hora;
      calendarContainer.appendChild(dayElement);
    }
  }
  