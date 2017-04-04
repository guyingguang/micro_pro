//video.js
//获取应用实例
var app = getApp()
Page({
  data: {
    networkType:'',
    screenHieght:"",
    url:"https://200022661.vod.myqcloud.com/200022661_d7dc5290bb8811e695ff957a64bb4efc.f0.m4v"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
      var that=this;
      wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screenHieght:res.windowHeight
        })
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
      wx.getNetworkType({
        success: function(res) {
          that.setData({
              //networkType:res.networkType
          })
          console.log(res.networkType);
        }
      })
  },
  onReady:function(){
    wx.setNavigationBarTitle({title: '财富夜话：第七十六期',success: function(res) {}})
    this.mapCtx = wx.createMapContext('myMap');
  }
})
