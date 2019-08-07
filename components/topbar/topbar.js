// components/topbar/topbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTab: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentNavtab: '0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e) {
      const idx = e.target.dataset.idx

      this.setData({
        currentNavtab: idx
      })
     
      this.triggerEvent('changeTab', { index: idx }, {})
    }
  }
})
