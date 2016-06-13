/**
 * MovimientoController
 *
 * @description :: Server-side logic for managing movimientoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    move: function (req,res) {
        var data = {
            x: req.param('x'),
            y: req.param('y'),
            player: req.param('player')
        };
        Movimiento.create(data).exec(function created(err, movimiento){
            console.log('enviando data' + 'Player' + movimiento.player);
            Movimiento.publishCreate(movimiento);
        });
    },

	suscribe: function (req, res) {
        Movimiento.watch(req);
    }
};

