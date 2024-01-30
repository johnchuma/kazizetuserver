const { User,Business,UserProfession } = require("../../models");

const { successResponse, errorResponse } = require("../../utils/responses");
const {Op, where} = require("sequelize");


  const getAllUsers = async(req,res)=>{
    try {
        const response = await User.findAll({
        })
        successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
  }

  const getAllCustomers = async(req,res)=>{
    try {
        let {page,limit} = req.query
        page = parseInt(page)
        limit = parseInt(limit)
        const offset = (page-1)*limit

        const {count, rows} = await User.findAndCountAll({
          offset: offset, //ruka ngapi
          limit: limit, //leta ngapi
          order:[['createdAt','DESC']],
          include:[Business,],
          where:{
            role: "customer"
          }
        })
        const totalPages = (count%limit)>0?parseInt(count/limit)+1:parseInt(count/limit)
        successResponse(res,{count, data:rows, page, totalPages})
    } catch (error) {
        errorResponse(res,error)
    }
  }

  const getAllSellers = async(req,res)=>{
    try {
        let {page,limit} = req.query
        page = parseInt(page)
        limit = parseInt(limit)
        const offset = (page-1)*limit

        const {count, rows} = await User.findAndCountAll({
          offset: offset, //ruka ngapi
          limit: limit, //leta ngapi
          order:[['createdAt','DESC']],
          include:[Business,],
          where:{
            role: "seller"
          }
        })
        const totalPages = (count%limit)>0?parseInt(count/limit)+1:parseInt(count/limit)
        successResponse(res,{count, data:rows, page, totalPages})
    } catch (error) {
        errorResponse(res,error)
    }
  }

  const getAllAdmins = async(req,res)=>{
    try {
        let {page,limit} = req.query
        page = parseInt(page)
        limit = parseInt(limit)
        const offset = (page-1)*limit

        const {count, rows} = await User.findAndCountAll({
          offset: offset, //ruka ngapi
          limit: limit, //leta ngapi
          order:[['createdAt','DESC']],
          include:[Business,],
          where:{
            role: "admin"
          }
        })
        const totalPages = (count%limit)>0?parseInt(count/limit)+1:parseInt(count/limit)
        successResponse(res,{count, data:rows, page, totalPages})
    } catch (error) {
        errorResponse(res,error)
    }
  }

  const Statistics = async(req,res)=>{
    try {
        let user = req.user
        const registeredUsers = await User.count({})
        const publishedServices = await UserProfession.count({})
        const serviceViews = await UserProfession.sum('views')

        // const bfa = await ProgramApplication.findAll({
        //   include:[
        //     {
        //       model: Program,
        //       where:{
        //         type:'bfa'
        //       },
        //     }
        //   ],
        //   attributes: {
        //     include: [
        //       [Sequelize.fn("MONTH", Sequelize.col("ProgramApplication.createdAt")), "month"],
        //     ],
        //   },
        //   // group: ['month']
        // })

        successResponse(res,{registeredUsers:registeredUsers,publishedServices:publishedServices,serviceViews:serviceViews})
    } catch (error) {
        errorResponse(res,error)
    }
  }

  module.exports = {
    getAllUsers,
    getAllCustomers,
    getAllSellers,
    getAllAdmins,
    Statistics
  }