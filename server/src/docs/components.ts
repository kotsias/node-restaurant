module.exports = {
    components:{
        schemas:{
            Category:{
                id:{
                    type:'string',
                    description:"An id of a Category (ObjectId)",
                    example: "63e05cd3f8fe28adecef740b"
                },
                Output:{
                    type:'object',
                    properties:{
                        id:{
                            type:'string',
                            description:"Category identification number",
                            example:"63e05cd3f8fe28adecef740b"
                        },
                        name:{
                            type:'string',
                            description:"Category's title",
                            example:"Category 1"
                        },
                        completed:{
                            type:"boolean",
                            description:"The status of the Category",
                            example:false
                        }
                    }
                },
                Input:{
                    type:'object',
                    properties:{
                        name:{
                            type:'string',
                            description:"Category's name",
                            example:"Drinks"
                        },
                        completed:{
                            type:"boolean",
                            description:"The status of the Category",
                            example:false
                        }
                    }
                },
                Error:{
                    type:'object',
                    properties:{
                        message:{
                            type:'string'
                        },
                        internal_code:{
                            type:'string'
                        }
                    }
                }
            },
            Product:{
                id:{
                    type:'string',
                    description:"An id of a Product (ObjectId)",
                    example: "63e0511613eff33af4189364"
                },
                Output:{
                    type:'object',
                    properties:{
                        id:{
                            type:'string',
                            description:"Product identification number",
                            example:"63e0511613eff33af4189364"
                        },
                        name:{
                            type:'string',
                            description:"Products's name",
                            example:"Product 1"
                        },
                        price:{
                            type:'string',
                            description:"Products's price",
                            example:"450"
                        },
                        image:{
                            type:'string',
                            description:"Products's image",
                            example:"/path/to/image.jpg"
                        },
                        completed:{
                            type:"boolean",
                            description:"The status of the product",
                            example:false
                        }
                    }
                },
                Input:{
                    type:'object',
                    properties:{
                        name:{
                            type:'string',
                            description:"Products's name",
                            example:"Product 1"
                        },
                        price:{
                            type:'string',
                            description:"Products's price",
                            example:"450"
                        },
                        image:{
                            type:'string',
                            description:"Products's image",
                            example:"/path/to/image.jpg"
                        },
                        completed:{
                            type:"boolean",
                            description:"The status of the product",
                            example:false
                        }
                    }
                },
                Error:{
                    type:'object',
                    properties:{
                        message:{
                            type:'string'
                        },
                        internal_code:{
                            type:'string'
                        }
                    }
                }
            },
            Merchant:{
                id:{
                    type:'string',
                    description:"An id of a Merchant (ObjectId)",
                    example: "63e5f7076cfd76b1e0ca0d1b"
                },
                Output:{
                    type:'object',
                    properties:{
                        id:{
                            type:'string',
                            description:"Merchant identification number",
                            example:"63e5f7076cfd76b1e0ca0d1b"
                        },
                        lastname:{
                            type:'string',
                            description:"Merchant's Lastname",
                            example:"Merchant Lastname"
                        },
                        firstname:{
                            type:'string',
                            description:"Merchant's Firstname",
                            example:"Merchant Firstname"
                        },
                        completed:{
                            type:"boolean",
                            description:"The status of the Merchant",
                            example:false
                        }
                    }
                },
                Input:{
                    type:'object',
                    properties:{
                        lastname:{
                            type:'string',
                            description:"Merchant's Lastname",
                            example:"Merchant Lastname"
                        },
                        firstname:{
                            type:'string',
                            description:"Merchant's Firstname",
                            example:"Merchant Firstname"
                        },
                        completed:{
                            type:"boolean",
                            description:"The status of the Merchant",
                            example:false
                        }
                    }
                },
                Error:{
                    type:'object',
                    properties:{
                        message:{
                            type:'string'
                        },
                        internal_code:{
                            type:'string'
                        }
                    }
                }
            },
            Order:{
                id:{
                    type:'string',
                    description:"An id of a Order (ObjectId)",
                    example: "63e051d113eff33af4189369"
                },
                Output:{
                    type:'object',
                    properties:{
                        id:{
                            type:'string',
                            description:"Order identification number",
                            example:"63e051d113eff33af4189369"
                        },
                        subTotal:{
                            type:'string',
                            description:"Order's SubTotal",
                            example:"9000"
                        },
                        createAt:{
                            type:'string',
                            description:"Order's creation date",
                            example:"2022-02-10"
                        },
                        completed:{
                            type:"boolean",
                            description:"The status of the Order",
                            example:false
                        }
                    }
                },
                Input:{
                    type:'object',
                    properties:{
                        completed:{
                            type:"boolean",
                            description:"The status of the Order",
                            example:false
                        }
                    }
                },
                Error:{
                    type:'object',
                    properties:{
                        message:{
                            type:'string'
                        },
                        internal_code:{
                            type:'string'
                        }
                    }
                }
            }
        }
    }
}