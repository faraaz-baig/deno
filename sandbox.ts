import { serve } from "https://deno.land/std@0.88.0/http/server.ts";

const server = serve({ port: 3000 })
console.log('listening to requests on port 3000')

for await (const req of server) {
    const url = req.url
    req.respond({ body: `Hello Faraaz, you visited ${ url }` })
}