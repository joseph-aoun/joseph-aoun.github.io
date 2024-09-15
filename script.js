document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    if (path === '/contact') {
        window.location.href = '/contact.html';
    } else if (path === '/work-experience') {
        window.location.href = '/work-experience.html';
    } else if (path === '/projects') {
        window.location.href = '/projects.html';
    } else if (path === '/index') {
        window.location.href = '/index.html';
    } else if(path == '/assignments') {
        window.location.href = '/assignments.html';
    }
});