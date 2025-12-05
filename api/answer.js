export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const data = req.body;

    console.log("Someone clicked:", data);

    return res.status(200).json({ status: "received", data: data });
}
