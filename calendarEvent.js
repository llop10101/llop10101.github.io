var events = [
    { grupo: "Pastors", dia:1, hora: '15:30' },
    { grupo: "Àngels", dia:2, hora: '18:00' },
    { grupo: "Dimonis", dia:3, hora: '11:00' },
    { grupo: "Personatges", dia:4, hora: '14:45' }
  ];

  var eventTableBody = document.getElementById('event-table-body');

  for (var i = 0; i < events.length; i++) {
    var eventItem = events[i];
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + eventItem.grupo + '</td>' +
                    '<td>' + eventItem.dia + '/06/2023</td>' +
                    '<td>' + eventItem.hora + '</td>';
    eventTableBody.appendChild(row);
  }