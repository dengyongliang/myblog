<template>
  <div class="contPhotography">
    <ul class="list clear" >
      <li class="oneImg" v-for="(item, index) in photoArray">
        <!-- Swiper start -->
        <div class="scroll" v-bind:data-idx="index" @click.stop="viewPhotograph($event)" v-bind:data-a="item.summary">
          <div class="wrap">
            <img v-lazy="item.imgs[0].src" alt="" />
            <div v-if="item.open" v-for="(imgs, idx) in item.imgs">
              <p v-if="idx==0" v-text="imgs.summary"></p>
              <img v-if="idx>0" v-lazy="imgs.src" alt="" />
              <p v-if="idx>0" v-text="imgs.summary"></p>
            </div>
            </div>
        </div>
        <div class="info">
          <h3>{{item.time}} <{{item.title}}></h3>
          <p v-text="item.summary"></p>
        </div>
      
      <!-- Swiper end -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Case',
  updated: function () {
    console.log('监听到了photography 更新完成')

    setTimeout(function () {
      window.swiperCont.resize.resizeHandler()
      window.swiperCont.resize.resizeHandler()
    }, 300)
  },
  data () {
    return {
      photoArray: []
    }
  },
  methods: {
    // 获取case数据
    getData: function () {
      this.$http.get('../../static/data/photography.js').then(
        function (res) {
          this.photoArray = eval('(' + res.bodyText + ')')
        }, function (res) {
          return []
        }
      )
    },
    // chick事件
    viewPhotograph: function (event) {
      // console.log($(event.currentTarget).data("a"))
      var $this = $(event.currentTarget)
      this.photoArray[$this.attr('data-idx')].open = true
      // 设置初始高度
      $(".scroll").each(function(){
        if(!$(this).hasClass("ok") && !$(this).hasClass("open")){
          let h = $(this).height()
          $(this).addClass("ok").attr("data-height",h).css("height",h+'px');
        }
      })
      if($this.hasClass("open")){
        var h = $this.attr("data-height")
        var h2 = $this.find(".wrap").height()
        var h3 = $('.swiper-slide-cont').height()
        window.swiperCont.slideTo(('-'+h2), 100, false)
        $this.removeClass("open").css("height",h+"px")
        //alert(h3-h2-237)
        
      }else{
        $this.addClass("open")
        setTimeout(function(){
          var h = $this.find(".wrap").height()
          $this.css("height",h+"px")
        },350)
      }

      setTimeout(function(){
        //window.swiperCont.resize.resizeHandler()
      },900)
    }
  },
  mounted: function () {
    try {
      window.swiperCont.slideTo(0, 300, false)
      $(".btnTop").hide()
    }
    catch(err) {
      console.log(err)
    }
    // 通过getData获取数据
    this.getData()
  },
  watch: {
    'caseArray': {
      handler: function (val, oldVal) {
        console.log('监听到了photography 数据变化')
      },
      deep: true
    }
  }
}
</script>