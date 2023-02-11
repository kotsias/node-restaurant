module.exports = {
    delete:{
        tags: ['Category CRUD operations'],
        description: "Deleting a Category",
        operationId: "deleteCategory",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Category/id"
                },
                required:true,
                description: "Deleting a done Category"
            }
        ],
        responses:{
            '200':{
                description:"Category deleted successfully"
            },
            '404':{
                description:"Category not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}