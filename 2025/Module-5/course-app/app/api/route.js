


export async function GET(request) {
    const { params } = new URL(request.url);
    const test = params.get('test');
    const status = params.get('status');
    const code = params.get('code');
    return Response.json({ 
        message: test, 
        status: status,
        code: code,
    });
}