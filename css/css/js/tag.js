const colors = {
    p: '#388e3c',
    div: '#1976d2',
    span: '#fbc02d',
    section: '#7b1fa2',
    ul: '#f57c00',
    ol: '#d32f2f',
    Header: '#00796b',
    nav: '#512da8',
    main: '#c2185b',
    footer: '#303f9f',
    form: '#cddc39',
    body: '#455a64',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
  const tagName = elemento.tagName.toLowerCase()

  elemento.style.borderColor = colors.get(tagName)

  if (!elemento.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.style.backgroundColor = colors.get(tagName)
    label.innerHTML = tagName
    elemento.insertBefore(label, elemento.childNodes[0])
  }
})