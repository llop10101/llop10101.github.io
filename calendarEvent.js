var eventos = [
    { dia: 7, hora: '15:30' },
    { dia: 12, hora: '18:00' },
    { dia: 20, hora: '11:00' },
    { dia: 25, hora: '14:45' }
  ];
  
  var eventTableBody = document.getElementById('event-table-body');
  
  for (var i = 0; i < eventos.length; i++) {
    var evento = eventos[i];
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + evento.dia + '</td>' +
                    '<td>' + evento.dia + '/06/2023</td>' +
                    '<td>' + evento.hora + '</td>';
    eventTableBody.appendChild(row);
  }
  