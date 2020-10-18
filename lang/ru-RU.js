export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      aboutMeHead: 'Обо мне',
      basicSkilsHead: 'Базовые навыки',
      contactsHead: 'Контакты',
      resume: 'Резюме',
      moreDetails: 'Подробнее',
      source: 'Источник',
      blog: 'Блог',
      back: 'Назад',
      noFeed: 'Нет публикаций',
      services: 'Услуги',
      linksProjects: 'Ссылки на проекты',
      portfolio: 'Портфолио'
    })
  })
}
