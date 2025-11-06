export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }

  try {
    const response = await fetch('https://app.base44.com/api/apps/68f62e8256237e5074a9c135/entities/ConsultationRequest', {
      method: 'POST',
      headers: {
        'api_key': process.env.BASE44_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message || 'Erreur lors de l’envoi vers Base44');
    }

    res.status(200).json({ success: true, message: 'Demande envoyée avec succès.', result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
