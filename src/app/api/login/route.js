import { promises as fs } from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'users.json');
const secret = 'ifjfg5oi4gvj5imtb';
export async function POST(request) {
    const { username, password } = await request.json();
    const jsonData = await fs.readFile(dataFilePath);
    const users = JSON.parse(jsonData);

    const user = users.find(u => u.email === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username }, secret, { expiresIn: '30d' });
        const response = NextResponse.json({ success: true });
        response.headers.set('Set-Cookie', `token=${token}; HttpOnly; Path=/`);
        return response;
        return NextResponse.json({ success: true });
    } else {
        return new Response('Invalid credentials', { status: 401 });
    }
}
