const merchantRepository = require('./repository');

exports.createMerchant = async (req, res) => {
    try {
        const { carttId } = req.body;
        const data = await merchantRepository.create(carttId);
        res.status(200).json({
            status: true,
            data: data,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
};

exports.getMerchants = async (req, res) => {
    try {
        const data = await merchantRepository.all();
        res.status(200).json({
            status: true,
            data: data,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
};

exports.getMerchant = async (req, res) => {
    try {
        let id = req.params.id
        let data = await merchantRepository.getById(id);
        res.status(200).json({
            status: true,
            data: data,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
};

exports.removeMerchant = async (req, res) => {
    try {
        let id = req.params.id;
        const data = await merchantRepository.remove(id)
        res.status(200).json({
            status: true,
            data: data,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
};
