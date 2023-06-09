window.addEventListener('scroll', function() {
var footer = document.getElementById('footer');
var threshold = document.documentElement.scrollHeight - window.innerHeight;

if (window.scrollY > threshold) {
    footer.classList.remove('hidden');
} else {
    footer.classList.add('hidden');
}
});
