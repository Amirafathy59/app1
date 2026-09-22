import { ProductType } from "../types/productType"

export async function getAllProducts(): Promise<ProductType[]>{

try {

const response =await fetch('https://ecommerce.routemisr.com/api/v1/products' , {
    cache:'force-cache'
})
if(!response.ok) throw new Error('API Error')
const payload = await response.json()

return payload.data
    
} catch (error) {

throw new Error('API Error')
    
}

}


// https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b


export async function getSingleProduct(prodId:string): Promise<ProductType>{

try {

const response =await fetch(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)
if(!response.ok) throw new Error('API Error')
const payload = await response.json()

return payload.data
    
} catch (error) {

throw new Error('API Error')
    
}

}