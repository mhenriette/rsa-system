
import {NextResponse} from "next/server"
export async function GET(req:Request,res:Response) {
    try{
    return NextResponse.json({
        success: true, 
    })
    } catch (error) {
        return NextResponse.json({
            success:false,
        })
    }
       
}


