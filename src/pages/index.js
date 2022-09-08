import './index.css';
import { btnProfileEdit, btnElementAdd, templateHtml, elementsContainer, inputProfileName, inputProfileStatus } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator, selectorsCurrent } from '../components/FormValidator.js';
import { initialCards } from '../utils/initialCards.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

function createCard(item){
  const card = new Card(item, templateHtml, { handleCardClick: () => {
    popupWithImage.openPopup(card);
    }
  });
  const cardElement = card.createCard();
  return cardElement;
}

const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {defaultCardList.addItem(createCard(item))}
  },
  elementsContainer
);
defaultCardList.renderElements();

const userInfo = new UserInfo({
  name: '.profile__name',
  status:'.profile__status'
});
const popupWithImage = new PopupWithImage({ popupSelector: '.popup_picture' });
popupWithImage.setEventListeners();

const popupEdit = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo({
      name: formData.inputProfileName,
      status: formData.inputProfileStatus
    });
    popupEdit.closePopup();
  }
});
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    defaultCardList.addNewItem(createCard({
      name: formData.inputElementTitle,
      link: formData.inputElementImageSrc,
      alt: formData.inputElementTitle
      })
    )
    popupAdd.closePopup();
    }
  });
popupAdd.setEventListeners();

const formEditProfileValidator = new FormValidator(popupEdit.form, selectorsCurrent);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(popupAdd.form, selectorsCurrent);
formAddCardValidator.enableValidation();

btnProfileEdit.addEventListener('click', () => {
  formEditProfileValidator.removeInputErrors();
  const { name, status } = userInfo.getUserInfo();
  inputProfileName.value = name;
  inputProfileStatus.value = status;
  popupEdit.openPopup();
});

btnElementAdd.addEventListener('click', () => {
  formAddCardValidator.removeInputErrors();
  popupAdd.openPopup()
});