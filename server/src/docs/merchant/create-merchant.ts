module.exports = {
    post:{
        tags:['Merchant CRUD operations'],
        description: "Create Merchant",
        operationId: "createMerchant",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Merchant/Input'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Merchant created successfully"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}