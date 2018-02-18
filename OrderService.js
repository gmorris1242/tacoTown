(function() {
  function TacoService(){
    var orderList = [];

    return {
      addOrder: addOrder,
      getOrders: getOrders
    };

    function addOrder(name, taco){
      orderList.push({name: name,taco: taco});
      console.log(orderList)
    };

    function getOrders(){
      return orderList;

    };
  }


  angular.module("TacoModule")
    .factory("TacoService",TacoService)
}());
