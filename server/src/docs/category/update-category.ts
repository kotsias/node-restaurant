module.exports = {
    put:{
        tags:['Category CRUD operations'],
        description: "Update Category",
        operationId: "updateCategory",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Category/id"
                },
                required:true,
                description: "Id of Category to be updated"
            }
        ],
        responses:{

            '200':{
                description: "Category updated successfully"
            },
            '404':{
                description: "Category not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}