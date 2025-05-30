const Category = require("../models/categoryModel")

exports.createCategory = async (req, res) => {
    try {
        //fetch data 
        const { name, description } = req.body

        //validation 
        if (!name || !description) {
            return res.status(500).json({
                success: false,
                message: "fill all detailes "
            })
        }

        //db save
        try {
            const category = await Category.create({ name, description })
            console.log("create category", category)
            return res.status(401).json({
                success: true,
                data : category,
                message: "category created sucessfully"
            })

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "something went wrong while saving category in db"
            })
        }
    }
    catch (err) {
        console.log("something went wrong while creating an category")
        console.error(err)
        return res.status(401).json({
            success: false,
            message: "something went wrong while creating an category"
        })
    }
}


exports.getAllCategory = async (req, res) => {
    try {
        const category = await Category.find({}, { name: true, description: true })

        res.status(200).json({
            success: true,
            data : category,
            message: "all category"
        })
    } catch (err) {
        console.log("something went wrong while get all category")
        console.error(err)
        return res.status(401).json({
            success: false,
            message: "something went wrong while get all category"
        })
    }
}


exports.categoryPageDetails = async( req , res) => {
    
}
