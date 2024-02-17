function handleScroll() {
  const aboutText = document.querySelectorAll('mark')
  const numofPages = 2

  const opacityforBlock = (sectionProgress, blockNo) => {
    const progress = sectionProgress - blockNo
    if (progress == 0.5 || progress == 1.5) return 0.2
    return 1
  }
  aboutText.forEach((text) => {
    const textHeight = text.offsetHeight
    const fullH = window.innerHeight
    const halfH = fullH / 2
    const percentY = Math.min(
      textHeight + halfH,
      Math.max(-fullH, scrollY - text.offsetTop) + halfH) / textHeight
    const progress = Math.min(numofPages - 0.5, Math.max(0.5, percentY * numofPages))

    text.style.opacity = opacityforBlock(progress, 0)
  })
}

// Add scroll event listener
document.addEventListener('scroll', handleScroll);
