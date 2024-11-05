function showFullPhoto(imageSrc) {
    const dialog = document.getElementById("photoModal");
    const fullPhoto = document.getElementById('fullPhoto');

    dialog.showModal();
    fullPhoto.src = imageSrc;
}

function closeModal() {
    const dialog = document.getElementById("photoModal");
    dialog.close();
}