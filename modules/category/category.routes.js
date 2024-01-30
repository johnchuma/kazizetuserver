const {Router} = require('express')
const { validateJWT } = require("../../utils/validateJWT")
const { createCategory, getCategories, updateCategory, deleteCategory } = require('./category.controller');

const router = Router()
router.post("/",validateJWT,createCategory)
router.get('/',getCategories)
router.patch('/:uuid',validateJWT,updateCategory)
router.delete('/:uuid',validateJWT,deleteCategory)

module.exports = router