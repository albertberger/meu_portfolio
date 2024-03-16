document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const navLinks = document.querySelectorAll('header nav ul li a');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const projects = [
        { name: 'Projeto 1', imageUrl: 'pokédex.png',   
        description: 'Pokédex', url: 'https://albertberger.github.io/Pokedex/' },
        { name: 'Projeto 2', imageUrl: 'galeria responsiva.png', 
        description: 'Galeria de fotos responsiva', url: 'https://albertberger.github.io/Galeria_De_Fotos/' },
    ];

    projects.forEach(project => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('project-container'); // Adicionando uma classe de contêiner para cada imagem
        const img = document.createElement('img');
        img.src = project.imageUrl;
        img.alt = project.name;
        img.title = project.description;
        img.addEventListener('click', function() {
            window.open(project.url, '_blank');
        });
    
        const caption = document.createElement('p');
        caption.textContent = 'Clique na foto para visitar o site'; // Adicionando a legenda
    
        imgContainer.appendChild(img);
        imgContainer.appendChild(caption);
        gallery.appendChild(imgContainer);
    });

    // Lidar com envio do formulário
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Aqui você pode enviar o formulário usando AJAX ou outras técnicas.
        // Exemplo:
        // enviarFormulario(name, email, message);

        confirmationMessage.style.display = 'block';

        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        setTimeout(function() {
            confirmationMessage.style.display = 'none';
        }, 3000); 
    });

    // Rolar suavemente para as seções ao clicar nos links do menu de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});