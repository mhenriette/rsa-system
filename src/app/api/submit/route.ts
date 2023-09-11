
import {NextResponse} from "next/server"
import {google} from "googleapis";
import dotenv from "dotenv"
dotenv.config()
export async function POST(req:Request,res:Response) {
    const data = await req.json()
    try{
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY,
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })
   
        const sheets = google.sheets({
            auth,
            version: 'v4'
        });
        const sheetTitle = data.id;
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const sheetExistenceCheck:any = await sheets.spreadsheets.get({
            spreadsheetId,
          });
          const sheetExists = sheetExistenceCheck.data.sheets.some(
            (sheet:any) => sheet.properties.title === sheetTitle
          );
          if (!sheetExists) {
            await sheets.spreadsheets.batchUpdate({
              spreadsheetId,
              requestBody: {
                requests: [
                  {
                    addSheet: {
                      properties: {
                        title: sheetTitle,
                      },
                    },
                  },
                ],
              },
            });
          }

      

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: `${sheetTitle}!A1:D1`,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: 
                   [ [data.name, data.email, data.contact, data.address]]
                
            }
        });
    return NextResponse.json({
        success: true, 
        data: response.data
    })
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
       
}


