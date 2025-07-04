const {ins,disp,delData,usereditData} = require('../controlller/controller')
var express = require('express')
var router = express.Router()

router.get('/',disp)
router.post('/add',ins)
router.get('/model/del/:id', delData);
router.get('/model/edit/:id',usereditData)



module.exports = router