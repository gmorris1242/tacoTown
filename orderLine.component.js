(function() {
  var orderLine = {
    bindings: order:"<",
    template: `
              <td>{{ order.name | uppercase}}</td>
              <td>{{ order.taco | uppercase}}</td>
              <td>{{ order.drink | uppercase}}</td>

    `,
    controller: function(){

    }
  }


  angular.module("TacoModule")
    .component("orderList", orderList)
}());
