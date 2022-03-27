function takeOrder(deliveryOrders, newOrder) {
  if (newOrder.length < 3){
    return newOrder.push(deliveryOrders);
  } else {
    return deliveryOrders;
  }
}

function refundOrder(orderNum,deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (orderNum === deliveryOrders[i].orderNumber) {
      return deliveryOrders.splice(i, 1);
    }
  }
};

//want to list all order items by name
// this could mean accessing item names than

function listItems(deliveryOrders) {
  var entree = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    entree.push(deliveryOrders[i].item);
  }
  return entree.join(', ')
}

function searchOrder(deliveryOrders, orderItem) {
for (var i = 0; i < deliveryOrders.length; i++) {
  if ( orderItem === deliveryOrders[i].item) {
    return true
  }
  } return false

}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
