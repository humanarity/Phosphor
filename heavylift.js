// What we need to do is actually remove the mouse altogether.

// disable fullscreening


function dominate() {	
HTMLElement.prototype.webkitRequestFullScreen = function() {};	HTMLElement.prototype.webkitRequestFullscreen = function() {};}// insert into page so it dominates on the host page's javascript contextvar scriptdominate = document.createElement('script');scriptdominate.innerHTML = '('+dominate.toString()+'());';document.head.appendChild(scriptdominate);
