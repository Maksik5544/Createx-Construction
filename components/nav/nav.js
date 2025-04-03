(async () => {
  const headerHtml = await (await fetch('/html/nav.html')).text();
  const headerPlace = document.querySelector('#header-place');

  headerPlace.insertAdjacentHTML('afterend', headerHtml);
  headerPlace.remove();
})()