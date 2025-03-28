// Menu responsivo
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('show');
            }
        });
    });
});

// Funções para o modal PIX
function showPixModal() {
    const modal = document.getElementById('pixModal');
    modal.classList.add('show');
}

function hidePixModal() {
    const modal = document.getElementById('pixModal');
    modal.classList.remove('show');
}

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    const modal = document.getElementById('pixModal');
    if (event.target === modal) {
        hidePixModal();
    }
});

// Validação do formulário de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Simulação de envio
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });
}