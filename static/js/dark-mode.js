// const darkThemeIconLink = "./static/media/dark-theme-icon.svg"
// const lightThemeIconLink = "./static/media/light-theme-icon.svg"
// const bootcampLogoLink = "./static/media/bootcamp-logo.svg"
// const bootcampDarkLogoLink = "./static/media/bootcamp-logo-dark-theme.svg"

const darkThemeIconLink = "https://lmkawakami.github.io/Makoto-Slides-Itau/static/media/dark-theme-icon.svg"
const lightThemeIconLink = "https://lmkawakami.github.io/Makoto-Slides-Itau/static/media/light-theme-icon.svg"
const bootcampLogoLink = "https://lmkawakami.github.io/Makoto-Slides-Itau/static/media/bootcamp-logo.svg"
const bootcampDarkLogoLink = "https://lmkawakami.github.io/Makoto-Slides-Itau/static/media/bootcamp-logo-dark-theme.svg"

let theme = 'light'
const changeTheme = ()=>{
  const newTheme = theme=='light'?'dark':'light'
  theme = newTheme
  applyTheme()
}

let themeButton, themeIcon, bootcampLogo, capa, trajeto, slides, trajetoCardsList

const getElements = ()=>{
  themeButton = document.getElementById("theme-button")
  themeIcon = document.getElementById("theme-icon")
  bootcampLogo = document.getElementById("bootcamp-logo")
  slides = [...document.getElementsByClassName("slide-normal")]
  capa = document.getElementsByClassName("capa")[0]
  trajeto = document.getElementsByClassName("trajeto")[0]
  trajetoCardsList = document.getElementById("trajeto-cards-list")
}

const applyTheme = ()=>{
  if(theme==='light'){
    capa.classList.remove("bg-black")
    bootcampLogo.src = bootcampLogoLink
    themeIcon.src = darkThemeIconLink

    trajeto.classList.remove("bg-trans-dark")
    trajetoCardsList.classList.remove("dark-steps")

    slides.forEach(slide => {
      slide.classList.remove("bg-trans-dark")
    });
  } else if(theme==='dark'){
    capa.classList.add("bg-black")
    bootcampLogo.src = bootcampDarkLogoLink
    themeIcon.src = lightThemeIconLink

    trajeto.classList.add("bg-trans-dark")
    trajetoCardsList.classList.add("dark-steps")

    slides.forEach(slide => {
      slide.classList.add("bg-trans-dark")
    });
  }
  
}

const main = () => {
  theme = 'light'
  
  getElements()
  themeButton.addEventListener('click', () => changeTheme())

  applyTheme()
}

main()