const pictureOne = new URL('../images/1.jpg', import.meta.url);
const pictureTwo = new URL('../images/2.jpg', import.meta.url);
const pictureThree = new URL('../images/3.jpg', import.meta.url);
const pictureFour = new URL('../images/4.jpg', import.meta.url);
const pictureFive = new URL('../images/5.jpg', import.meta.url);
const pictureSix = new URL('../images/6.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Старый дом',
    link: pictureOne,
    alt: 'Старый кирпичный дом'
  },
  {
    name: 'Закат в поле',
    link: pictureTwo,
    alt: 'Закат в поле'
  },
  {
    name: 'Лес и горы',
    link: pictureThree,
    alt: 'Лес и горы'
  },
  {
    name: 'Закат в поле',
    link: pictureFour,
    alt: 'Закат в поле'
  },
  {
    name: 'Лес и горы',
    link: pictureFive,
    alt: 'Лес и горы'
  },
  {
    name: 'Старый дом',
    link: pictureSix,
    alt: 'Старый дом'
  }
];