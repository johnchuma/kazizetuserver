const { errorResponse, successResponse } = require("../../utils/responses")
const {UserProfessionReferee,UserProfession, User} = require("../../models");


const createUserProfessionReferee = async(req,res)=>{
    try {
        let user = req.user
        const {name,description,user_profession_uuid} = req.body
        const userProfessionReferee = await UserProfessionReferee.findOne({
            where:{
                userProfessionId:user_profession_uuid
            }
        })
        if (!userProfessionReferee) {
            if (user_profession_uuid) {
                const user_profession = await UserProfession.findOne({
                    where:{
                        uuid:user_profession_uuid
                    }
                })
                const response = await userProfessionReferee.create({
                    name,description,
                    userProfessionId:user_profession.id
                })
                successResponse(res,response)
            }else{
                res.status(403).json({
                    status: false,
                    message: "You don't have profession yet!"
                });
            }            
        }else{
            res.status(403).json({
                status: false,
                message: "UserProfessionReferee already added!"
              });
        }
        
    } catch (error) {
        errorResponse(res,error)
    }
}

const getAllUserProfessionReferees = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const response = await UserProfessionReferee.findAll({
            attributes:{
                // exclude:["id"/*,"uuid","name","createdAt","updatedAt"*/]
            },
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}

const getUserProfessionReferee = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const response = await UserProfessionReferee.findOne({
            where:{
                uuid
            },
            attributes:{
                exclude:["id"/*,"uuid","name","createdAt","updatedAt"*/]
            },
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}

const deleteUserProfessionReferee = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const sector = await UserProfessionReferee.findOne({
            where:{
                uuid
            }
        });
        const response = await sector.destroy()
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createUserProfessionReferee, getUserProfessionReferee, getAllUserProfessionReferees, deleteUserProfessionReferee}