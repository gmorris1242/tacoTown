(function() {
  var orderList = {
    template: `    <div class="list">
          <table>
            <tr>
              <th>Name</th>
              <th>Taco</th>
              <th>Drink</th>
            </tr>
            <tr ng-repeat="order in $ctrl.orderList track by $index">
              <td>{{ order.name | uppercase}}</td>
              <td>{{ order.taco | uppercase}}</td>
              <td>{{ order.drink | uppercase}}</td>
            </tr>
          </table>
        </div>
    `,
    controller: function(TacoService){
      var $ctrl = this;
      $ctrl.orderList = TacoService.getOrders();
      console.log($ctrl.orderList);
    }
  }


  angular.module("TacoModule")
    .component("orderList", orderList)
}());
