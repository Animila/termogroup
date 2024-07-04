import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server';
export async function POST(request) {
    const { html, title } = await request.json();
    const r2 = await sendMail(html, title)
    if (r2?.messageId) {
        return NextResponse.json({ ok: true })
    } else {
        return NextResponse.json({ ok: false, message: "Сообщение не отправлено" })
    }
}

async function sendMail(html, title) {
    const transporter = nodemailer.createTransport({
        service: "gmail", // С помощью этой настройки можно менять тип почты, например gmail
        auth: {
            user: process.env.HOTMAIL_USER,
            pass: process.env.HOTMAIL_PASS,
        },
    })

    return await transporter.sendMail({
        from: process.env.HOTMAIL_USER,
        to: process.env.HOTMAIL_TO,
        subject: title,
        html: html,
    })
}