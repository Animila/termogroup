export async function POST(request) {
    const { username, password } = await request.json();
    const transporter = nodemailer.createTransport({
        service: "hotmail", // С помощью этой настройки можно менять тип почты, например gmail
        auth: {
            user: process.env.HOTMAIL_USER,
            pass: process.env.HOTMAIL_PASS,
        },
    })

}