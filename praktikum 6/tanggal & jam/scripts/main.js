$(document).ready(function() {
  let running = true;
  let timer;

  function updateClock() {
    const now = new Date();
    const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
    const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    const jam = String(now.getHours()).padStart(2, '0');
    const menit = String(now.getMinutes()).padStart(2, '0');
    const detik = String(now.getSeconds()).padStart(2, '0');

    $("#jam").html(`${hari}, ${tanggal}<br>${jam}:${menit}:${detik}`);
  }


  updateClock();
  timer = setInterval(updateClock, 1000);

 
  $("#start").click(function() {
    if (running) {
      clearInterval(timer);
      running = false;
    } else {
      timer = setInterval(updateClock, 1000);
      running = true;
    }
  });
});
