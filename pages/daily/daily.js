//daily.js
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
  previewImage:function(e){
    var priview=[];
    priview.push(e.target.dataset.priviewimg);
    wx.previewImage({current: '',urls: priview})
  },
  onShareAppMessage: function () {
    return {
      title: '微工具pro—每日一句',
      path: '/pages/daily/daily',
      success: function(res) {},
      fail: function(res) {}
    }
  },
  playAudio:function(e){this.audioCtx.play();}
})