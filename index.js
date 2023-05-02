const theme = document.getElementById("theme")
const value = theme.value
const lightBlue = document.getElementById ("lightblue")
const lightGold = document.getElementById("lightgold")

theme.addEventListener("change", themeCheck)

function themeCheck(event) {
  const currentTheme = event.target.value 
  console.log(currentTheme)
  changeTheme(currentTheme)
}
function changeTheme(color) {
  console.log(changeTheme)
  document.getElementsByTagName('body')[0].style.backgroundImage = 'url(photo/' + color + '.jpg)';
}

/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js');
}*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js', {scope: './about'})
  
  .then(function (registration) {
  console.log('Registration of service worker successful with scope: ',
  registration.scope);

  }).catch(function(err) {
  console.log('Registration of service worker failed with error: ', err);
  
  })} else {
  console.log('Service Worker is not supported by this browser');
}
