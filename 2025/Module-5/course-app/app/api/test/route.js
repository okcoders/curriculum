


export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const test = searchParams.get('test');
    const status = searchParams.get('status');
    const code = searchParams.get('code');
    return Response.json({ 
        message: test, 
        status: status,
        code: code,
    });
}