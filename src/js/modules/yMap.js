const point = [55.169650, 61.379000]
const center = [55.169650, 61.377000]

function init () {
  const map = new ymaps.Map('map', {
    center,
    zoom: 15
  })

  const placemark = new ymaps.Placemark(point, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/address-svgrepo-com.svg',
    iconImageSize: [50, 50],
    iconImageOffset: [-19, -44]
  })

  map.controls.remove('geolocationControl') // удаляем геолокацию
  map.controls.remove('searchControl') // удаляем поиск
  map.controls.remove('trafficControl') // удаляем контроль трафика
  map.controls.remove('typeSelector') // удаляем тип
  map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl') // удаляем контрол зуммирования
  map.controls.remove('rulerControl') // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark)
}

ymaps.ready(init)
