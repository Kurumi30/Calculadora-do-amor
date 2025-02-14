import Swal from 'sweetalert2'

export function getUrlInfo() {
  const params = new URLSearchParams(location.search)

  // if (!params || params.toString() === '') return {}

  const encodeParams = {
    to: params.get('to'),
    from: params.get('from'),
    message: params.get('message'),
  }

  const decodeParams = Object.entries(encodeParams).map(([key, value]) => {
    if (key === 'from' || key === 'message') return [key, base64(value, false)]

    return [key, value]
  })

  return {
    decodeParams: Object.fromEntries(decodeParams),
    encodeParams,
  }
}

export function showNotification({ to, from, message }) {
  const time = 1500

  setTimeout(() => {
    Swal.fire({
      position: 'center',
      title: `De: ${from} 💌<br> Para: ${to} 🌹`,
      html: `<strong>${message}</strong>`,
      iconHtml: '<img src="https://github.com/heryyy/relationship-web/blob/master/src/assets/mocha.gif?raw=true" alt="Ícone de casal" style="width: 75px; height: 75px;">',
      showConfirmButton: true,
      draggable: true,
      heightAuto: false,
    })
  }, time)
}

export function getRandomMessage() {
  const messages = [
    'Eu te amo! ❤',
    'Você é tudo para mim! ❤',
    'I love you! ❤',
  ]

  return messages[Math.floor(Math.random() * messages.length)]
}

export function base64(value, encode = true) {
  return encode
    ? btoa(
      String.fromCharCode(
        ...new TextEncoder().encode(value)
      )
    )
    : new TextDecoder()
      .decode(
        Uint8Array.from(
          atob(value), c => c.charCodeAt(0)
        )
      )
}
