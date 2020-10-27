import { Request } from 'https://deno.land/x/request@1.0.0/request.ts'
import { config } from 'https://deno.land/x/dotenv/mod.ts'

export class What3WordsService {

    public static async get3Words(lat: number, lng: number): Promise<any> {
        const apikey = config()['W3W_API_KEY'];
        const what3wordsURL = `https://api.what3words.com/v3/convert-to-3wa?key=${apikey}&coordinates=${lat},${lng}&language=en&format=json`
        console.log(`Getting the what3words address...`)
        let threeWordResult

        try {
            threeWordResult = await Request.get(what3wordsURL)
        } catch (error) {
            throw new Error(`The following error occurred while converting coordinates to three word address: ${error.message}`)
        }

        return threeWordResult
    }
}