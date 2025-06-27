<template>
    <header class="header">
        <div class="header-content">
            <div class="header-logo">
                <i class="bi bi-film"></i>
                <span>ORTFlix</span>
            </div>
            <div class="header-slogan">
                <span>{{ slogan }}</span>
            </div>
        </div>
    </header>
</template>

<script>
export default
{
    name: "Header",
    computed:
    {
        slogan()
        {
            const hora = new Date().getHours();
            let mensaje = "¡Nada como una noche de cine!";

            if (hora < 12) mensaje = "¡Que tengas un gran día de cine!";
            else if (hora < 20) mensaje = "¡Disfruta la tarde con una buena película!";
            
            return mensaje;
        }
    }
}
</script>

<style scoped>
.header
{
    background-color: #ffc107;
    color: #212529;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    padding: 18px 0 10px 0;
    margin-bottom: 0;
}

.header-content
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
}

.header-logo
{
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    gap: 10px;
}

.header-logo i
{
    font-size: 2.2rem;
}

.header-slogan
{
    font-size: 1.1rem;
    font-style: italic;
    color: #856404;
}
</style>