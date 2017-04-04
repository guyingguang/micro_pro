//daily.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    everyday:{},
  },

  onLoad: function () {

    var that = this;
    wx.request({
        url: "https://open.iciba.com/dsapi",
        method: 'GET', 
        success: function(res){that.setData({everyday:res.data})},
        fail: function() {},
        complete: function() {}
    }) 
  },

  onReady:function(){
    wx.setNavigationBarTitle({title: '每日一句',success: function(res) {}})
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  playAudio:function(e){this.audioCtx.play();},

  onShareAppMessage: function () {
    return {
      title: '微工具pro',
      path: '/pages/translate/translate',
      success: function(res) {},
      fail: function(res) {}
    }
  }
})