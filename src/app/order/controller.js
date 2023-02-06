const orderRepository = require('./repository');

exports.createOrder = async (req, res) => {
    try {
        const { carttId } = req.body;
        const order = await orderRepository.create(carttId);
        res.status(200).json({
            status: true,
            data: order,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await orderRepository.all();
        res.status(200).json({
            status: true,
            data: orders,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
};

exports.removeOrder = async (req, res) => {
    try {
        let id = req.params.id;
        const orderDetails = await orderRepository.remove(id)
        res.status(200).json({
            status: true,
            data: orderDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}
