//переменные profile
const profileButton = document.querySelector('.profile__button');
const popupProfile = document.querySelector('.popup_type_profile');
const closeButton = popupProfile.querySelector('.popup__button-close');
const nameProfile = document.querySelector('#name');
const jobProfile = document.querySelector('#job');

const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const profileButtonAdd = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup_type-card');
const cardCloseButton = popupCard.querySelector('.popup__button-close');
const popupImage = document.querySelector('.popup_type_image');
const imageCloseButton = popupImage.querySelector('.popup__button-close');
const zoomSrc = popupImage.querySelector('.popup__zoom-image');
const zoomFigCaption = popupImage.querySelector('.popup__figure-caption');


// переменные cards
const itemTemplate = document.querySelector(".item__template").content;
const list = document.querySelector(".elements__list");
const formCard = popupCard.querySelector('.popup__form-card');
const formButton = popupCard.querySelector(".popup__button-submit_type-card");
const formInput = document.querySelector("#cardName");
const formInputSrc = document.querySelector('#cardSrc');
// template cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
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
// перебор массива
initialCards.forEach(renderItem)
// функция вставить карточку
function renderItem (item) {
  list.insertAdjacentHTML('beforeend', `<li class="elements__item">
  <button
    class="elements__trash-button"
    type="button"
    title="delete"
  ></button>
  <img
    src="${item.link}"
    alt="${item.name}"
    class="elements__item-image"
  />
  <div class="elements__item-container">
    <h2 class="elements__item-title">${item.name}</h2>
      <button class="elements__item-like" type="button"></button>
    </div>
  </div>
  </li>`)
}
handleFormCard  = (evt) => {
  evt.preventDefault(); 
const newCard = {
  name: formInput.value,
  link: formInputSrc.value
}
renderItem(newCard);
  toggleClosePopupCard();
}
formCard.addEventListener('submit', handleFormCard);

//функции like, zoom, delete
list.addEventListener('click', function(e) { 
  // delete
  if (e.target.className === 'elements__trash-button') {
    cardDelete(e.target);
  }
  // like
  if (e.target.classList.contains('elements__item-like')) {
    toggleLike(e.target); 
  }
  //zoom 
  if(e.target.classList.contains('elements__item-image')) {
    zoomImage(e.target);
  }

});
// функция zoom
function zoomImage(e) {
  popupImage.classList.add('popup__opened');
  zoomSrc.src = e.src;
  zoomSrc.alt = e.alt;
  zoomFigCaption.textContent = e.alt;
}
// функция like
function toggleLike(el) {
  el.classList.toggle('elements__item-like_active');
}
// функция delete
function cardDelete(btn) {
  const card = btn.closest('.elements__item');
  list.removeChild(card);
}



// Открытие popup-profile и внесение данных
 toggleOpenPopup = () => {
    popupProfile.classList.add('popup__opened');
    nameProfile.value = profileName.textContent;
    jobProfile.value = profileText.textContent;
}
// Закрытие popup card
 toggleClosePopupCard = () => {
  popupCard.classList.remove('popup__opened');
}
toggleClosePopupImage = () => {
  popupImage.classList.remove('popup__opened');
}
// закртыие popup profile
toggleClosePopup = () => {
  popupProfile.classList.remove('popup__opened');
}
// функция добавления popup-card
buttonOpenCard = () => {
  popupCard.classList.add('popup__opened');
}
// функция закрытия popup-card 
buttonCloseCard = () => {
  popupCard.classList.remove('popup__opened');
}


// функция формы
handleFormSubmit  = (evt) => {
  evt.preventDefault(); 
  profileName.textContent = nameProfile.value;
  profileText.textContent = jobProfile.value;
  toggleClosePopup();
}

// слушатели
profileButton.addEventListener('click', toggleOpenPopup);
closeButton.addEventListener('click', toggleClosePopup);
profileButtonAdd.addEventListener('click', buttonOpenCard);
cardCloseButton.addEventListener('click', buttonCloseCard);
imageCloseButton.addEventListener('click', toggleClosePopupImage); 

