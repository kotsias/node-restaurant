module.exports = {
    get:{
        tags:['Merchant CRUD operations'],
        description: "Get a Merchant",
        operationId: "getMerchant",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Merchant/id"
                },
                required:true,
                description: "A single Merchant id"
            }
        ],
        responses:{
            '200':{
                description:"Merchant is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Merchant/Output"
                        }
                    }
                }
            },
            '404':{
                description: "Merchant is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Merchant/Error',
                            example:{
                                message:"We can't find the Merchant",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}