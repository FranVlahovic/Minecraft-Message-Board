const mainContainer = document.querySelector('.mainContainer');
const signModal = document.querySelector('.signModal');
const textInput = document.querySelector('.textInput');

function openModal(){
    signModal.classList.add('active');
}

function closeModal(){
    signModal.classList.remove('active');
}

mainContainer.addEventListener('mousedown',(event) => {
    if(event.button === 2){
        openModal();
        setTimeout(() => textInput.focus(),200)
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && signModal.classList.contains('active')) {
        closeModal();
    }
})

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})
