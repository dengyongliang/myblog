var HOME_IMG_SRC = 'static/img/bg_'+Math.ceil(Math.random() * 5)+'.png'
function setBgImgAndDelCover () {
  if( $('.contHome').length ){
    var _domBg = document.getElementById('bgHome')
    _domBg.style.background = 'url('+HOME_IMG_SRC+')'
    _domBg.style.backgroundRepeat = 'no-repeat'
    _domBg.style.backgroundSize = '100% 100%'
  }
  setTimeout(function () {
    $('#load').addClass('fadeOutDown')
    window.swiperCont.resize.resizeHandler()
  }, 3000)
}
export default
{
  HOME_IMG_SRC,
  setBgImgAndDelCover
}