var events = [
    { grupo: "Pastors", hora: '15:30' },
    { grupo: "Àngels", hora: '18:00' },
    { grupo: "Dimonis", hora: '11:00' },
    { grupo: "Personatges", hora: '14:45' }
  ];

  var eventTableBody = document.getElementById('event-table-body');

  for (var i = 0; i < events.length; i++) {
    var eventItem = events[i];
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + eventItem.grupo + '</td>' +
                    '<td>' + (i + 1) + '/06/2023</td>' +
                    '<td>' + eventItem.hora + '</td>';
    eventTableBody.appendChild(row);
  }