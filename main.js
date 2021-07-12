const app = () => {
  const navEl = document.getElementsByClassName('left')[0];
  let navOpened = true;
  const toggleNav = () => {
    const textEls = document.querySelectorAll('.left span')
    const arrowEls = document.querySelectorAll('.left .arrow')
    if(navOpened) {
      navEl.style.width = '60px';
      navOpened = false;
      textEls.forEach(textEl => {
        textEl.classList.add('hide')
      })
      arrowEls.forEach(arrowEl => {
        arrowEl.classList.add('hide')
      })
    } else {
      navEl.style.width = '200px';
      navOpened = true;
      textEls.forEach(textEl => {
        textEl.classList.remove('hide')
      })
      arrowEls.forEach(arrowEl => {
        arrowEl.classList.remove('hide')
      })
    }
  }

  // the icon which can collapse navigation on the left page
  const dedentIcon = document.getElementsByClassName('dedent-icon')[0];
  dedentIcon.addEventListener('click', () => {
    toggleNav();
  })
}

app();