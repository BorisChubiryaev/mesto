import './index.css';
import { btnProfileEdit, btnElementAdd, templateHtml, elementsContainer, inputProfileName, inputProfileStatus } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator, selectorsCurrent } from '../components/FormValidator.js';
import { initialCards } from '../components/initialCards.js';
import section from '../components/section.js';
import popupForm from '../components/popupForm.js';
import popupPicture from '../components/popupPicture.js';
import userInf from '../components/userInf.js';

function createCard(item){
  const card = new Card(item, templateHtml, { handleCardClick: () => {
    PopupPicture.openPopup(card);
    }
  });
  const cardElement = card.createCard();
  return cardElement;
}

const defaultCardList = new section({
    data: initialCards,
    renderer: (item) => {defaultCardList.addItem(createCard(item))}
  },
  elementsContainer
);
defaultCardList.renderElements();

const userInfo = new userInf({
  name: '.profile__name',
  status:'.profile__status'
});
const PopupPicture = new popupPicture({ popupSelector: '.popup_picture' });
PopupPicture.setEventListeners();

const popupEdit = new popupForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (formData) => {
    userInfo.setuserInf({
      name: formData.inputProfileName,
      status: formData.inputProfileStatus
    });
    popupEdit.closePopup();
  }
});
popupEdit.setEventListeners();

const popupAdd = new popupForm({
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
  if (userInfo.getuserInf()) {
    inputProfileName.value = userInfo.getuserInf().name;
    inputProfileStatus.value = userInfo.getuserInf().status;
  }
  popupEdit.openPopup();
});

btnElementAdd.addEventListener('click', () => {
  formAddCardValidator.removeInputErrors();
  popupAdd.openPopup()
});