document.addEventListener('DOMContentLoaded', () => {
  // Popup login
  const loginBtn = document.getElementById('loginBtn');
  const loginPopup = document.getElementById('loginPopup');
  const closePopup = document.getElementById('closePopup');

  loginBtn.addEventListener('click', () => {
    loginPopup.classList.remove('hidden');
  });
  closePopup.addEventListener('click', () => {
    loginPopup.classList.add('hidden');
  });

  // Menu buttons
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      alert(`Bạn đã chọn: ${action}`);
    });
  });

  // Tìm kiếm
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  searchBtn.addEventListener('click', () => {
    alert(`Bạn tìm: ${searchInput.value}`);
  });

  // Chat box
  const chatBtn = document.getElementById('chatBtn');
  const chatBox = document.getElementById('chatBox');
  const closeChat = document.getElementById('closeChat');
  chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
  });
  closeChat.addEventListener('click', () => {
    chatBox.classList.add('hidden');
  });
});