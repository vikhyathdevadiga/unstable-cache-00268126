// app/lib/data.ts

import { unstable_cache } from 'next/cache';
import { sql } from "@vercel/postgres";

const fetchCachedData = unstable_cache(async () => {
    const { rows } = await sql`SELECT * from CARS`
    console.log("Function Called")
    return rows;
    }, 
    ['cars'],
    {
        tags: ["cached-user-tag"],
        revalidate: 60, 
    }
);
export { fetchCachedData };