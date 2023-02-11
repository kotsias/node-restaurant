module.exports = {
    post:{
        tags:['Category CRUD operations'],
        description: "Create Category",
        operationId: "createCategory",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Category/Input'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Category created successfully"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}