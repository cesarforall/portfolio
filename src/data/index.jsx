import todoMachinePNG from '../assets/todo-machine.png'
import onlineShopPNG from '../assets/online-shop.png'

export const PROJECTS = [
  {
    name: 'Online Shop',
    description: 'Online shop demo with filters and checkout',
    imgLink: onlineShopPNG,
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    appLink: 'https://glowing-souffle-dc41d6.netlify.app',
    repoLink: 'https://github.com/cesarforall/online-shop'
  },
  {
    name: 'TODO Machine',
    description: 'Web app to manage tasks',
    imgLink: todoMachinePNG,
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    appLink: 'https://cesarforall.github.io/todo-machine',
    repoLink: 'https://github.com/cesarforall/todo-machine'
  }
]
