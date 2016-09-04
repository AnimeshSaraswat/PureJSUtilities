function switchTab(evt, tabName) {
  var i, tabcontent, tablink, content;
  tabcontent = document.getElementsByClassName('tabcontent');
  for(i = 0; i < tabcontent.length; i++)
    {
      tabcontent[i].style.display = "none";
    }
  tablink = document.getElementsByClassName("tablink");
  for(i = 0; i < tablink.length; i++)
    {
      tablink[i].className = tablink[i].className.replace("active", "");
    }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  // content = document.getElementById('tog-class');
  // content.classList.toggle('trans');
}

function triggerModal() {
  var overlay = document.getElementById('overlay');
  var modal = document.getElementById('modal-screen');
  overlay.className += " active";
  modal.className += " active";
}

function closeModal() {
  var overlay = document.getElementById('overlay');
  var modal = document.getElementById('modal-screen');
  overlay.classList.remove('active');
  modal.classList.remove('active');
}

function dropDownToggle(toggleId) {
   var styleDisplay = document.getElementById(toggleId);
   if(styleDisplay.style.display == 'block') {
     styleDisplay.style.display = 'none';
   }
   else {
     styleDisplay.style.display = 'block';
   }
}

function collapseToggle(collapseId) {
  var el = document.getElementById(collapseId);
  el.classList.toggle('active');
}
