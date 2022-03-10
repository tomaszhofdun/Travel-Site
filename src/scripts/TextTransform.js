class TextTransform {
  constructor() {
    this.target = document.querySelector('.featured-text')
    this.textLeft = document.querySelector('.featured-text__left')
    this.textRight = document.querySelector('.featured-text__right')
    this.events()
  }

  events() {
    let options = {
      rootMargin: '150px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) return this.scrollListener(true)
        return this.scrollListener(false)

      });
    }, options);

    observer.observe(this.target);
  }

  scrollListener(listen) {
    if (listen) return window.addEventListener('scroll', this.moveText)
    return window.removeEventListener('scroll', this.moveText)
  }

  moveText = () => {
    let browserHeight = window.innerHeight
    this.docHeight = document.documentElement.offsetHeight;
    this.scrolled = window.scrollY / (this.docHeight - browserHeight)

    const value = this.scrolled * 400

    this.textLeft.style.transform = 'translateX(' + value + 'px)';
    this.textRight.style.transform = 'translateX(-' + value + 'px)';
  }

}

export default TextTransform