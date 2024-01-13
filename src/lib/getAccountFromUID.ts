import { promises as fs } from 'fs'

const getAccountFromUID = async (uid: string) => {

    try {
        const file = await fs.readFile(process.cwd() + '/data/accounts.json', 'utf8')
		const accounts: Account[] = JSON.parse(file)
    
        const account = accounts.find(account => account.uid === uid)
    
        return account ?? null

    } catch (err) {
        console.error(err)
    }
}

export default getAccountFromUID