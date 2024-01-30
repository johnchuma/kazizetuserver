const {Router} = require("express")
const { validateJWT } = require("../../utils/validateJWT")
const router = Router()
const upload = require("../../utils/upload");
const { registerUser,  loginUser,  deleteUser, updateUser,  getHash, pushSMS,  
    sendPasswordLink, passwordReset, sendMessage, getUserDetails, 
    getUserCounts,getMyDetails,getUsersByRole, 
    getReviewers,
    updateMyInfo,
    getInvestors,
    getAdmins,
    getUsers,
    getEnterprenuers} = require("./user.controller");

router.post("/register",upload.single('file'), registerUser)
router.post("/message",validateJWT,sendMessage)
router.post("/sms",validateJWT,pushSMS)
router.post("/reset-password",sendPasswordLink)
router.patch("/password/:uuid",passwordReset)
router.patch("/me",validateJWT,updateMyInfo)
router.patch("/image",upload.single('file'),validateJWT,updateUser)
router.patch("/:uuid",validateJWT,updateUser)

router.delete("/:uuid",validateJWT,deleteUser)
router.post("/login",loginUser)
router.get("/counts",validateJWT,getUserCounts)
router.get("/me",validateJWT,getMyDetails)
router.get("/investors",validateJWT,getInvestors)
router.get("/admins",validateJWT,getAdmins)
router.get("/reviewers",validateJWT,getReviewers)
router.get("/enterprenuers",validateJWT,getEnterprenuers)
router.get("/",validateJWT,getUsers)
router.get("/:uuid",validateJWT,getUserDetails)
router.get("/role/:uuid",validateJWT,getUsersByRole)

module.exports = router