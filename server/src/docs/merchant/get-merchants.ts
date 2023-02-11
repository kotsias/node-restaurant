module.exports = {
    get:{
        tags: ['Merchant CRUD operations'],
        description: "Get Merchants",
        operationId: 'getMerchants',
        parameters:[],
        responses:{
            '200':{
                description:"Merchants were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Merchant/Output'
                        }
                    }
                }
            }
        }
    }
}