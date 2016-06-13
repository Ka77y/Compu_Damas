/**
 * MovimientoController
 *
 * @description :: Server-side logic for managing movimientoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //Recibe los datos(movimiento) del socket y envia a todos los socket abiertos
    move: function (req,res) {
        //Obtiene la informacion del socket
        var data = {
            x: req.param('x'),
            y: req.param('y'),
            player: req.param('player')
        };
        //Guarda la informacion en la base
        Movimiento.create(data).exec(function created(err, movimiento){
            console.log('enviando data' + 'Player' + movimiento.player);
            //Envia a todos los clientes conectados
            Movimiento.publishCreate(movimiento);
        });
    },

    //Recibe la peticion de conexion y abre el socket
	suscribe: function (req, res) {
        Movimiento.watch(req);
    }
};

