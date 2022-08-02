const popupEdit = document.querySelector('.popup_profile');
const nameInput = document.querySelector('input[name="name"]');
const aboutInput = document.querySelector('input[name="about"]');
const usName = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const formEdit = document.querySelector('.popup__container_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupEditClose = document.querySelector('.popup__close-edit');

const popupAdd = document.querySelector('.popup_add');
const formAdd = document.querySelector('.popup__container-card');
const inputPlace = document.querySelector('.popup__container-input-name');
const inputUrl = document.querySelector('.popup__container-input-url');
const popupAddClose = document.querySelector('#popup__close_card');
const addButton = document.querySelector('.profile__add-button');

const photo = document.querySelector('.popup_picture');
const image = document.querySelector('.popup__image');
const imageClose = document.querySelector('.popup__close-image');
const descriptionImage = document.querySelector('.popup__image-description');

const cardsContainer = document.querySelector('.elements');

const templateElement = document.querySelector('.template-element').content;

const buttonCreate = document.querySelector('.popup__save');
const buttonCard = document.querySelector('.popup__save_invalid');

const initialCards = [
  {
    name: 'Миша',
    link: 'https://sun9-east.userapi.com/sun9-18/s/v1/if2/y8NHb0zVNi-TU_WGU0R8eF3JqQZpn4LcE2qUESbcPdGpP6oCIyRlUtvftWqHCsGt8_KTNlHAtt3_7a5alF7Wr283.jpg?size=322x574&quality=96&type=album'
  },
  {
    name: 'School',
    link: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/43c8AIOEy7ivwnIMU1fMDZD1sMwfFiM5uyeeMmtLNC32AuMlx53N03xuQ3yCFB61cvfmjVu5.jpg?size=650x599&quality=96&type=album'
  },
  {
    name: 'Котенок',
    link: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/VLqmvuWgyiSxdg_m5aRel0IlMzQakOZx6jrT7sVLzF24ZyBTE6pT6s5A-FRkg-UyuxpP-ctI.jpg?size=604x579&quality=96&type=album'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function closeByEsc(event) {
  if (event.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
  }
}

function closeByOverlayClick(event) {
  if (event.target.classList.contains('popup')) {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closeByEsc);
  popup.addEventListener('mousedown', closeByOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeByEsc);
  popup.removeEventListener('mousedown', closeByOverlayClick);
}

function editPopupProfile() {
  nameInput.value = usName.textContent;
  aboutInput.value = description.textContent;
  openPopup(popupEdit);
}

function editPopupProfileSave(evt) {
  evt.preventDefault();
  usName.textContent = nameInput.value;
  description.textContent = aboutInput.value;
  closePopup(popupEdit);
}

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
}

function createCard(item) {
    const newElement = templateElement.querySelector('.element').cloneNode(true);
    const elementPhoto = newElement.querySelector('.element__photo');
    const elementTitle = newElement.querySelector('.element__title');
    const elementLike = newElement.querySelector('.element__like');
    const elementDelete = newElement.querySelector('.element__delete');

    elementTitle.textContent = item.name;
    elementPhoto.alt = item.name;
    elementPhoto.src = item.link;

    elementDelete.addEventListener('click', deleteCard);
    elementLike.addEventListener('click', likeCard);
    elementPhoto.addEventListener('click', () => openImage(item.link, item.name));

    return newElement;
}

function createList() {
    const baseCards = initialCards.map(item => {
        const newElement = createCard(item);
        return newElement;
    });
    cardsContainer.append(...baseCards);
}

function addCards(evt) {
    evt.preventDefault();
    const card = createCard({name: inputPlace.value, link: inputUrl.value});
    cardsContainer.prepend(card);
    closePopup(popupAdd);
    buttonCard.classList.add('popup__save_invalid');
    formAdd.reset();
}

function openImage(link, alt) {
    image.src = link;
    image.alt = alt;
    descriptionImage.textContent = alt;
    openPopup(photo);
}

createList();

addButton.addEventListener('click', () => openPopup(popupAdd));
popupAddClose.addEventListener('click', () => closePopup(popupAdd));
buttonEdit.addEventListener('click', editPopupProfile);
formEdit.addEventListener('submit', editPopupProfileSave);
popupEditClose.addEventListener('click', () => closePopup(popupEdit));
formAdd.addEventListener('submit', addCards);
imageClose.addEventListener('click', () => closePopup(photo));