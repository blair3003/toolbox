import getAccountFromUID from '@/lib/getAccountFromUID'

export async function GET(request: Request, { params }: { params: { uid: string } }) {
    const uid = params.uid
    const account = await getAccountFromUID(uid)
   
    return Response.json(account)
}