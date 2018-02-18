(function() {
  var orderList = {
    template: `    <div class="list">
          <table>
            <tr>
              <th>Name</th>
              <th>Taco</th>
            </tr>
            <tr ng-repeat="order in $ctrl.orderList track by $index">
              <td>{{ order.name }}</td>
              <td>{{ order.taco }}</td>
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
