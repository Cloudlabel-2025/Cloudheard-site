import nodemailer from "nodemailer";
import Busboy from "busboy";

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "POST method only" });
  }

  let attachment = null;
  const busboy = Busboy({ headers: req.headers });

  busboy.on("file", (name, file, info) => {
    const { filename, mimeType } = info;
    const chunks = [];

    if (
      ![
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "video/mp4",
      ].includes(mimeType)
    ) {
      res.writeHead(400, { Connection: "close" });
      res.end(JSON.stringify({ message: "Invalid file type" }));
      file.resume(); 
      return;
    }

    file.on("data", (data) => {
      chunks.push(data);
    });

    file.on("end", () => {
      attachment = {
        filename,
        content: Buffer.concat(chunks),
        contentType: mimeType,
      };
    });
  });

  busboy.on("finish", async () => {
    try {
      if (!attachment) {
        return res.status(400).json({ message: "No valid file uploaded" });
      }

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user:"kavin.srkv@gmail.com", 
          pass:"szks hjga mngr ojes",
        },
      });

      await transporter.sendMail({
        from: "kavin.srkv@gmail.com",
        to: "cloudlabel@cloudheard.org",
        subject: "New File Uploaded",
        text: "A file has been uploaded. See attachment.",
        attachments: [attachment],
      });

      res.status(200).json({ message: "Sent Successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Sending failed" });
    }
  });

  req.pipe(busboy);
}
