const { onRequest } = require("firebase-functions/v2/https");

exports.chatkitSession = onRequest({ cors: true, region: "us-central1", secrets: ["OPENAI_API_KEY"] }, async (req, res) => {
  try {
    if (req.method !== "POST") { res.status(405).send("Method Not Allowed"); return; }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) { res.status(500).json({ error: "Missing OPENAI_API_KEY" }); return; }

    const deviceId = (req.body && (req.body.user || req.body.deviceId)) || "anonymous";

    const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "OpenAI-Beta": "chatkit_beta=v1",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        workflow: { id: "wf_69039d9633ac8190aabba5c3ee297cc70ce212b517da778d" },
        user: deviceId
      })
    });

    const data = await response.json();
    if (!response.ok) { res.status(response.status).json(data); return; }
    if (!data || !data.client_secret) { res.status(500).json({ error: "Failed to obtain client_secret" }); return; }

    res.status(200).json({ client_secret: data.client_secret });
  } catch (e) {
    res.status(500).json({ error: e && e.message ? e.message : String(e) });
  }
});


