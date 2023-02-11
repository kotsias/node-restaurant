module.exports = {
    delete:{
        tags: ['Product CRUD operations'],
        description: "Deleting a Product",
        operationId: "deleteProduct",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Product/id"
                },
                required:true,
                description: "Deleting a done Product"
            }
        ],
        responses:{
            '200':{
                description:"Product deleted successfully"
            },
            '404':{
                description:"Product not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}