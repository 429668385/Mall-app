import { require } from './require';

export function createOrder(id) {  // 创建订单
  return require({
    url: '/order/create.do',
    params: {
      shippingId: id
    }
  })
}

export function getOrderCartList(info) {  // 获取提交订单商品列表
  return require({
    url: '/order/get_order_cart_product.do',
    params: info
  })
}

export function getOrderList(pageNum, pageSize) {  // 获取订单列表
  return require({
    url: '/order/list.do',
    params: {
      pageNum,
      pageSize
    }
  })
}

export function getOrderDetail(orderNo) {  // 获取订单详情
  return require({
    url: '/order/detail.do',
    params: {
      orderNo
    }
  })
}

export function cancelOrder(orderNo) {  // 取消订单
  return require({
    url: '/order/cancel.do',
    params: {
      orderNo
    }
  })
}