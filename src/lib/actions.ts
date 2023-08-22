"use server"
import { format } from "path"
import { prisma } from "./db"

interface Data {
    email: String,
    First_name: String,
    last_name: String,
    member_id:  String,
    category:  String,
    hasCard: boolean,
    joined_at: String,
    unit_name:  String,
    district: String,
    address: String,
    role:  String
}
export const addNewUser = async (formData:any)=>{
   const user = await prisma.member.create({
        data: {
            email: formData.get('email'),
            First_name: formData.get('First_name'),
            last_name: formData.get('last_name'),
            member_id: formData.get('member_id'),
            category: formData.get('category'),
            hasCard: formData.get('hasCard'),
            joined_at: formData.get('joined_at'),
            unit_name: formData.get('unit_name'),
            district: formData.get('district'),
            address: formData.get('address'),
            role: formData.get('role')
        },
        include:{
            payment: true,
            activities: true
        }
    })

}