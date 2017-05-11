Page({

    onLoad:function(){
        const ctx=wx.createCanvasContext('myCanvas');
        ctx.setFillStyle('red');
        ctx.fillRect(0,0,150,75);
        ctx.draw()
    },
    onReady:function(){
        wx.setNavigationBarTitle({title: 'canvas',success: function(res) {}})
    }
})