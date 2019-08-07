//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    list: [],
    totalCount: 0
  },
  
  onLoad: function () {
    this.getData();
  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading()
    this.getData()
    
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000)
    
  },
  onReachBottom(){
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    const res = util.getNext().data;
    

    setTimeout(() => {
      this.setData({
        list: this.data.list.concat(res),
        totalCount: this.data.list.length + res.length
      })
      wx.hideLoading()
    }, 2000)
  },

  getData() {
    const res = util.getData2().data
    this.setData({
      list: res,
      totalCount: res.length
    })
  },
  todetail() {
    wx.navigateTo({
      url: '../answer/answer',
    })
  }
 
})
