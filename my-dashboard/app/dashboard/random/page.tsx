import { cacheLife } from "next/cache"
import { Suspense } from "react"


async function UniqueContent() {
    //await connection()
    const uuid = crypto.randomUUID()
    return <p>Request ID: {uuid}</p>
}

export default async function RandomPage() {
    'use cache'


    cacheLife({
        stale: 3600,
        revalidate: 7200,
        expire: 86400
    })

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <UniqueContent />
        </Suspense>
    )
}