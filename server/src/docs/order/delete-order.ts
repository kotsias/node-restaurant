module.exports = {
    delete:{
        tags: ['Order CRUD operations'],
        description: "Deleting a Order",
        operationId: "deleteOrder",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Order/id"
                },
                required:true,
                description: "Deleting a done Order"
            }
        ],
        responses:{
            '200':{
                description:"Order deleted successfully"
            },
            '404':{
                description:"Order not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}