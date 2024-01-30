const { errorResponse, successResponse } = require("../../utils/responses")
const {UserProfessionAttachment,UserProfession} = require("../../models");
const getUrl = require("../../utils/cloudinary_upload");



const createAttachment = async(req,res)=>{
    try {
        const user_profession_uuid = req.params.uuid;
        let link = await getUrl(req);
        const userProfession = await UserProfession.findOne({
            where:{
               uuid:user_profession_uuid
            }
        })
        
        const response = await UserProfessionAttachment.create({
            link,
            userProfessionId:userProfession.id
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}


const deleteAttachment = async(req,res)=>{
    try {
        
        const uuid = req.params.uuid
        const attachment = await UserProfessionAttachment.findOne({
            where:{
                uuid
            }
        });
        const response = await attachment.destroy()
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}
    


module.exports = {
    createAttachment,deleteAttachment
}