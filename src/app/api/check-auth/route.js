import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
const secret = 'ifjfg5oi4gvj5imtb';

export async function GET(request) {
    const token = request.cookies.get('token')?.value;
    if (!token) {
        return new Response('Unauthorized', { status: 401 });
    }

    try {
        jwt.verify(token, secret);
        return NextResponse.json({ authenticated: true });
    } catch (err) {
        console.log(err)
        return new Response('Unauthorized', { status: 401 });
    }
}