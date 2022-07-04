const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__close');

const popupSave = popup.querySelector('.popup__form');
let usName = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let formName = document.querySelector('.popup__input-name');
let formDescription = document.querySelector('.popup__input-about');


const onPopup = function() {
    popup.classList.toggle('popup_opened');
};

const offPopup = function() {
    popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', onPopup);
closePopup.addEventListener('click', offPopup);

function formSumbit(evt) {
    evt.preventDefault();
    usName.textContent = formName.value;
    description.textContent = formDescription.value;
    onPopup();
}

popupSave.addEventListener('submit', formSumbit);