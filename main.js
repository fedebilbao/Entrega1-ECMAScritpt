class ProductManager {
  constructor (){
      this.products = []
  }

getProducts() {
  return this.products
}

getProductByid(idProduct){
  const product = this.products.find((p) =>p.id === idProduct)
  if (!product) {
    console.log("No se encontró el id")
    return
  }
  console.log (product)
  return product
}


addProducts (product) {

  const { title, description, price, thumbnail, code, stock} = product
 
  if (!title || !description || !price || !thumbnail || !code || !stock) {
    console.log ("Falta un dato para cargar el producto")
    return
  }

  const CodeCheck = this.products.some((p)=> p.code === code)
  if (CodeCheck) {
    console.log("el Code ya fue usado")
    return
  }
  

  let id
  if(!this.products.length){
      id=1
  }   else{
      id=this.products[this.products.length-1].id+1
  } 

  const newProduct = {id, ...product}
  this.products.push(newProduct)
  return newProduct
}

}

const manager1 = new ProductManager ()
manager1.addProducts ({
  title: "Teclado",
  description: "es un teclado de oficina",
  price: 1000,
  thumbnail: "a",
  code: "ksfg12de56Sjdk",
  stock: 12,
})

manager1.addProducts ({
  title: "mouse",
  description: "gamer",
  price: 10000,
  thumbnail: "a",
  code: "ksfg12de56Sjdkd",
  stock: 132,
})

manager1.getProductByid(2) /* control de que funciona el buscador por id */

console.log(manager1.getProducts()) /* control de que el addProducts esta agregando correctamente */

