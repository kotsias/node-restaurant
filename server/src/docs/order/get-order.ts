module.exports = {
    get:{
        tags:['Order CRUD operations'],
        description: "Get a Order",
        operationId: "getOrder",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Order/id"
                },
                required:true,
                description: "A single Order id"
            }
        ],
        responses:{
            '200':{
                description:"Order is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Order/Output"
                        }
                    }
                }
            },
            '404':{
                description: "Order is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Order/Error',
                            example:{
                                message:"We can't find the Order",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}