// pageCacheTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        finalUrl: string;
        audits: {
            'caching': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        cacheLifetimeMs: number;
                        cacheHitProbability: number;
                    }[];
                };
            };
        };
    };
}

// Function to perform Page Cache Test (Server-Side Caching) using PSI data
export function performPageCacheTest(data: any,appendToSuccess:any,appendToFailed:any): { CacheLifetimeMs: number; CacheHitProbability: number; Importance: string; Description: string; Link: string } {
    const cachingAudit = data?.lighthouseResult?.audits?.['caching'];

    // Check if the Caching audit data is available
    if (!cachingAudit) {
        // Return default data if the audit data is missing
        return {
            CacheLifetimeMs: 0,
            CacheHitProbability: 0,
            Importance: 'Low',
            Description: 'No Page Cache Test (Server-Side Caching) audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract caching metrics
    const cacheLifetimeMs = cachingAudit.details.items[0]?.cacheLifetimeMs || 0;
    const cacheHitProbability = cachingAudit.details.items[0]?.cacheHitProbability || 0;

    // Determine the importance based on caching metrics
    let importance: string;
    let description: string;

    // Example criteria for determining importance
    if (cacheLifetimeMs > 0 && cacheHitProbability > 0.8) {
        importance = 'High';
        description = `The server-side caching is properly configured with a cache lifetime of ${cacheLifetimeMs} ms and a cache hit probability of ${cacheHitProbability}.`;
    } else if (cacheLifetimeMs > 0) {
        importance = 'Medium';
        description = `The server-side caching is configured with a cache lifetime of ${cacheLifetimeMs} ms, but the cache hit probability is relatively low (${cacheHitProbability}).`;
    } else {
        importance = 'Low';
        description = 'Server-side caching is not effectively configured.';
    }

    const link = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control';
    importance == 'Low' ? appendToFailed('Page Cache Test') : appendToSuccess('Page Cache Test');

    // console.log({
    //     message: 'Page Cache Test (Server-Side Caching)',
    //     description,
    //     link,
    //     importance
    // });

    return {
        CacheLifetimeMs: cacheLifetimeMs,
        CacheHitProbability: cacheHitProbability,
        Importance: importance,
        Description: description,
        Link: link
    };
}
