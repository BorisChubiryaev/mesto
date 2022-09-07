import popup from "./popup.js";

export default class popupForm extends popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this.handleFormSubmit = handleFormSubmit;
    this._inputList = this.form.querySelectorAll('.form__input');
  }

  _getInputValues(){
      this._formValues = {};
      this._inputList.forEach(input => {
        this._formValues[input.name] = input.value;
      });
      return this._formValues;
    }

  setEventListeners(){
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this._getInputValues());
    })
  }

  closePopup(){
    this.form.reset();
    super.closePopup();
  }
}
