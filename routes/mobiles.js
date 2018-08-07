

var mobiles = [
    {"id":"1", "name": "OnePlus 6", "desc": "El OnePlus 6 tiene un hermoso diseño, es barato para lo que ofrece, tiene la carga de batería más rápida que he probado, su software es simple, ofrece un excelente desempeño. Además, tiene conector de audífonos (3.5mm), doble ranura para tarjeta SIM y ya es compatible con Android P (beta).", "img": "http://localhost:3000/public/oneplus6.jpg", "price":643.83},
    {"id":"2", "name": "Galaxy S9 Plus", "desc": " El Galaxy S9 Plus es un celular muy rápido y con excelentes especificaciones. Tiene una bocina doble con muy buen sonido; muy buenas cámaras y corrige el posicionamiento del lector de huellas. Además, trae más memoria RAM y una batería más grande y duradera que la del Galaxy S9.", "img": "http://localhost:3000/public/samsumgs9.jpg", "price":702.99},
    {"id":"3", "name": "Pixel 2 XL", "desc": "El Pixel 2 XL ofrece un excelente desempeño, doble bocina frontal, es resistente al agua y la cámara es sobresaliente. Además, es el primero (junto con el Pixel 2) en integrar Google Lens, será uno de los primeros en recibir las próximas actualizaciones de Android y tiene almacenamiento ilimitado de fotos y video de calidad original hasta 2020. Su diseño es más bonito que el Pixel 2 y es liviano.", "img": "http://localhost:3000/public/pixel.jpg", "price":849.00}
];

exports.getMobiles = function(req, res) {
    res.send(mobiles);
}

exports.findbyId = function(req, res){
    var mobileId = req.params.mobileId;
    for (var mobileIndex in mobiles) {
        var mobile = mobiles[mobileIndex];
        if (mobile.id === mobileId) {
            break;
        }
        mobile="{}";
    }
    res.send(mobile);
}


exports.addMobile = function(req, res) {
    var name = req.body.name;
    var desc = req.body.desc;
    var price = req.body.price;

    // Add mobile with predefined image for the demo
    mobiles.push({"name": name, "desc": desc, "img": "http://localhost:3000/public/trip.jpg", "price":price});
    res.send(mobiles);
}

exports.updateMobile = function(req, res) {
    // TODO: Not included in this demo
}

exports.deleteMobile = function(req, res) {
    var mobileId = req.params.mobileId;

    for (var mobileIndex in mobiles) {
        var mobile = mobiles[mobileIndex];

        if (mobile.id === mobileId) {
            mobiles.splice(mobileIndex, 1);
            break;
        }
    }

    res.send(mobiles);

}