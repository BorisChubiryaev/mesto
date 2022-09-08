export default class UserInfo{
  constructor(dataSelector){
    this._userNameSelector = dataSelector.name;
    this._userName = document.querySelector(this._userNameSelector);
    this._userStatusSelector = dataSelector.status;
    this._userStatus = document.querySelector(this._userStatusSelector);
  }

  getUserInfo(){
    this._userData = {name: this._userName.textContent, status: this._userStatus.textContent};
    return this._userData;
  }

  setUserInfo(data){
    this._userName.textContent = data.name;
    this._userStatus.textContent = data.status;
  }
}