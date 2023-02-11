module.exports = {
    get:{
        tags:['Category CRUD operations'],
        description: "Get a Category",
        operationId: "getCategory",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/Category/id"
                },
                required:true,
                description: "A single Category id"
            }
        ],
        responses:{
            '200':{
                description:"Category is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Category/Output"
                        }
                    }
                }
            },
            '404':{
                description: "Category is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Category/Error',
                            example:{
                                message:"We can't find the Category",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}