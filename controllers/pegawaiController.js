const Pegawai = require('../models/pegawaiModels')
const pegawaiValidation = require('../validations/pegawaiValidation')


//Ambil semua Data Pegawai
exports.getPegawai = async (req, res) => {
    try {
        const pegawai = await Pegawai.find();
        res.json({
            success: true,
            count: pegawai.length,
            data: pegawai
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message});
    }
};

//Ambil Data Pegawai Berdasarkan ID
exports.getPegawaiById = async (req, res) => {
    try {
        const pegawai = await Pegawai.findById(req.params.id);
        if(!pegawai)
            return res.status(404).json({
            success: false,
            message: 'Pegawai Tidak Ditemukan!'
            });
        res.json({
            success: true,
            data: pegawai
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

//Membuat Data Pegawai
exports.createPegawai = async (req, res) => {
    try {
        const {error} = pegawaiValidation.validate(req.body);
        if (error)
            return res.status(404).json({
            success: false,
            message: error.details[0].message
            });

        const newPegawai = await Pegawai.create(req.body);
        res.status(201).json({
            success: true,
            data: newPegawai
        });

    } catch (error){
        res.status(500).json({success: false, message: error.message})
    }
};

//Update Data Pegawai
exports.updatePegawai = async (req, res) => {
    try{
        const {error} = pegawaiValidation.validate(req.body);
        if(error)
            return res.status(400).json({
            success: false,
            message: error.details[0].message
        });

        const updatePegawai = await Pegawai.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!updatePegawai)
            return res.status(404).json({
            success: false,
            message: 'Pegawai tidak Ditermukan!'
        });

        res.json({
            success:true,
            data: updatePegawai
        })

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

exports.deletePegawai = async (req, res) => {
    try{
        const pegawai = await Pegawai.findByIdAndDelete(req.params.id);
        if(!pegawai)
            return res.status(404).json({
            success: false,
            message: 'Pegawai tidak Ditemukan'
        });

        res.json({
            success: true,
            message: 'Pegawai Berhasil Dihapus'
        });
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
};