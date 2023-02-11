module.exports = {
    get:{
        tags: ['Category CRUD operations'],
        description: "Get Categories",
        operationId: 'getCategories',
        parameters:[],
        responses:{
            '200':{
                description:"Categories were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Category/Output'
                        }
                    }
                }
            }
        }
    }
}