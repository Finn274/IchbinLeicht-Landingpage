document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Deine Reise zu mehr Leichtigkeit hat begonnen!");
        });
    });
});
