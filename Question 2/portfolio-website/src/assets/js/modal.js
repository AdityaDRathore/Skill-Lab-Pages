function openModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;

    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    };

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = 'block';
}

function setupModalTriggers() {
    const projectImages = document.querySelectorAll('.project-thumbnail');
    projectImages.forEach(image => {
        image.onclick = function() {
            openModal(this.src, this.alt);
        };
    });
}

document.addEventListener('DOMContentLoaded', setupModalTriggers);