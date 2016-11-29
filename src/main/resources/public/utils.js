function toggleVisibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function hide(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';

}

function show(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'none')
      e.style.display = 'block';

}

