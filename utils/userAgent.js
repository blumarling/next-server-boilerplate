export const checkIE = (ua) => {
  let version
  let msie
  let trident
  let edge

  msie = ua.indexOf("MSIE ")
  if (msie > 0) {
    version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10)
    return "ie" + version
  }

  trident = ua.indexOf("Trident/")
  if (trident > 0) {
    var _rv = ua.indexOf("rv:")
    version = parseInt(ua.substring(_rv + 3, ua.indexOf(".", _rv)), 10)
    return "ie" + version
  }

  edge = ua.indexOf("Edge/")
  if (edge > 0) {
    version = parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10)
    return "edge" + version
  }

  // return 'ie11';
  return "not-ie"
}

export const checkUserAgent = ua => {
  if (!ua) return ""

  let userAgent = ""

  if (/iPad|iPhone|iPod/.test(ua)) {
    userAgent += "iOS "
  }

  if (ua.toLowerCase().indexOf("firefox") > -1) {
    userAgent += "firefox "
  }

  if (/windows phone/i.test(ua)) {
    userAgent += "Windows-Phone "
  }

  if (/android/i.test(ua)) {
    userAgent += "Android "
  }

  userAgent += checkIe(ua)

  return userAgent
}