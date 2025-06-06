function setupEmailCopy() {
    const emailBtn = document.getElementById('copyEmailBtn');

    if (!emailBtn) return;

    emailBtn.addEventListener('click', () => {
        const email = '79536860663@mail.ru';

        navigator.clipboard.writeText(email)
            .then(() => {
                emailBtn.classList.add('copied');
                emailBtn.innerHTML = '<i class="fas fa-check"</i> Скопировано!';

                setTimeout(() => {
                    emailBtn.classList.remove('copied');
                    emailBtn.innerHTML = '<i class="fas fa-copy"</i> Скопировать email';
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка при копировании:', err);
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);

                emailBtn.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
                setTimeout(() => {
                    emailBtn.innerHTML = '<i class="fas fa-copy"</i> Скопировать email';
                }, 2000);
            });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setupEmailCopy();
});