document.addEventListener('DOMContentLoaded', animateSkills);

idocument.getElementById('copyEmailBtn').addEventListener('click', function () {
    const email = '79536860663@mail.ru';

    navigator.clipboard.writeText(email)
    .then (() => {
            this.innerHTML = '<i class="fas fa-check"</i> Скопировано!';
            this.style.backgroundColor = '#2ecc71';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-copy"</i> Скопировать email';
                this.style.background = '';
            }, 2000);
        })
        .catch(err => {
            console.error('Ошибка', err);
            this.textContent = 'Нажмите для копирования';
        });
    });


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('themeToggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toogle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class=fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});

const animateSkills = () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => skill.style.opacity = '1');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toogle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.1});

    skills.forEach(skill => {
        skill.style.opacity = '0';
        observer.observe(skill);
    });
};