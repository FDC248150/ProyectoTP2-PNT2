<template>
    <footer class="footer mt-4">
        <div class="footer-content">
            <div class="footer-social">
                <a
                    v-for="red in redes"
                    :key="red.name"
                    :href="red.url"
                    target="_blank"
                    :aria-label="red.name"
                >
                    <i :class="['bi', red.icon]"></i>
                </a>
            </div>
            <div class="footer-contact">
                <p><strong>Contacto:</strong> ortflixcine@outlook.com | +54 11 1234-5678</p>
                <p>
                    <strong>Dirección:</strong> Av. Siempre Viva 123, Buenos Aires
                    <img class="flag-ar" src="https://flagcdn.com/16x12/ar.png" alt="Argentina" />
                </p>
            </div>
            <div class="footer-copyright">
                <p>&copy; {{ year }} ORTFlix. Todos los derechos reservados.</p>
                <p class="footer-quote">
                "El cine es el arte de hacer soñar." – Georges Méliès
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default
{
    name: "Footer",
    data()
    {
        return {
            redes:
            [
                { name: "Instagram", url: "https://www.instagram.com/", icon: "bi-instagram" },
                { name: "TikTok", url: "https://www.tiktok.com/", icon: "bi-tiktok" },
                { name: "X", url: "https://x.com/", icon: "bi-twitter-x" },
                { name: "Telegram", url: "https://telegram.org/", icon: "bi-telegram" },
                { name: "Facebook", url: "https://facebook.com/", icon: "bi-facebook" },
                { name: "YouTube", url: "https://youtube.com/", icon: "bi-youtube" }
            ]
        }
    },
    computed:
    {
        year()
        {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
.footer
{
    background: #23272b;
    color: #fff3cd;
    padding: 24px 0 12px 0;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 3px solid #ffc107;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
    font-size: 1rem;
}

.footer-content
{
    max-width: 900px;
    margin: 0 auto;
}

.footer-social a
{
    color: #ffc107;
    margin: 0 12px;
    font-size: 1.6rem;
    transition: color 0.2s;
}

.footer-social a:hover
{
    color: #fff3cd;
}

.footer-contact
{
    margin: 10px 0;
    color: #fff3cd;
}

.footer-contact strong
{
    color: #ffc107;
}

.flag-ar
{
    margin-left: 6px;
    vertical-align: middle;
}

.footer-copyright
{
    margin-top: 10px;
    font-size: 0.95rem;
}

.footer-quote
{
    font-style: italic;
    color: #fff3cd;
    margin-top: 4px;
}
</style>