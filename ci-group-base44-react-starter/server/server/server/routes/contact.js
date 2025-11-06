import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/', async (req, res) => {
  const data = req.body;

  try {
    const response = await fetch('https://app.base44.com/api/apps/68f62e8256237e5074a9c135/entities/ConsultationRequest', {
      method: 'POST',
      headers: {
        'api_key': process.env.BASE44_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    res.status(200).json({ success: true, message: 'Demande envoyée avec succès.', result });
  } catch (error) {
    console.error('Erreur lors de l’envoi à Base44 :', error);
    res.status(500).json({ success: false, message: 'Une erreur est survenue.', error: error.message });
  }
});

export default router;
