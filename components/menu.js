import { routes, menus as routeMenus } from '../constant/routes.js';

const onNavigate = pathname => {
  const contentDiv = document.getElementById('content');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  contentDiv.innerHTML = routes[pathname]
}

const getMenuEls = () => {
  let menuEls = ''

  routeMenus.forEach(menu => {
    let childrenEls = ''
    menuEls += `<li class="menu-item"><i class="${menu.icon}"></i><span>${menu.label}</span><i class="fal fa-chevron-down arrow"></i></li>`
    if (menu.children && Array.isArray(menu.children) && menu.children.length > 0) {
      menu.children.forEach(child => {
        childrenEls += `<li class="menu-item child-menu-item" pathname="${child.key}"><span>${child.name}</span></li>`
      })
      menuEls += `<ul>${childrenEls}</ul>`
    }
  })

  return menuEls;
}

const setRouterEvents = () => {
  const childMenus = document.querySelectorAll('.left>.menu .child-menu-item')
  childMenus.forEach(menuEl => {
    menuEl.addEventListener('click', () => {
      const pathname = menuEl.getAttribute('pathname');
      onNavigate(pathname)
    })
  })
}

const menu = () => {

  const menuElWrapper = document.getElementsByClassName('menu')[0]
  menuElWrapper.innerHTML += `<ul>${getMenuEls()}</ul>`

  const menus = document.querySelectorAll('.left>.menu .menu-item')
  menus.forEach(menuEl => {
    menuEl.addEventListener('click', () => {
      menuEl.classList.toggle('toggled')
    })
  })
  setRouterEvents()
}

menu();