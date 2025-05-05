var express = require ('express');
var router = express.Router();
var itemController = require('../controllers/itemControllers');

router.get('/',itemController.items);
router.post('/create-item',itemController.addItem);
router.get('/:id',itemController.viewItem);
router.put('/:id',itemController.updateItem);
router.delete('/:id',itemController.deleteItem);
// router.get('/',itemController.searchItem);

module.exports = router;

