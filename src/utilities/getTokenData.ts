import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getTokenFun(){
try{
       const cookie=  await cookies()
   const nextAuthToken =  cookie.get('next-auth.session-token')?.value
   const accessToken = await decode({
    secret : process.env.NEXTAUTH_SECRET! ,
    token: nextAuthToken
   })
   return accessToken?.token
}
catch(error){
  console.log('token error' , error)
  return nulpl

}
}