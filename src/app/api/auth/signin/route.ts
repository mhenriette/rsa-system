import {NextResponse} from "next/server"
import * as jose from "jose"
export async function POST(req:Request,res:Response) {

    const bearerToken = req.headers.get("authorization") || "" as string;
    const token = bearerToken.split(" ")[1];
    const secret = new TextEncoder().encode('JHDKWJDEJDBWKJ');
    try {
    const usersInfo = await jose.jwtVerify(token,secret);
    
    return NextResponse.json({
        success: true, 
        data:{
            ...usersInfo.payload
        }
    })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Unauthorized"
        })
    }
       
}