// import { decode } from "next-auth/jwt"
// import { cookies } from "next/headers"

// export async function getTokenFun(){
// try{
//        const cookie=  await cookies()
//    const nextAuthToken =  cookie.get('Secure-next-auth.session-token')?.value || cookie.get('__Secure-next-auth.session-token')?.value
//    const accessToken = await decode({
//     secret : process.env.NEXTAUTH_SECRET! ,
//     token: nextAuthToken
//    })
//    return accessToken?.token
// }
// catch(error){
//   console.log('token error' , error)
//   return null

// }
// }
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getTokenFun(){
    try{
        const cookieStore = await cookies()
        
        // اطبعي كل أسماء الكوكيز المتاحة عشان نشوف اسمها الحقيقي على فيرسل
        const allCookies = cookieStore.getAll()
        console.log("AVAILABLE COOKIES:", allCookies.map(c => c.name))

        const tokenCookie = cookieStore.get('next-auth.session-token') || cookieStore.get('__Secure-next-auth.session-token')
        const nextAuthToken = tokenCookie?.value
        
        if (!nextAuthToken) {
            console.log("No token found in cookies!")
            return null;
        }

        const accessToken = await decode({
            secret : process.env.NEXTAUTH_SECRET! ,
            token: nextAuthToken
        })
        return accessToken?.token
    }
    catch(error){
        console.log('token decoding error:', error)
        return null
    }
}