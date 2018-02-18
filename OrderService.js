(function() {
  function TacoService(){
    var orderList = [];

    return {
      addOrder: addOrder,
      getOrders: getOrders,
      remove: remove
    };

    function addOrder(name, taco, drink){
      orderList.push({name: name,taco: taco, drink: drink});
      console.log(orderList)

    };

    function getOrders(){
      return orderList;

    };

    function remove(){
      orderList.pop();
    }
  }


  angular.module("TacoModule")
    .factory("TacoService",TacoService)
}());
