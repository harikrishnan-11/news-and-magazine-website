const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');
const searchClose = document.getElementById('search-close');

const closeMobileNav = () => {
  mobileNav.classList.remove('open');
  document.body.classList.remove('menu-open');

  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.querySelector('i')?.classList.replace('fa-xmark', 'fa-bars');
};

const openMobileNav = () => {
  mobileNav.classList.add('open');
  document.body.classList.add('menu-open');

  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.querySelector('i')?.classList.replace('fa-bars', 'fa-xmark');
};

const toggleMobileNav = () => {
  if (mobileNav.classList.contains('open')) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
};

const closeSearchBar = () => {
  searchBar.classList.remove('open');
};

const toggleSearchBar = () => {
  const open = searchBar.classList.toggle('open');

  if (!open) {
    searchBar.querySelector('input')?.blur();
  }
};

menuToggle.addEventListener('click', (event) => {
  event.stopPropagation();

  if (window.innerWidth <= 1013) {
    toggleMobileNav();
  }
});

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1013) {
    closeMobileNav();
  }
});

window.addEventListener('click', (event) => {
  if (
    mobileNav.classList.contains('open') &&
    !mobileNav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMobileNav();
  }
});

if (searchBtn && searchClose) {
  searchBtn.addEventListener('click', toggleSearchBar);
  searchClose.addEventListener('click', closeSearchBar);
} 


document.querySelectorAll ('.news-card').forEach(card=>{
  card.addEventListener('click',()=>{
    window.location.href='./404.html ';
  });
})

document.querySelectorAll('.trending-item').forEach(trendItem=>{
  trendItem.addEventListener('click',()=>{
    window.location.href='./404.html'
  })
})