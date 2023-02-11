module.exports = {
    put:{
        tags:['Merchant CRUD operations'],
        description: "Update Merchant",
        operationId: "updateMerchant",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Merchant/id"
                },
                required:true,
                description: "Id of Merchant to be updated"
            }
        ],
        responses:{

            '200':{
                description: "Merchant updated successfully"
            },
            '404':{
                description: "Merchant not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}