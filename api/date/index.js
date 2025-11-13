export default function handler(req, res) {
  const now = new Date();
  res.status(200).json({
    utc_date: now.toISOString().split("T")[0],
    utc_datetime: now.toISOString(),
    local_date: now.toLocaleDateString("en-CA"),
    local_datetime: now.toISOString(), // LLM-safe
    unix_epoch: Math.floor(now.getTime() / 1000),
    readable: now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    })
  });
}
