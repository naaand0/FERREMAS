const product = [

    {
        id: 1,
        image: 'image/ssss',
        title: 'ALICATE BOCA PLANA LARGA 6 BAHCO 2421 G-160 BAHCO',
        price: '$23.130',

    },
    {
        id: 1,
        image: 'image/',
        title: 'ALICATE BOCA PLANA LARGA 6 BAHCO 2421 G-160 BAHCO',
        price: '$23.130',

    },
    {
        id: 1,
        image: 'image/',
        title: 'ALICATE BOCA PLANA LARGA 6 BAHCO 2421 G-160 BAHCO',
        price: '$23.130',

    },
]
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Usted se ha subscrito correctamente', 'success')
  })
}
