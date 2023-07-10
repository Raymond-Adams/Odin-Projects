const addBtn = document.querySelector('.header-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const toggleModal = () => {
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
};

addBtn.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);
