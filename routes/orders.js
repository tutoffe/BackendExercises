const http = require('http');

var orders = [
    {"id":"1","name":"Antonio","surname":"Andujar","email":"example@example.com","phones":[{"id":"1","name":"OnePlus 6","price":"643.83"},{"id":"2","name":"Galaxy S9 Plus","price":"702.99"},{"id":"3","name":"Pixel 2 XL","price":"849.00"}],"total":"2195.82"}    
];


function allTrue(obj)
{
  for(var o in obj)
    { 
      if(!obj[o]) return false;
    }
  return true;
}


exports.getOrders = function(req, res) {
   res.send(orders);
}

exports.addOrder = function(req, res) {
    var name = req.body.name;
    var surname = req.body.desc;
    var email = req.body.email
    var phonesIds = req.body.phonesIds;
    var Ids = phonesIds.split(',');
    var total=0;
    var phones=[];
    var check=new Array(Ids.length).fill(false);
    for (var i in Ids)
    {
        var variable = Ids[i];
              
        http.get('http://localhost:3000/mobiles/'+variable, (resp) => {
          let data = '';
          // A chunk of data has been recieved.
          resp.on('data', (chunk) => {
            data += chunk;
          });
         
          // The whole response has been received. Print out the result.
          resp.on('end', () => {
            if (JSON.parse(data).id!=undefined){
                total+=JSON.parse(data).price;
                phones.push({"id":JSON.parse(data).id,"name":JSON.parse(data).name,"price":JSON.parse(data).price});
                for (var j in check){
                    if (check[j]==false){
                        check[j]=true;
                        break;
                    }
                }
                if (allTrue(check)){
                    total=parseFloat(total).toFixed(2);
                    console.log('Total = '+total+'€');
                    res.send('Total = '+total+'€');
                    orders.push({"name": name, "surname": surname, "email":email, "phones":phones, "total":total});
                }
            }else{
                res.send("The mobile id isn't in the catalogue");
            }
          });
         
        }).on("error", (err) => {
          console.log("Error: " + err.message);
          res.sendStatus(statusCode >= 100 && statusCode < 600 ? err.code : 500);
        });

    }
    // Add order with predefined image for the demo
    
    //res.send(orders);
}

exports.updateOrder = function(req, res) {
    // TODO: Not included in this demo
}

exports.deleteOrder = function(req, res) {
    var orderId = req.params.orderId;

    for (var orderIndex in orders) {
        var order = orders[orderIndex];

        if (order.id === orderId) {
            orders.splice(orderIndex, 1);
            break;
        }
    }

    res.send(orders);

}