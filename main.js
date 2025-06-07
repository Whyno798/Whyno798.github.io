document.getElementById('copyEmailBtn').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('79536860663@mail.ru');
        const icon = document.querySelector('#copyEmailBtn i');
        icon.classList.replace('fa-copy', 'fa check');
        setTimeout(() => icon.classList.replace('fa-check', 'fa-copy'), 2000);
    } catch (err) {
        console.error("Ошибка при копировании:", err);
    }
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

document.addEventListener('DOMContentLoaded', animateSkills);

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