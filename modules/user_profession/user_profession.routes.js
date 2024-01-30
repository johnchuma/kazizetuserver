const {Router} = require('express')
const { validateJWT } = require("../../utils/validateJWT")
const upload = require("../../utils/upload");
const { createUserProfession, updateUserProfession, deleteUserProfession, getUserUserProfession, getAllUserProfessions, getReviewersStatus,
getVideoUserProfessions,getDocumentUserProfessions,getRejectedUserProfessions,getUserProfessionDetails,postUserProfessionDocument,updateViews } = require('./user_profession.controller');

const router = Router()
router.post("/",upload.single('file'),validateJWT,createUserProfession)

router.post("/document/:uuid",upload.single('file'),validateJWT,postUserProfessionDocument)
router.get('/user',validateJWT,getUserUserProfession)
router.get("/:uuid",getUserProfessionDetails)
// business UUID
// ret reviewers,status()

router.get('/',getAllUserProfessions)
router.get('/video',validateJWT,getVideoUserProfessions)
router.get('/document',validateJWT,getDocumentUserProfessions)

router.patch('/:uuid',upload.single('file'),validateJWT,updateUserProfession)
router.patch('/views/:uuid',validateJWT,updateViews)
router.delete('/:uuid',validateJWT,deleteUserProfession)
// router.delete('UserProfession_requirement/:uuid',validateJWT,deleteUserProfessionRequirement)

module.exports = router