$(function () {
  Siren.AH()
  Siren.PE()
  Siren.NH()
  Siren.GT()
  Siren.XLS()
  Siren.XCS()
  Siren.XCP()
  Siren.CE()
  Siren.MN()
  Siren.IA()
  Siren.LV()
  if (window.is_app) injectStyles('#nprogress .bar { display: none; }')
  if (Poi.pjax) {
    $(document).pjax('a[target!=_top]', '#page', {
      fragment: '#page',
      timeout: 8000
    }).on('pjax:send', function () {
      $('#bar').css('width', '0%')
      if (mashiro_option.NProgressON) NProgress.start()
      Siren.MNH()
    }).on('pjax:complete', function () {
      Siren.AH()
      Siren.PE()
      Siren.CE()
      Siren.VA()
      Siren.MJ()
      Siren.AB()
      Siren.TOC()
      Siren.BSZ()
      if (mashiro_option.NProgressON) NProgress.done()
      mashiro_global.ini.pjax()
      $('#loading').fadeOut(500)
      if (Poi.codelamp == 'open') {
        self.Prism.highlightAll(event)
      };
      if ($('.ds-thread').length > 0) {
        if (typeof DUOSHUO !== 'undefined') {
          DUOSHUO.EmbedThread('.ds-thread')
        } else {
          $.getScript('//static.duoshuo.com/embed.js')
        }
      }
    }).on('submit', '.search-form,.s-search', function (event) {
      event.preventDefault()
      $.pjax.submit(event, '#page', {
        fragment: '#page',
        timeout: 8000
      })
      if ($('.js-search.is-visible').length > 0) {
        $('.js-toggle-search').toggleClass('is-active')
        $('.js-search').toggleClass('is-visible')
      }
    })
    mashiro_global.lib.pjax_to_url = function (url, ele) {
      $.pjax({
        url: url,
        container: ele,
        fragment: ele,
        timeout: 8000
      })
    }
    window.addEventListener('popstate', function (e) {
      Siren.AH()
      Siren.PE()
      Siren.CE()
      timeSeriesReload(true)
    }, false)
  }
})