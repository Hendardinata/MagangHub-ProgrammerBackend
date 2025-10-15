const mongoose = require('mongoose');

const pegawaiSchema = new mongoose.Schema(
    {
        nama: {
            type: String,
            required: [true, 'nama wajib di isi']
        },
        posisi: {
            type: String,
            required: [true, 'posisi wajib di isi']
        },
        gaji: {
            type: Number,
            required: [true, 'Nominal Gaji wajib di isi']
        },
        cabang: {
            type: String,
            required: [true, 'Cabang wajib di isi']
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Pegawai', pegawaiSchema)