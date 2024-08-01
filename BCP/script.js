document.addEventListener('DOMContentLoaded', function () { 
    const menuBtn = document.getElementById('menu-btn'); 
    const sidebar = document.getElementById('sidebar'); 
    const content = document.querySelector('.content'); 
 
    menuBtn.addEventListener('click', function () { 
        sidebar.classList.toggle('show'); 
        content.classList.toggle('shifted'); 
    }); 
     
    // Close the sidebar when clicking outside of it 
    document.addEventListener('click', function(event) { 
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) { 
            sidebar.classList.remove('show'); 
            content.classList.remove('shifted'); 
        } 
    }); 
});