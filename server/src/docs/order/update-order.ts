module.exports = {
    put:{
        tags:['Order CRUD operations'],
        description: "Update Order",
        operationId: "updateOrder",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Order/id"
                },
                required:true,
                description: "Id of Order to be updated"
            }
        ],
        responses:{

            '200':{
                description: "Order updated successfully"
            },
            '404':{
                description: "Order not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}