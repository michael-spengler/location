import { Request } from 'https://deno.land/x/request/request.ts'

export async function get3Words(lat: number, lng: number, apikey: string): Promise<any> {

    if (apikey === undefined) {
        throw new Error(`You need to add your API key as a parameter to use https://api.what3words.com/v3`)
    }

    const what3wordsURL = `https://api.what3words.com/v3/convert-to-3wa?key=${apikey}&coordinates=${lat},${lng}&language=en&format=json`
    console.log(`Getting the what3words address...`)

    let threeWordResult: any

    try {
        threeWordResult = await Request.get(what3wordsURL)
    } catch (error) {
        throw new Error(`The following error occurred while converting coordinates to three word address: ${error.message}`)
    }

    return threeWordResult
}

console.log(await get3Words(49, 8, Deno.args[0]))