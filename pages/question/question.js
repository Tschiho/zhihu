// pages/question/question.js
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    totalCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getData()

    setTimeout(() => {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '加载成功',
        icon: 'success'
      })
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const res = util.getNext().data;    

    this.setData({
      list: this.data.list.concat(res),
      totalCount: this.data.list.length + res.length
    })
    
  },
  getData() {
    const res = util.getData2().data;

    this.setData({
      list: res,
      totalCount: res.length
    })
  }
})