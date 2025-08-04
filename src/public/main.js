const mainContainer = document.querySelector('.mainContainer');
const signModal = document.querySelector('.signModal');
const alertModal = document.querySelector('.alertModal');
const textInput = document.querySelector('.textInput');

async function openModal(){
    try {
        const res = await fetch('/messages');
        const data = await res.json();

        if(data.length < 9){
            signModal.classList.add('active');
        } else {
            alertModal.classList.add('active');
        }
    } catch (error) {
        console.error(error);
    }
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
