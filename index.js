const express = require('express')
const bodyParser = require("body-parser");

const UserRoutes =  require("./modules/user/user.routes")
const UserProfessionRoutes =  require("./modules/user_profession/user_profession.routes")
const UserProfessionRefereeRoutes =  require("./modules/user_profession_referee/user_profession_referee.routes")
const UserProfessionSubscriptionRoutes =  require("./modules/user_profession_subscription/user_subscription.routes")
const UserProfessionAttachmentRoutes =  require("./modules/user_profession_attachment/attachment.routes")

const RoleRoutes =  require("./modules/role/role.routes")
const PermissionRoutes =  require("./modules/permission/permission.routes")
const UserRoleRoutes =  require("./modules/user_role/user_role.routes")
const UserPermissionRoutes =  require("./modules/user_permission/user_permission.routes")
const Admin =  require("./modules/admin/admin.routes")
const CategoryRoutes =  require("./modules/category/category.routes")
const StatisticsRoutes =  require("./modules/statistics/statistics.routes")
// ********************
const Favourites =  require("./modules/favourite/favourite.routes")
// ********************

const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.static("files"));
app.use(bodyParser.text({ type: "/" }));

app.use("/user",UserRoutes)
app.use("/user_profession",UserProfessionRoutes)
app.use("/user_profession_referee",UserProfessionRefereeRoutes)
app.use("/user_profession_subscription",UserProfessionSubscriptionRoutes)
app.use("/user_profession_attachment",UserProfessionAttachmentRoutes)
app.use("/admin",Admin)
app.use("/category",CategoryRoutes)
app.use("/role",RoleRoutes)
app.use("/permission",PermissionRoutes)
app.use("/user_role",UserRoleRoutes)
app.use("/user_permission",UserPermissionRoutes)
app.use("/statistics",StatisticsRoutes)

// *************
app.use("/favourite",Favourites)
// *************

app.get('/',(req,res)=>{
    res.send("Entrepreneurs system API's are okay!")
})
app.listen(5000,()=>{
  console.log("Server started at port 5000")
})