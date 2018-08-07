

var mobiles = require('./mobiles');
var orders = require('./orders');


exports.assignRoutes = function (app) {
    app.get('/mobiles', mobiles.getMobiles);

    app.get('/mobiles/:mobileId', mobiles.findbyId);
   	app.post('/mobiles', mobiles.addMobile);
    app.put('/mobiles:mobileId', mobiles.updateMobile);
    app.delete('/mobiles:mobileId', mobiles.deleteMobile);


    app.get('/orders', orders.getOrders);
   	app.post('/orders', orders.addOrder);
    app.put('/orders:mobileId', orders.updateOrder);
    app.delete('/orders:mobileId', orders.deleteOrder);
}