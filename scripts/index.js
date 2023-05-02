//переменные profile
const profileButton = document.querySelector('.profile__button');
const popupProfile = document.querySelector('.popup_type_profile');
const closeButtonProfilePopup = popupProfile.querySelector('.popup__button-close');
const nameProfile = document.querySelector('#name');
const jobProfile = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const profileButtonAdd = document.querySelector('.profile__button-add');
const popupCard = document.querySelector(".popup_type-card");
const cardCloseButton = popupCard.querySelector('.popup__button-close');
const popupImage = document.querySelector('.popup_type_image');
const imageCloseButton = popupImage.querySelector('.popup__button-close');
const zoomSrc = popupImage.querySelector('.popup__zoom-image');
const zoomFigCaption = popupImage.querySelector('.popup__figure-caption');

// переменные cards
const itemTemplate = document.querySelector('#item-template');
const cardsContainer = document.querySelector(".elements__list");
const formCard = popupCard.querySelector('.popup__form-card');
const cardFormButton = popupCard.querySelector(".popup__button-submit_type-card");
const cardNameInput = document.querySelector("#cardName");
const formInputSrc = document.querySelector('#cardSrc');

// перебор массива
initialCards.forEach(renderItem)
// функция вставить карточку
function renderItem(cardData) {
  // Находим нужный template, ему будем соответствовать
  const template = document.querySelector('#item-template');
  // Клонируем содержимое template
  const templateContent = template.content.cloneNode(true);
  // Находим блоки, куда будем вставлять данные
  const itemTitle = templateContent.querySelector('.elements__item-title');
  const itemImage = templateContent.querySelector('.elements__item-image');
  // Наполняем блоки данных
  itemTitle.textContent = cardData.name;
  itemImage.src = cardData.link;
  itemImage.alt = cardData.name;
  // Находим родительский элемент списка и добавляем в него новый элемент
  const elementsList = document.querySelector('.elements__list');
  elementsList.prepend(templateContent);
}

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: formInputSrc.value
  }
  renderItem(newCard);
  toggleClosePopupCard();
  cardNameInput.value = '';
  formInputSrc.value = '';
}

formCard.addEventListener('submit', handleCardFormSubmit);

//функции like, zoom, delete
function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__item-image');
  const cardTitle = cardElement.querySelector('.elements__item-title');
  const cardLikeButton = cardElement.querySelector('.elements__item-like');
  const cardDeleteButton = cardElement.querySelector('.elements__trash-button');
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  
  // добавляем обработчик события на клик по изображению
  cardImage.addEventListener('click', function() {
    zoomImage(cardImage);
  });
  
  cardLikeButton.addEventListener('click', function() {
    toggleLike(cardLikeButton);
  });
  
  cardDeleteButton.addEventListener('click', function() {
    cardDelete(cardDeleteButton);
  });
  
  return cardElement;
}
 

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
  cardsContainer.removeChild(card);
}

// Открытие popup-profile и внесение данных
const toggleOpenPopup = () => {
  popupProfile.classList.add('popup__opened');
  nameProfile.value = profileName.textContent;
  jobProfile.value = profileText.textContent;
}

// Закрытие popup card
const toggleClosePopupCard = () => {
  popupCard.classList.remove('popup__opened');
}

const toggleClosePopupImage = () => {
  popupImage.classList.remove('popup__opened');
}

// закртыие popup profile
const toggleClosePopup = () => {
  popupProfile.classList.remove('popup__opened');
}

// функция добавления popup-card
const buttonOpenCard = () => {
  popupCard.classList.add('popup__opened');
}

// функция закрытия popup-card 
const buttonCloseCard = () => {
  popupCard.classList.remove('popup__opened');
}

// функция формы
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameProfile.value;
  profileText.textContent = jobProfile.value;
  toggleClosePopup();
}

// слушатели
profileButton.addEventListener('click', toggleOpenPopup);
closeButtonProfilePopup.addEventListener('click', toggleClosePopup);
profileButtonAdd.addEventListener('click', buttonOpenCard);
cardCloseButton.addEventListener('click', buttonCloseCard);
imageCloseButton.addEventListener('click', toggleClosePopupImage);