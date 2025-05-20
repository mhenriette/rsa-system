
// '/api/data'
import { prisma } from "@/lib/db";
import {NextResponse} from "next/server"
export async function GET(req:Request,res:Response) {
    const data = await prisma.unitLeader.findMany({where: {}}); 
    try{
    return NextResponse.json({
        success: true, 
        data: data
    })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Error occurred"
        })
    }
       
}