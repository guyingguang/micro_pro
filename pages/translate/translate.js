//translate.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    translateValue:'',
    columnShow:{phoneticShow:false,explainsShow:false,translationShow:false,webShow:false,show:false},
    youdao:{url:"https://fanyi.youdao.com/openapi.do?",keyfrom:"xiaotools",key:"357787044",type:"data",doctype:"json",callback:"show",version:"1.1",q:""},
    translations:{},
  },

  onLoad: function () {
  },

  onReady:function(){
    wx.setNavigationBarTitle({title: '词典',success: function(res) {}})
  },

  translate:function(){
    if(this.data.translateValue==""){return;}
      var that = this;
      var url=this.data.youdao.url;
      url+="keyfrom="+this.data.youdao.keyfrom;
      url+="&key="+this.data.youdao.key;
      url+="&type="+this.data.youdao.type;
      url+="&doctype="+this.data.youdao.doctype;
      url+="&version="+this.data.youdao.version;
      url+="&q="+this.data.translateValue;
    wx.request({
          url: url,
          method: 'GET', 
          success: function(res){
              console.log(res.data);
              var columnShow={show:false,phoneticShow:false,explainsShow:false,translationShow:false,webShow:false};
              if(res.data!="no query"){columnShow.show=true;}
              if(res.data.basic!=undefined){
                if(util.isEmpty(res.data.basic.phonetic)){columnShow.phoneticShow=true;}
                if(util.isEmpty(res.data.basic.explains)){columnShow.explainsShow=true;}
              }
              if(util.isEmpty(res.data.translation)){columnShow.translationShow=true;}
              if(util.isEmpty(res.data.web)){columnShow.webShow=true;}

              // var history={searchText:res.data.query,explains:res.data.basic.explains[0]},historyInfo=[];
              // historyInfo.push(history);
              // console.log(historyInfo);
            
            that.setData({
                translations:res.data,
                columnShow:columnShow,
                historyShow: false
                
            })
          },
          fail: function() {},
          complete: function() {}
        })
  },
  
  translateText:function(e){this.setData({translateValue: e.detail.value})},

  //textFocus:function(){this.setData({historyShow: true})},

  //todo
  closeHistory:function(){this.setData({historyShow: false})},

  closeHis:function(){
    this.setData({
      'columnShow.show':false,
      everydayShow:true,
      powerName:'金山词霸'
    })
  },

  onShareAppMessage: function () {
    return {
      title: '微工具pro',
      path: '/pages/translate/translate',
      success: function(res) {},
      fail: function(res) {}
    }
  }
})