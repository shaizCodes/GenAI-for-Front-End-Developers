// generate a function to open and close the modal window
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("modal--hidden");
    } else {
        console.error(`Modal with id ${modalId} not found.`);
    }
}

// implement the functionality to close the modal when clicking outside of it or pressing the "Esc" key.
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("modal--hidden");
    } else {
        console.error(`Modal with id ${modalId} not found.`);
    }
}

// Event listener for closing the modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    const modalOpenButton = document.querySelector('.modal__open-button');
    if (event.target === modalOpenButton) {
        openModal(modal.id);
        return; // Do not close if the click is on the button that opens the modal
    }
    !modal.contains(event.target) && closeModal(modal.id);
});

// Event listener for closing the modal when pressing the "Esc" key
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modal = document.querySelector('.modal');
        if (modal) {
            closeModal(modal.id);
        }
    }
});