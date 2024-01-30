const { errorResponse, successResponse } = require("../../utils/responses")
const {UserSubscription,UserProfession, User} = require("../../models");


const createSubscription = async(req,res)=>{
    try {
        let user = req.user
        const {paidAmount,user_profession_uuid} = req.body
        const subscription = await UserSubscription.findOne({
            where:{
                userProfessionId:user_profession_uuid
            }
        })
        if (!subscription) {
            if (user_profession_uuid) {
                const user_profession = await UserProfession.findOne({
                    where:{
                        uuid:user_profession_uuid
                    }
                })
                const response = await UserSubscription.create({
                    paidAmount,
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
                message: "Subscription already added!"
              });
        }
        
    } catch (error) {
        errorResponse(res,error)
    }
}

const getAllSubscriptions = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const response = await UserSubscription.findAll({
            attributes:{
                // exclude:["id"/*,"uuid","name","createdAt","updatedAt"*/]
            },
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}

const getSubscription = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const response = await UserSubscription.findOne({
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

const deleteSubscription = async(req,res)=>{
    try {
        const uuid = req.params.uuid
        const subscription = await UserSubscription.findOne({
            where:{
                uuid
            }
        });
        const response = await subscription.destroy()
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createSubscription, getSubscription, getAllSubscriptions, deleteSubscription}