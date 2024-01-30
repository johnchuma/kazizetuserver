const {Router} = require('express')
const { validateJWT } = require("../../utils/validateJWT")
const { createUserProfessionReferee, getUserProfessionReferee, getAllUserProfessionReferees, deleteUserProfessionReferee } = require('./user_profession_referee.controller')

const router = Router()
router.post("/",createUserProfessionReferee) 
router.get("/:uuid",getUserProfessionReferee) 
router.get("/",getAllUserProfessionReferees)
router.delete('/:uuid',validateJWT,deleteUserProfessionReferee)

module.exports = router