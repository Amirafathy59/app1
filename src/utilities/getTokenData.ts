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
        const cookie = await cookies()
        const tokenCookie = cookie.get('next-auth.session-token') || cookie.get('__Secure-next-auth.session-token')
        
        const nextAuthToken = tokenCookie?.value
        
        if (!nextAuthToken) {
            return null;
        }

        const accessToken = await decode({
            secret : process.env.NEXTAUTH_SECRET! ,
            token: nextAuthToken
        })
        return accessToken?.token
    }
    catch(error){
        console.log('token error' , error)
        return null
    }
}