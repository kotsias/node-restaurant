const categoryRepository = require('./repository');

exports.createCategory = async (req, res) => {
    try {
        let payload = {
            name: req.body.name
        }
        let data = await categoryRepository.create({
            ...payload
        });
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
}
exports.getAllCategories = async (req, res) => {
    try {
        let data = await categoryRepository.all();
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
}

exports.getCategoryById = async (req, res) => {
    try {
        let id = req.params.id
        let data = await categoryRepository.get(id);
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
}

exports.removeCategory = async (req, res) => {
    try {
        let id = req.params.id
        let data = await categoryRepository.remove(id)
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
}
