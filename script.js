const inputName = document.getElementById ('input-name');
const btnUpdateName = document.getElementById ('btn-update-name');
const btnChangeTheme = document.getElementById ('btn-change-theme');
const profilName = document.getElementById ('profil-name');
const profilCard = document.getElementById ('profil-card');

let temaTerang = true;
btnChangeTheme.addEventListener ('click', function() {
    if (temaTerang) {
        profilCard.style.backgroundColor = '#2d2d2d' ;
        profilCard.style.color = 'white' ;
        profilCard.style.borderColor = 'white';
    } else {
        profilCard.style.backgroundColor = 'white' ;
        profilCard.style.color = '#333' ;
        profilCard.style.borderColor = '#333';
    }
    temaTerang = !temaTerang;
});

btnUpdateName.addEventListener('click' , function() {
    const namaBaru = inputName.value.trim ();
    if (namaBaru !== '') {
        profilName.innerText = namaBaru ;
        inputName.value = '';
    } else {
        alert ('Nama tidak boleh kosong! Silakan isi nama terlebih dahulu. ');
    }
});

inputName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        btnUpdateName.click();
    }
});
