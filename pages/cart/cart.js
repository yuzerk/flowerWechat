var util = require('../../utils/util.js');
var api = require('../../config/api.js');

var app = getApp();

Page({
  data: {
    cartGoods: [],
    // cartTotal: {
    //   "goodsCount": 0,
    //   "goodsAmount": 0.00,
    //   "checkedGoodsCount": 0,
    //   "checkedGoodsAmount": 0.00
    // },
    cartTotal: 0,
    isEditCart: false,
    checkedAllStatus: true,
    editCartList: [],
    cartTotalPrice: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数


  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
    this.getCartList();
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  getCartList: function () {
    let that = this;
    util.request(api.CartList).then(function (res) {
      if (res.code === 200) {
        that.setData({
          cartGoods: res.data.cartResponses,
          cartTotalPrice: that.cartTotalPriceCompute(),
          cartTotal: that.getCheckedGoodsCount()
        });
      }
      that.setData({
        checkedAllStatus: that.isCheckedAll()
      })
    });
  },
  isCheckedAll: function () {
    //判断购物车商品已全选
    return this.data.cartGoods.every(function (element, index, array) {
      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });
  },
  checkedItem: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let that = this;

    if (!this.data.isEditCart) {
      // util.request(api.CartChecked, { productIds: that.data.cartGoods[itemIndex].product_id, isChecked: that.data.cartGoods[itemIndex].checked ? 0 : 1 }, 'POST').then(function (res) {
      //   if (res.errno === 0) {
      //     console.log(res.data);
      //     that.setData({
      //       cartGoods: res.data.cartList,
      //       cartTotal: res.data.cartTotal
      //     });
      //   }

      //   that.setData({
      //     checkedAllStatus: that.isCheckedAll()
      //   });
      // });
      that.setData({
        checkedAllStatus: that.isCheckedAll()
      });
    } else {
      //编辑状态
      let tmpCartData = this.data.cartGoods.map(function (element, index, array) {
        if (index == itemIndex){
          element.checked = !element.checked;
        }
        
        return element;
      });

      that.setData({
        cartGoods: tmpCartData,
        checkedAllStatus: that.isCheckedAll(),
        cartTotal: that.getCheckedGoodsCount(),
        cartTotalPrice: that.cartTotalPriceCompute()
      });
    }
  },
  getCheckedGoodsCount: function(){
    let checkedGoodsCount = 0;
    this.data.cartGoods.forEach(function (v) {
      if (v.checked === true) {
        checkedGoodsCount += v.commodityCount;
      }
    });
    return checkedGoodsCount;
  },
  checkedAll: function () {
    let that = this;

    if (!this.data.isEditCart) {
      // var productIds = this.data.cartGoods.map(function (v) {
      //   return v.product_id;
      // });
      // util.request(api.CartChecked, { productIds: productIds.join(','), isChecked: that.isCheckedAll() ? 0 : 1 }, 'POST').then(function (res) {
      //   if (res.errno === 0) {
      //     console.log(res.data);
      //     that.setData({
      //       cartGoods: res.data.cartList,
      //       cartTotal: res.data.cartTotal
      //     });
      //   }

      //   that.setData({
      //     checkedAllStatus: that.isCheckedAll()
      //   });
      // });
      that.setData({
        checkedAllStatus: that.isCheckedAll()
      });
    } else {
      //编辑状态
      let checkedAllStatus = that.isCheckedAll();
      let tmpCartData = this.data.cartGoods.map(function (v) {
        v.checked = !checkedAllStatus;
        return v;
      });

      that.setData({
        cartGoods: tmpCartData,
        checkedAllStatus: that.isCheckedAll(),
        cartTotal: that.getCheckedGoodsCount()
      });
    }

  },
  editCart: function () {
    var that = this;
    if (this.data.isEditCart) {
      //this.getCartList();
      this.setData({
        isEditCart: !this.data.isEditCart
      });
    } else {
      //编辑状态
      let tmpCartList = this.data.cartGoods.map(function (v) {
        v.checked = false;
        return v;
      });
      this.setData({
        editCartList: this.data.cartGoods,
        cartGoods: tmpCartList,
        isEditCart: !this.data.isEditCart,
        checkedAllStatus: that.isCheckedAll(),
        cartTotal: that.getCheckedGoodsCount()
      });
    }

  },
  toIndexPage: function () {
    wx.switchTab({
      url: "/pages/index/index"
    });
  },
  updateCart: function (productId, goodsId, number, id) {
    let that = this;

    util.request(api.CartUpdate, {
      productId: productId,
      goodsId: goodsId,
      number: number,
      id: id
    }, 'POST').then(function (res) {
      if (res.errno === 0) {
        console.log(res.data);
        that.setData({
          //cartGoods: res.data.cartList,
          //cartTotal: res.data.cartTotal
        });
      }

      that.setData({
        checkedAllStatus: that.isCheckedAll()
      });
    });

  },
  cutNumber: function (event) {

    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.cartGoods[itemIndex];
    let number = (cartItem.number - 1 > 1) ? cartItem.number - 1 : 1;
    cartItem.number = number;
    this.setData({
      cartGoods: this.data.cartGoods
    });
    //this.updateCart(cartItem.product_id, cartItem.goods_id, number, cartItem.id);
  },
  addNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.cartGoods[itemIndex];
    let number = cartItem.number + 1;
    cartItem.number = number;
    this.setData({
      cartGoods: this.data.cartGoods
    });
    //this.updateCart(cartItem.product_id, cartItem.goods_id, number, cartItem.id);

  },
  checkoutOrder: function () {
    //获取已选择的商品
    let that = this;

    var checkedGoods = this.data.cartGoods.filter(function (element, index, array) {
      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });

    if (checkedGoods.length <= 0) {
      return false;
    }


    wx.navigateTo({
      url: '../shopping/checkout/checkout'
    })
  },
  deleteCart: function () {
    //获取已选择的商品
    let that = this;

    let productIds = this.data.cartGoods.filter(function (element, index, array) {
      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });

    if (productIds.length <= 0) {
      return false;
    }

    productIds = productIds.map(function (element, index, array) {
      if (element.checked == true) {
        return element.product_id;
      }
    });


    // util.request(api.CartDelete, {
    //   productIds: productIds.join(',')
    // }, 'POST').then(function (res) {
    //   if (res.errno === 0) {
    //     console.log(res.data);
    //     let cartList = res.data.cartList.map(v => {
    //       console.log(v);
    //       v.checked = false;
    //       return v;
    //     });

    //     that.setData({
    //       cartGoods: cartList,
    //       cartTotal: res.data.cartTotal
    //     });
    //   }

    //   that.setData({
    //     checkedAllStatus: that.isCheckedAll()
    //   });
    // });
    that.setData({
      checkedAllStatus: that.isCheckedAll()
    });
  },

  cartTotalPriceCompute: function() {
    let that = this;
    let price = 0;
    that.data.cartGoods.forEach(v => {
      if (v.checked) {
        price += v.currentPrice * v.commodityCount
      }
    })
    console.log(price)
    return price;
  }
})