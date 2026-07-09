import { NextResponse } from 'next/server';

export async function GET() {
    const healthy = Boolean(process.env.MUAPI_API_KEY);
    return NextResponse.json(
        {
            status: healthy ? 'ok' : 'missing-muapi-key',
            timestamp: new Date().toISOString(),
            muapi_key_configured: healthy,
        },
        { status: healthy ? 200 : 503 }
    );
}
