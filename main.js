document.getElementById('copyEmailBtn').addEventListener('click', function () {
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


document.getElementById('themeToogle').addEventListener('click', function() {
    document.body.classList.toogle('dark-mode');
    const icon = this.querySelector('i');
    icon.classList.toogle('fa-moon');
    icon.classList.toogle('fa-sun');

    localStorage.setItem('theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    })
    
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeToogle i').classList = 'fas fa-sun';
    }