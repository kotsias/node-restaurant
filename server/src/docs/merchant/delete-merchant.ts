module.exports = {
    delete:{
        tags: ['Merchant CRUD operations'],
        description: "Deleting a Merchant",
        operationId: "deleteMerchant",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Merchant/id"
                },
                required:true,
                description: "Deleting a done Merchant"
            }
        ],
        responses:{
            '200':{
                description:"Merchant deleted successfully"
            },
            '404':{
                description:"Merchant not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}