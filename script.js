const resizeButton = document.getElementById('resize');

// metto in ascolto il button dell'evento click
resizeButton.addEventListener('click', e => {
  // al click del button blocco l'evento
  e.preventDefault();
  //   al body assegno la classe .sb-expand
  //   se già c'è la classe viene tolta, altrimenti viene assegnata
  document.body.classList.toggle('sb-expand');
});
