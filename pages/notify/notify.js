// pages/notify/notify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['通知','赞与感谢', '关注'],
    currentNavtab: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  changeTab(e) {
    this.setData({
      currentNavtab: e.detail.index
    })
  }
})