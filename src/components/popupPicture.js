import popup from "./popup.js";

export default class popupPicture extends popup {
  constructor( { popupSelector } ) {
    super( { popupSelector} );
    this._popupItem = document.querySelector(popupSelector);
    this._popupImage = this._popupItem.querySelector('.popup__image');
    this._popupImageTitle = this._popupItem.querySelector('.popup__image-description');
  }
  openPopup(card) {
    this._popupImageTitle.textContent = card.name;
    this._popupImage.src = card.link;
    this._popupImage.alt = card.alt;
    super.openPopup();
  }
}