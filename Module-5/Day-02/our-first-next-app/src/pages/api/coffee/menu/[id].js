export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    res.status(200).json({ id, name: "pour over" });
  } else {
    res.status(404).json({ message: "not found" });
  }
}
