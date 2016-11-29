function toggleVisibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}


function setHeartActive(fillId, borderId) {
  var fill = document.getElementById(fillId);
  var border = document.getElementById(borderId);
  
  fill.style.opacity = '1';
  border.style.opacity = '0';
}

function setHeartInactive(fillId, borderId) {
  var fill = document.getElementById(fillId);
  var border = document.getElementById(borderId);
  
  fill.style.opacity = '0';
  border.style.opacity = '1';
}