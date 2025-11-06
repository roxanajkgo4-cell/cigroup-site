import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Target,
  TrendingUp,
  Megaphone,
  Palette,
  Users,
  Database,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Award,
  BarChart3,
  Lightbulb,
  Rocket
} from "lucide-react";
import SEO, { getOrganizationSchema } from "../components/SEO";

export default function Accueil() {
  return (
    <div className="min-h-screen">
      <SEO
        title="CI GROUP - Conseil en Stratégie Marketing & Transformation Digitale | Nice"
        description="Expert en stratégie marketing et transformation digitale pour PME. Méthodologie éprouvée, résultats mesurables. Accompagnement personnalisé à Nice et en France."
        keywords="conseil stratégie, marketing digital, transformation digitale, consultant PME, stratégie marketing, Nice, France, croissance entreprise, accompagnement PME"
        canonicalUrl={window.location.href}
        jsonLd={getOrganizationSchema()}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-4 py-1">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Votre partenaire stratégique
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Votre stratégie,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Notre expertise
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Accélérez votre croissance avec des stratégies marketing, digitales et commerciales sur-mesure.
                Des solutions concrètes pour transformer vos ambitions en résultats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Contact")}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl w-full sm:w-auto"
                    onClick={() => {}}
                  >
                    Contactez-nous
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("NosServices")}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    onClick={() => {}}
                  >
                    Découvrir nos solutions
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="float-animation">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Stratégie d'entreprise"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">+35%</p>
                    <p className="text-sm text-gray-600">Croissance moyenne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
