const btnDarkMode = document.querySelector('.dark-mode-btn');

// Проверка темы в локал стордж

if  (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} 

// Включение темной темы по кнопке

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light')
  }
}
