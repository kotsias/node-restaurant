module.exports = {
    put:{
        tags:['Product CRUD operations'],
        description: "Update Product",
        operationId: "updateProduct",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Product/id"
                },
                required:true,
                description: "Id of Product to be updated"
            }
        ],
        responses:{

            '200':{
                description: "Product updated successfully"
            },
            '404':{
                description: "Product not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}