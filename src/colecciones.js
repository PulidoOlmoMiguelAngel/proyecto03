//db.practica.find({"status": "D"})


 // Los que tienen 20 en el campo qty

 //db.inventory.find( { qty: { $eq: 20 } } )

//Donde el campo code sea "123"
//db.inventory.find( { "item.code": "123" })

 //db.inventory.find( { "item.code": { $eq: "123" }  })

 // Busca en el Array
                        //tags es un ejemplo para buscar, en nuestra practica no contamos con tags pero si por ejemplo con size
 // db.inventory.find( { tags: { $eq: "B" } } )

// Hay muchos mas comandos en el manual pdf.
