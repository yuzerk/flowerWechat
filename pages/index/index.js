const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
const typeEnum = require('../../utils/enum.js')

//获取应用实例
const app = getApp()
Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics1:{},
    topics2:{},
    topics3:{},
    skill: [],
    group:[],
    brands: [],
    floorGoods: [],
    // 滑动栏属性
    banner: [],
    // 这个参数在wxml中没有被使用
    channel: [],
    // 查询一共有多少种商品
    goodsCount: 0
  },
  onShareAppMessage: function () {
    return {
      title: '51Shop',
      desc: '51商城',
      path: '/pages/index/index'
    }
  },
  onPullDownRefresh() {
    // 增加下拉刷新数据的功能
    var self = this;
    self.getIndexData();
  },
  filterTopic: function (topic) {
    topic['imgUrl'] = topic['picList'][0]
    return topic;
  },
  getIndexData: function () {
    let that = this;
    var data = new Object();
    // 获取新品view 的商品信息
    util.request(api.IndexUrlNewGoods, {limit: 10, page: 1}).then(function (res) {
      if (res.code === 200) {
        data.newGoods = res.data
        for (var g of data.newGoods) {
          g = that.filterTopic(g)
        }
        that.setData(data);
      }
    });
    // // 获取热点商品的 商品信息
    // util.request(api.IndexUrlHotGoods).then(function (res) {
    //   if (res.code === 200) {
    //     data.hotGoods = res.data.hotGoodsList
    //     that.setData(data);
    //   }
    // });
    // 获取专题view的三个商品的信息
    util.request(api.IndexUrlTopic, { type: typeEnum.subjectEnum.中部主题.type }).then(function (res) {
      if (res.code === 200) {
        if (res.data.length < 3) {
            //TODO 报错
        }
        data.topics1 = that.filterTopic(res.data[0])
        data.topics2 = that.filterTopic(res.data[1])
        data.topics3 = that.filterTopic(res.data[2])
        that.setData(data);
      }
    });
    // //秒杀产品
    // util.request(api.KillList,{page: 1,size:3}).then(function (res) {
    //   if (res.code === 200) {
    //     data.skill = res.data.data
    //     that.setData(data); 
    //   }
    // });
    // //团购产品
    // util.request(api.GroupList,{ page: 1, size: 3 }).then(function (res) {
    //   if (res.code === 200) {
    //     data.group = res.data.data
    //     that.setData(data);
    //   }
    // });
    // 请求最底部有多少种分类产品
    // util.request(api.IndexUrlCategory).then(function (res) {
    //   if (res.code === 200) {
    //     data.floorGoods = res.data.categoryList
    //     that.setData(data);
    //   }
    // });
    // 请求主页面滚动页面的相关信息
    util.request(api.IndexUrlBanner, { type: typeEnum.subjectEnum.头部主题.type}).then(function (res) {
      if (res.code === 200) {
        data.banner = res.data
        for (var t of data.banner) {
          t = that.filterTopic(t);
        }
        that.setData(data);
      }
    });
    // 这个url的返回的参数没有被使用, 暂时不知道使用用途，疑似渠道
    // util.request(api.IndexUrlChannel).then(function (res) {
    //   if (res.code === 200) {
    //     data.channel = res.data.channel
    //     that.setData(data);
    //   }
    // });
    // 搜索栏中的商品数量的获得
    // util.request(api.GoodsCount).then(function (res) {
    //   that.setData({
    //     goodsCount: res.data.goodsCount
    //   });
    // });
  },
  onLoad: function (options) {
    this.getIndexData();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
