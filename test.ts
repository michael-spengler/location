import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { CityService } from "https://deno.land/x/cities/cityservice.ts"
import { Utility } from "./utilities.ts";

Deno.test("get closest entry", async (): Promise<void> => {

    const items = []
    items.push(CityService.getCityInfo('DE', 'Mannheim'))
    items.push(CityService.getCityInfo('DE', 'Heidelberg'))
    items.push(CityService.getCityInfo('UA', 'Odessa'))
    
    const closestItem = Utility.getClosestEntry(items, 49, 8.2)
    
    assertEquals(closestItem.name, 'Heidelberg')

});