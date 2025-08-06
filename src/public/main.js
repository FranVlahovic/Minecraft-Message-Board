const mainContainer = document.querySelector('.mainContainer');
const signModal = document.querySelector('.signModal');
const alertModal = document.querySelector('.alertModal');
const textInput = document.querySelector('.textInput');
const startAlert = document.querySelector('.startScreenAlert');

window.addEventListener('load', () => {
    if (localStorage.getItem('startAlertDismissed') === 'true') {
        startAlert.classList.add('hidden');
    }
});

async function openModal(){
    try {
        const res = await fetch('/messages');
        const data = await res.json();
        
        if(data.length < 3){
            signModal.classList.add('active');
        } else {
            alertModal.classList.add('active');
            setTimeout(() => {
                alertModal.classList.remove('active');
            }, 3000);
        }
    } catch (error) {
        console.error(error);
    }
}

function closeStartAlert() {
    startAlert.classList.add('hidden');
    localStorage.setItem('startAlertDismissed', 'true');
}

function closeModal(){
    signModal.classList.remove('active');
}

mainContainer.addEventListener('mousedown',(event) => {
    if(event.button === 2){
        closeStartAlert();
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

  
