var Mock = require('../utils/mockSdk.js');
var api = require('../config/api.js');

// 以下是主页相关mock
Mock.mock(api.IndexUrlBanner, initData({
  "banner": [
    {
      id: 1,//主键
      link: '/page/aaaa/aaaa',// 点击跳转页面的路由
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585593935244&di=10b28b463439ba89eb415658d20d3ad6&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg' // 图片url
    },
    {
      id: 2,
      link: 'http://www.baidu.com',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585594031420&di=6669fe1151fd4b50795c57fae5b9e144&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg'
    }
  ]
}))

Mock.mock(api.GoodsCount, initData({
  "goodsCount": 999
}))

Mock.mock(api.IndexUrlTopic, initData({
  "topicList": [
    {
      "id": 1,
      "scene_pic_url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585662675886&di=16dd6d69cd6a29d7012f6c9dc81e8f1e&imgtype=0&src=http%3A%2F%2Fpic34.nipic.com%2F20131008%2F2517482_163350313168_2.jpg'
    },
    {
      "id": 2,
      "scene_pic_url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585662675885&di=648ee5a9446cd65ff221cb5e134eeceb&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F61%2F28%2F19300000819962133178281675004.jpg'
    },
    {
      "id": 3,
      "scene_pic_url": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585662675884&di=48011738156589c7b99bacacac360347&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F21223%2F21222431.jpg'
    }
  ]
}))

Mock.mock(api.IndexUrlNewGoods, initData({
  "newGoodsList": [
    {
      id: 1,
      list_pic_url: 'http://img5.imgtn.bdimg.com/it/u=3164176540,2379555677&fm=26&gp=0.jpg',
      name: '测试商品1',
      retail_price: 998,
      market_price: 1000
    },
    {
      id: 2,
      list_pic_url: 'http://www.dianshu119.com/uploads/201311/1383312171K1TTfZaN.jpg',
      name: '测试商品2',
      retail_price: 998,
      market_price: 1000
    },
    {
      id: 3,
      list_pic_url: 'http://image.huahuibk.com/uploads/20190222/21/1550843909-fmRczqrNvd.jpg',
      name: '测试商品3',
      retail_price: 998,
      market_price: 1000
    },
    {
      id: 4,
      list_pic_url: 'http://up.enterdesk.com/edpic_source/f2/9b/57/f29b571e867260a0f6572f0e6970793d.jpg',
      name: '测试商品4',
      retail_price: 998,
      market_price: 1000
    }
  ]
}))

Mock.mock(api.AuthLoginByWeixin, initData({
  "appToken": "open_id",
  "uid": "userId"
}))

// 以下是我的 用户中心index mock


// 以下是新品首发页面 newGoods 的 mock
Mock.mock(api.GoodsHot, initData({
  bannerInfo: {
    'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585593935244&di=10b28b463439ba89eb415658d20d3ad6&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg',
    'name': '特别折扣！'
  }
}))

Mock.mock(api.GoodsList, initData({
  goodsList: [
    {
      id: 1,
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585745137728&di=4c5c3232fe8c34c927fa48e7eef33fdd&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120222%2F44718-1202220R12639.jpg',
      realPrice: 1000,
      name: '心爱之人'
    },
    {
      id: 2,
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585745379724&di=7a1cd6312c297c4d2b6fd95e753c246a&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20160224%2Fjiehunaixinmeiguihua_5890306.jpg',
      realPrice: 9999,
      name: '梦中情人'
    },
  ],
  filterCategory: [
    {
      id: 1,
      name: '玫瑰'
    },
    {
      id: 2,
      name: '郁金香'
    }
  ],
  //以下两个字段是针对category 相关页面使用
  currentPage: 1,
  totalPages: 10
}))

// 以下是专题tabbar页面的 mock数据
Mock.mock(api.TopicList, initData({
  count: 2,
  data: [
    {
      id: 1,
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585750741534&di=4ec43bcb9c66dd3d1f314272bc7539bd&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F01%2F90%2F7b96b74a0a2b615089859de45551ecc0.jpg',
      title: '第一个专题',
      subtitle: '我是子标题',
      priceInfo: 99
    },
    {
      id: 2,
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585750741534&di=3b2a0fda3e4ec21df6fbfdf8ba97cb55&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F58bf650d75bed.jpg',
      title: '第二个专题',
      subtitle: '子标题就是我',
      priceInfo: 199
    }
  ]
}))

// 以下是商品详情页的 mock
Mock.mock(api.GoodsDetail, initData({
  gallery: [
    {
      id: 1,
      imgUrl: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg'
    },
    {
      id: 2,
      imgUrl: 'http://pic.10huan.com/pic2015/b/r/06/24/16/4332408.jpg'
    }
  ],
  info: {
    realPrice: 100,
    marketPrice: 133,
    goodsBrief: "这个是商品简要说明少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所",
    name: '好东西'
  }
}))
Mock.mock(api.CartGoodsCount, initData({
  cartTotal: {
    goodsCount: 10
  }
}))
Mock.mock(api.CartAdd, initData({
  cartTotal: {
    goodsCount: 20
  }
}))

// 以下是category页面的mock数据
Mock.mock(api.GoodsCategory, initData({
  brotherCategory: [
  ],
  currentCategory: {

  }
}))

// Mock.mock(api.GoodsList , initData({

// }))

//以下是目录分类页面的mock数据
var categoryListThis = [
  {
    id: 1,
    name: '玫瑰'
  },
  {
    id: 2,
    name: '牡丹'
  }
]
var goodss = [
  {
    id: 6,
    firstPic: 'http://pic.10huan.com/pic2015/b/r/06/24/16/4332408.jpg',
    name: '小红玫瑰'
      },
  {
    id: 10,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 11,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 12,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 3,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 14,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 66,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 77,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 89,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 47,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
      },
  {
    id: 30,
    firstPic: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/98/dbce360dd8cabe2cb620d72d3d85ac39.jpg',
    name: '大红玫瑰'
  }
]
Mock.mock1(api.CatalogCurrent, initData({
  currentCategory: categoryListThis[1]
}))
Mock.mock(api.CatalogList, initData({
  commodityClassifyDtos: categoryListThis,
  commodityDtos: goodss
}))

//购物车接口mock
Mock.mock(api.CartList, initData({
  cartList: [
    {
      id: 1,
      checked: true,
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585938316382&di=44d95e1b121d81f94d245a07ee3e73d8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190807%2F16%2F1565164960-FiklEaogOV.jpg',
      goodsName: '花祖宗',
      number: 5,
      realPrice: 100,
      goods_specifition_name_value: 'asfafasfasfagasgdgdfhdfahs'
    }
  ],
  cartTotal: {
    checkedGoodsAmount: 10000,
    checkedGoodsCount: 10,
  }
}))

// 确认下单页面
Mock.mock(api.CartCheckout, initData({
  checkedGoodsList: [
    {
      cartVoList: [
        {
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585938316382&di=44d95e1b121d81f94d245a07ee3e73d8&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190807%2F16%2F1565164960-FiklEaogOV.jpg',
          goodsName: '花祖宗',
          number: 5,
          goods_specifition_name_value: 'asfafasfasfagasgdgdfhdfahs',
          realPrice: 100,
        }
      ],
      orderTotalPrice: 1124141,
      couponName: '牛逼的优惠券',
      couponPrice: 111,
      actualPrice: 8080
    }
  ],
  checkedAddress: {
    id: 1,
    userName: '张三',
    isDefault: 1,
    telNumber: 18820202929,
    fullRegion: "地区",
    detailInfo: '地址详情'
  },
  actualPrice: 8080,
  couponPrice: 111,
  goodsTotalPrice: 101010,
  orderTotalPrice: 1124141
}))

// 优惠券相关数据
Mock.mock(api.CouponList, initData(
  [
    {
      id: 1,
      couponStatus: 1,
      name: '优惠券1',
      useEndDate: '2020-03-03',
      min_goods_amount: '998',
      type_money: 100
    },
    {
      id: 2,
      couponStatus: 1,
      name: '优惠券2222',
      useEndDate: '2020-05-05',
      min_goods_amount: '299',
      type_money: 18
    }
  ]
))

//  初始化返回数据
function initData(data) {
  return {
    statusCode: 200,
    data: {
      "code": 200,
      "data": data
    },
    msg: 'msg'
  }
}