function createModal({
  bodyText,
  titleText,
  acceptText,
  closeText,
  callback = () => { },
  acceptCallback = () => { },
  rejectCallback = () => { },
}) {
  const modal = document.createElement('div')
  const dialog = document.createElement('div')
  const content = document.createElement('div')
  const header = document.createElement('div')
  const title = document.createElement('h5')
  const headerCloseButton = document.createElement('button')
  const body = document.createElement('div')
  const bodyContent = document.createElement('p')
  const footer = document.createElement('div')
  const footerCloseButton = document.createElement('button')
  const footerAcceptButton = document.createElement('button')
  callback({ modal, dialog, content, header, title, headerCloseButton, body, bodyContent, footer, footerAcceptButton, footerCloseButton })

  const id = `modal-${new Date().getTime()}`

  const closeModal = function (event) {
    document.querySelector(`#${id}`).remove()
  }
  const acceptEvent = function (event) {
    closeModal(event)
    acceptCallback()
  }
  const rejectEvent = function (event) {
    closeModal(event)
    rejectCallback()
  }

  footerAcceptButton.id = 'modal-btn-accept'
  footerAcceptButton.innerHTML = acceptText
  footerAcceptButton.addEventListener('click', acceptEvent)

  footerCloseButton.id = 'modal-btn-close'
  footerCloseButton.innerHTML = closeText
  footerCloseButton.addEventListener('click', rejectEvent)

  footer.classList.add('modal-footer')
  footer.append(footerAcceptButton, footerCloseButton)

  bodyContent.innerHTML = bodyText

  body.classList.add('modal-body')
  body.append(bodyContent)

  headerCloseButton.innerHTML = '&times;'
  headerCloseButton.classList.add('modal-btn-close')
  headerCloseButton.addEventListener('click', closeModal)

  title.innerHTML = titleText

  header.classList.add('modal-header')
  header.append(title, headerCloseButton)

  content.append(header)

  dialog.classList.add('modal-dialog')
  dialog.append(content, body, footer)
  dialog.tabIndex = 1

  modal.append(dialog)
  modal.id = id
  modal.classList.add('modal')
  modal.tabIndex = -1

  document.body.append(modal)
}