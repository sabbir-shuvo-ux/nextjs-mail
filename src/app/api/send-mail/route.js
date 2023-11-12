import { transporter, mailOptions } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const data = await request.json();

    await transporter.sendMail({
      ...mailOptions,
      subject: "My Applications Contact Form",
      text: "Hello there",
      html: `<h1>Mail from nextjs mail testing website</h1><h3><a href="mailto:${data.email}">${data.email}</a></h3><h3>${data.subject}</h3><h3>${data.message}</h3>`,
    });

    return NextResponse.json(
      {
        sucess: true,
        message: "mail sended successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { sucess: false, message: err.message },
      { status: 500 }
    );
  }
};
