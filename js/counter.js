if (localStorage.getItem('visitcounter')) {
    let counter = parseInt(localStorage.getItem('visitcounter'));
    counter++;
    localStorage.setItem('visitcounter', counter);
  } else {
    localStorage.setItem('visitcounter', 1);
  }
  let actualcounter = localStorage.getItem('visitcounter');
  document.getElementById('counter').textContent = actualcounter;