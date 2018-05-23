// pages/index/index.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comple: [
      {id:1,checked:false,context:'learn vue',suc:false},
      {id:2,checked:false,context:'learn react',suc:false},
    ],
    input: '',
    itemleft: 0,
  },
  check(e) {
    let  id = e.currentTarget.dataset.id;
    this.data.comple.some((item)=>{
      if(item.id == id){
          item.checked = true;
          item.suc = true;
          // return true;
          return true;
      }
    })
    this.setData({
      comple:this.data.comple
    })
  },
  add(e){
    this.data.comple.push({
      context: e.detail.value,
      checked:false,
      suc:false
    });
    this.setData({
      comple: this.data.comple
    })
    this.setData({input:''});
  },
  deleteAll(){
    this.data.comple = [];
    this.setData({
      comple: this.data.comple
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})