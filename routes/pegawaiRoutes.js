const express = require('express')
const router = express.Router();
const{
    getPegawai,
    getPegawaiById,
    createPegawai,
    updatePegawai,
    deletePegawai,
} = require('../controllers/pegawaiController');

router.route('/')
    .get(getPegawai)
    .post(createPegawai);

router.route('/:id')
    .get(getPegawaiById)
    .put(updatePegawai)
    .delete(deletePegawai);

module.exports = router;
