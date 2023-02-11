module.exports = {
    get:{
        tags:['Product CRUD operations'],
        description: "Get a Product",
        operationId: "getProduct",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Product/id"
                },
                required:true,
                description: "A single Product id"
            }
        ],
        responses:{
            '200':{
                description:"Product is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Product/Output"
                        }
                    }
                }
            },
            '404':{
                description: "Product is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Product/Error',
                            example:{
                                message:"We can't find the Product",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}