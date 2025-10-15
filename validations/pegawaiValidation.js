const Joi = require('joi');
const { default: mongoose } = require('mongoose');

const pegawaiValidation = Joi.object({
    nama: Joi.string().min(3).max(50).required(),
    posisi: Joi.string().min(2).max(50).required(),
    gaji: Joi.number().required(),
    cabang: Joi.string().min(3).required(),
})

module.exports = pegawaiValidation