document.addEventListener('DOMContentLoaded', () => {

    const GOOGLE_ANALYTICS_ID = 'G-1LEDS8P3C';

    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    // Funkcja do inicjalizacji Google Analytics
    function initAnalytics() {
        if (window.gaInitialized) {
            return;
        }
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-1LEDS8P3C5`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GOOGLE_ANALYTICS_ID);
        
        window.gaInitialized = true;
        console.log('Google Analytics zostało zainicjowane.');
    }

    // Sprawdź, czy istnieje już zgoda na pliki cookie
    const consent = getCookie('cookie_consent');

    if (!consent) {
        // Jeśli nie ma zgody, pokaż baner
        banner.style.display = 'flex';
    } else if (consent === 'accepted') {
        // Jeśli zgoda została udzielona, zainicjuj analitykę
        initAnalytics();
    }

    // Obsługa kliknięcia "Akceptuj"
    acceptBtn.addEventListener('click', () => {
        setCookie('cookie_consent', 'accepted', 365);
        banner.style.display = 'none';
        initAnalytics();
    });

    // Obsługa kliknięcia "Odrzuć"
    rejectBtn.addEventListener('click', () => {
        setCookie('cookie_consent', 'rejected', 365);
        banner.style.display = 'none';
    });
    
    // --- Funkcje pomocnicze do obsługi cookies ---
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});