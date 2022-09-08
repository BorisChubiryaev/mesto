export default class Popup {
    constructor( { popupSelector } ){
        this._popupSelector = popupSelector;
        this._popupItem = document.querySelector(this._popupSelector);
        this._btnClose = this._popupItem.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    _handleEscClose(evt) {
        if (evt.key==='Escape') {
        this.closePopup();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target === this._popupItem){
        this.closePopup();
        }
    }

    setEventListeners(){
        this._popupItem.addEventListener('click', this._handleOverlayClose.bind(this));
        this._btnClose.addEventListener('click', this.closePopup.bind(this));
    }

    openPopup() {
        this._popupItem.classList.add('popup_opened');
        window.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() {
        this._popupItem.classList.remove('popup_opened');
        window.removeEventListener('keydown', this._handleEscClose);
    }
}