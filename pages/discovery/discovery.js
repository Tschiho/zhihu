// pages/discovery/discovery.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: '0',
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/521.jpg'
    ],
    list: [],
    totalCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     const res = util.getData2().data

     this.setData({
       list: res,
       totalCount: res.length
     })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading();

    const res = util.discoveryNext().data;

    setTimeout(() => {
      wx.hideNavigationBarLoading();

      this.setData({
        list: this.data.list.concat(res),
        totalCount: this.data.list.length + res.length
      })
    },1000)
  },

  changeTab(e){
     this.setData({
       currentNavtab: e.detail.index
     })
  }

})