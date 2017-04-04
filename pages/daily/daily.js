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
        success: function(res){console.log(res.data);that.setData({everyday:res.data})},
        fail: function() {},
        complete: function() {}
    }) 
  },

  onReady:function(){
    wx.setNavigationBarTitle({title: '每日一句',success: function(res) {}})
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  previewImage:function(e){
    console.log(e);
    console.log(e.target.dataset.priviewimg);
    var priview=[];
    priview.push(e.target.dataset.priviewimg);
    console.log(priview);
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: priview // 需要预览的图片http链接列表
    })
  },

  playAudio:function(e){this.audioCtx.play();},

  onShareAppMessage: function () {
    return {
      title: '微工具pro',
      path: '/pages/daily/daily',
      success: function(res) {},
      fail: function(res) {}
    }
  }
})