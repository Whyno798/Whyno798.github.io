document.addEventListener('DOMContentLoaded', function() {
    const emailBtn = document.getElementById('copyEmailBtn');

    if (!emailBtn) {
        console.error('Кнопка с id="copyEmailBtn" не найдена! Проверьте HTML');
        return;
    }

    if (!navigator.clipboard) {
        console.warn('Clipboard API не поддерживается');
        emailBtn.style.opacity = '0.5';
        return
    }

    emailBtn.addEventListener('click', async function () {
        try {
            await navigator.clipboard.writeText('79536860663@mail.ru');

            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.replace('fa-copy', 'fa-check');
                setTimeout(() => icon.classList.replace('fa-check', 'fa-copy'), 2000);
            }
        } catch (err) {
            console.error('Ошибка копирования:', err);
        }
    });
});


const themeBtn = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    themeBtn.querySelector('i').classList.toggle('fa-moon');
    themeBtn.querySelector('i').classList.toggle('fa-sun');
});

const animateSkills = () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => skill.style.opacity = '1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toogle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    skills.forEach(skill => {
        skill.style.opacity = '0';
        observer.observe(skill);
    });
};