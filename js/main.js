// On page load (before images or CSS) change the location to the resume page
document.addEventListener("DOMContentLoaded", function() {
    window.location.href = 'https://Bozhidar-A.github.io/resume/resume.pdf'
});

// Fallback button click handler just in case
document.getElementById('resumeBtn').addEventListener('click', () => {
    window.location.href = 'Bozhidar-A.github.io/resume/resume.pdf'
});