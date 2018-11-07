"use strict"
const TITLE = `DengYongliang' Blog`
const HOME_IMG_SRC = 'static/img/bg_'+Math.ceil(Math.random() * 5)+'.png'
var setBgImgAndDelCover = () => {
  if( $('.contHome').length ){
    var _domBg = document.getElementById('bgHome')
    _domBg.style.background = 'url('+HOME_IMG_SRC+')'
    _domBg.style.backgroundRepeat = 'no-repeat'
    _domBg.style.backgroundSize = '100% 100%'
  }
  setTimeout(function () {
    $('#load').addClass('fadeOutDown')
    window.swiperCont.resize.resizeHandler()
  }, 1000)
}
var scrollTopEv = () => {
  try {
    window.swiperCont.slideTo(0, 100, false)
    $(".btnTop").hide()
  }
  catch(err) {
    console.log(err)
  }
}
export default
{
  TITLE,
  HOME_IMG_SRC,
  setBgImgAndDelCover,
  scrollTopEv
}