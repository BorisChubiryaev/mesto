const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__close');

const popupSave = popup.querySelector('.popup__form');
let usName = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let formName = document.querySelector('.popup__input-name');
let formDescription = document.querySelector('.popup__input-about');


const onPopup = function() {
    popup.classList.toggle('popupOpened');
};

openPopup.addEventListener('click', onPopup);

function formSumbit(evt) {
    evt.preventDefault();
    usName.textContent = formName.value;
    description.textContent = formDescription.value;
    onPopup();
}

popupSave.addEventListener('submit', formSumbit);