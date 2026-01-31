import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    await connect();

    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      phone: (phone || "").trim(),
      message: (message || "").trim(),
    });

    return NextResponse.json({
      success: true,
      id: contact._id.toString(),
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    if (error.name === "ValidationError") {
      const msg = Object.values(error.errors)
        .map((e) => e.message)
        .join(", ");
      return NextResponse.json(
        { success: false, error: msg },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Failed to save message. Please try again." },
      { status: 500 }
    );
  }
}
