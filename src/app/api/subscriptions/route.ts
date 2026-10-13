import { sign_up } from '@/app/data/data';

export async function GET() {
    return Response.json(sign_up);
}

export async function POST(request: Request) {
    const subscription = await request.json();
    delete subscription.validate;
    const newSubscription = {
        id: sign_up.length + 1,
        details: subscription,
    };
    sign_up.push(newSubscription);
    return new Response(JSON.stringify(newSubscription), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}