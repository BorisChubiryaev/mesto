export default class userInf{
  constructor(dataSelector){
    this._userNameSelector = dataSelector.name;
    this._userName = document.querySelector(this._userNameSelector);
    this._userStatusSelector = dataSelector.status;
    this._userStatus = document.querySelector(this._userStatusSelector);
  }

  getuserInf(){
    this._userData = {name: this._userName.textContent, status: this._userStatus.textContent};
    return this._userData;
  }

  setuserInf(data){
    this._userName.textContent = data.name;
    this._userStatus.textContent = data.status;
  }
}