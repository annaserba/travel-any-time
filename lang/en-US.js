export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      aboutMeHead: 'About me',
      basicSkilsHead: 'Basic skils',
      contactsHead: 'Contacts',
      resume: 'Resume',
      moreDetails: 'More details',
      source: 'Source',
      blog: 'Blog',
      back: 'Back',
      noFeed: 'No feed(s)',
      services: 'Services',
      linksProjects: 'Links projects',
      portfolio: 'Portfolio'
    })
  })
}
