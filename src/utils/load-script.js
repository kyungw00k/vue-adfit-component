export default function loadScript (url) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.async = true

    script.onload = function () {
      document.head.removeChild(script)
      resolve()
    }

    script.onerror = function () {
      document.head.removeChild(script)
      reject()
    }

    script.src = url

    document.head.appendChild(script)
  })
}
