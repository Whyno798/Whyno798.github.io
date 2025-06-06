function setupEmailCopy() {
    const emailBtn = document.getElementById('copyEmailBtn');
    const email = '79536860663@mail.ru';

    if (!emailBtn) return;

    emailBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(email);
            emailBtn.innerHTML = '<i class="fas fa-check"</i> Скопировано!';
            emailBtn.style.backgroundColor = '#2ecc71';
            setTimeout(() => {
                emailBtn.innerHTML = '<i class="fas fa-copy"</i> Скопировать email';
                emailBtn.style.backgroundColor = '';
            }, 2000);
        } catch (err) {
            console.error('Ошибка', err);
            emailBtn.textContent = 'Ошибка :(';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupEmailCopy();
});

function initTheme() {
    const themeBtn = document.getElementById('themeToogle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toogle('dark-theme');
        const icon = themeBtn.querySelector('i');
        icon.classList.toogle('fa-moon');
        icon.classList.toogle('fa-sun');

        localStorage.setItem('theme',
            document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
}