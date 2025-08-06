// navbar
function menuMobile() {
  const btn = document.querySelector('.bugger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');

  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav');
    });
  });
}

menuMobile();

// Portofolio

function tabsFilters() {
  const tabs = document.querySelectorAll('.Portofolio-filter a');
  const projets = document.querySelectorAll('.Portofolio .card');

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }

  const showProjets = (elem) => {
    console.log(elem)
    projets.forEach(projet => {
      let filter = projet.getAttribute('data-category');

      if (elem === 'all') {
        projet.parentNode.classList.remove('hide');
        return
      }

      if (filter !== elem) {
        projet.parentNode.classList.add('hide');
      } else {
        projet.parentNode.classList.remove('hide');
      }
    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let filter = elem.getAttribute("data-filter");
      showProjets(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  })


}

tabsFilters()

function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modal = document.querySelector('.modal');

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(`[id="${elem.dataset.id}]`).classList.add('show');
    });
  });
}

showProjectDetails()