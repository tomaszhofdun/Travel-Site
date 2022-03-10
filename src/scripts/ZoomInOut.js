class ZoomInOut {
  constructor() {
    this.picture = document.querySelector('.featured-banner__img')
    this.container = document.querySelector('.featured-banner')
    this.events()
  }

  events() {
    window.addEventListener('scroll', () => {
      const scrolled = this.calulateIfScrolledTo()
      scrolled && this.zoomInOut()
    })
  }

  calulateIfScrolledTo() {
    let browserHeight = window.innerHeight
    this.docHeight = document.documentElement.offsetHeight;
    this.scrolled = window.scrollY / (this.docHeight - browserHeight)
    this.howFarFromTop = this.container.getBoundingClientRect().top
    this.scrollPercent = this.howFarFromTop / browserHeight * 100

    if (this.scrollPercent < 70 && this.scrollPercent > 0) {
      return true
    }
  }

  zoomInOut() {
    var transformValue = 'scale(' + (this.scrolled + 0.53) + ')';
    this.picture.style.transform = transformValue
  }

}

export default ZoomInOut