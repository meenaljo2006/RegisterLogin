let regBtn = document.querySelector('.register');
regBtn.addEventListener('click', function() {
    window.open('register.html', '_blank');
});

let loginBtn = document.querySelector('.login');
loginBtn.addEventListener('click', function() {
    window.open('login.html', '_blank');
});


function getQueryName(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const userName = getQueryName('name');

if (userName) {
  const initials = userName.split(' ').map(word => word[0]).join('').toUpperCase();
  const buttonContainer = document.querySelector('.buttons');

  if (buttonContainer) {
    buttonContainer.innerHTML = `
      <div class="user-icon">${initials}</div>
      <i class="fa-solid fa-right-from-bracket logout" onclick="logout()"></i>`;
  }

  const greeting = document.querySelector('.heading');
  greeting.innerHTML = `<h2 class="heading">Welcome ${userName}</h2>`

}

function logout() {
  window.location.href = 'dashboard.html';
}
