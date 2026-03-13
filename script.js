document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var splash = document.getElementById("splash");
    var mainContent = document.getElementById("main-content");
    
    
    splash.style.opacity = '0';
    
    
    setTimeout(function() {
        splash.style.display = "none";
        mainContent.style.display = "block";
        
        
        setTimeout(function() {
            mainContent.classList.add('fade-in');
        }, 50);
        
    }, 500); 
    
  }, 3000); 
});