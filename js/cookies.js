document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(function() {
            document.getElementById('cookieConsentOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 1000);
    }
    
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieConsentOverlay').classList.remove('active');
        document.body.style.overflow = '';
    });
});