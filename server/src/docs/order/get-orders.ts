module.exports = {
    get:{
        tags: ['Order CRUD operations'],
        description: "Get Orders",
        operationId: 'getOrders',
        parameters:[],
        responses:{
            '200':{
                description:"Orders were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Order/Output'
                        }
                    }
                }
            }
        }
    }
}