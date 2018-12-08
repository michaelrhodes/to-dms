module.exports = dms

function dms (lat, lon) {
  return fmt(lat, 1) + ' ' + fmt(lon)
}

function fmt (val, lat) {
  var deg = Math.abs(val)
  var min = (deg - ~~deg) * 60
  var sec = (min - ~~min) * 60
  var dir = val >= 0 ?
    (lat ? 'N' : 'E') :
    (lat ? 'S' : 'W')

  return ~~deg + '°' +
    ~~min + '′' +
    +sec.toFixed(1) + '″' +
    dir
}
