import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data', 'offers.json');

export async function GET(request) {
    const jsonData = await fs.readFile(dataFilePath);
    const stocks = JSON.parse(jsonData);
    return new Response(JSON.stringify(stocks), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request) {
    const newStocks = await request.json();
    await fs.writeFile(dataFilePath, JSON.stringify(newStocks, null, 2));
    return new Response(JSON.stringify(newStocks), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
