import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Zap,
  Clock,
  Linkedin,
  User,
  Building2,
  MessageSquare,
  UsersIcon,
  Video
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import SEO, { getOrganizationSchema } from "../components/SEO";

// Pour un site 100% fonctionnel sans erreur :
// On enlève l'import et l'appel aux fonctions Analytics si elles posent problème

export default function Contact() {
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedPack = urlParams.get('pack');

  const [formData, setFormData] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    pack_selected: preselectedPack || "",
    accelerated_delivery: false,
    message: "",
    selected_timeslot_id: "",
    meeting_date: "",
    zoom_link: ""
  });

  const [success, setSuccess] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const createRequestMutation = useMutation({
    mutationFn: async (data) => {
      const request = await base44.entities.ConsultationRequest.create(data);
      if (data.selected_timeslot_id) {
        await base44.entities.TimeSlot.update(data.selected_timeslot_id, {
          is_available: false,
          booked_by_email: data.email,
          booked_by_name: data.contact_name,
          consultation_request_id: request.id
        });
      }
      return request;
    },
    onSuccess: () => {
      setSuccess(true);
      setFormData({
        company_name: "",
        contact_name: "",
        email: "",
        phone: "",
        pack_selected: "",
        accelerated_delivery: false,
        message: "",
        selected_timeslot_id: "",
        meeting_date: "",
        zoom_link: ""
      });
      setSelectedTimeSlot(null);
    }
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectTimeSlot = (slot) => {
    setSelectedTimeSlot(slot);
    setFormData(prev => ({
      ...prev,
      selected_timeslot_id: slot.id,
      meeting_date: `${slot.date} ${slot.start_time}`,
      zoom_link: slot.zoom_link || ""
    }));
  };

  const packPrices = {
    bronze: { standard: "2 500€", accelerated: "3 250€" },
    silver: { standard: "5 500€", accelerated: "7 150€" },
    gold: { standard: "12 000€", accelerated: "15 600€" },
    sur_mesure: { standard: "Sur devis", accelerated: "Sur devis" }
  };

  // On peut aussi temporairement désactiver le TimeSlotPicker si nécessaire

  return (
    <div className="min-h-screen py-16">
      <SEO
        title="Contact CI GROUP - Demande de Devis Gratuit"
        description="Contactez CI GROUP pour un devis personnalisé. Réponse garantie sous 24h."
        keywords="contact, stratégie, marketing, transformation digitale"
        canonicalUrl={window.location.href}
        jsonLd={getOrganizationSchema()}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10 text-center">Contactez-nous</h1>
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle>Formulaire de contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => {
              e.preventDefault();
              createRequestMutation.mutate({ ...formData, status: "nouveau" });
            }}>
              {/* Champs à afficher ici... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nom de l'entreprise"
                  value={formData.company_name}
                  onChange={(e) => handleChange("company_name", e.target.value)}
                />
                <Input
                  placeholder="Nom du contact"
                  value={formData.contact_name}
                  onChange={(e) => handleChange("contact_name", e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <Input
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
              <Textarea
                className="mt-4"
                placeholder="Décrivez votre besoin"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
              <Button type="submit" className="mt-6 w-full">
                {createRequestMutation.isPending ? "Envoi en cours..." : "Envoyer"}
              </Button>
              {createRequestMutation.isError && (
                <Alert variant="destructive" className="mt-4">
                  <AlertDescription>Une erreur s'est produite. Veuillez réessayer.</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
