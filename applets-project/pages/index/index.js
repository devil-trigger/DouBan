
Page({
    data: {
        searchBtn:`width:100%`,
        filmData:{},
        active: 0,//tab

    },
// 生命周期函数--监听页面加载
    onLoad: function (options) {
        this.getData('weekly').then(res=>{console.log(res)})
    },
    getData(parameter){//数据
        return new Promise((resolve,reject)=>{
            let datajson={
                url: `http://localhost:2080/v2/movie/${parameter}`,
                data: {
                    apikey:'0b2bdeda43b5688921839c8ecb20399b'
                },
                header: {'content-type': 'json'},
                success (res) {
                    resolve(res)
                },
                fail(err){
                    reject(err)
                }
              }
            wx.request(datajson)
        })
        
    },
    onChange(event) {//标签页切换
        // wx.showToast({
        //   title: `切换到标签 ${event.detail.name}`,
        //   icon: 'none',
        // });
    },
    toSearchPage(){//进入搜索
        wx.navigateTo({
          url: '/pages/Subpage/SearchFilm/SearchFilm',
        })
    },
// 生命周期函数--监听页面初次渲染完成
    onReady: function () {

    },
// 生命周期函数--监听页面显示
    onShow: function () {

    },
// 生命周期函数--监听页面隐藏
    onHide: function () {

    },
// 生命周期函数--监听页面卸载
    onUnload: function () {},
// 页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh: function () { },
// 页面上拉触底事件的处理函数
    onReachBottom: function () { },
// 用户点击右上角分享
    onShareAppMessage: function () {}
})