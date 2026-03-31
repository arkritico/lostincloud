export interface Award {
  name: { pt: string; en: string };
  organization: string;
  description: { pt: string; en: string };
}

export const awards: Award[] = [
  {
    name: {
      pt: 'Prémio Europeu de Sustentabilidade',
      en: 'European Sustainability Award',
    },
    organization: 'Generali Tranquilidade',
    description: {
      pt: 'Distinção pelo desenvolvimento do Kiplant Endofit, produto biotecnológico inovador que melhora a proteção e crescimento das plantas através da promoção de atividade microbiana benéfica no solo. Colaboração com a Asfertglobal.',
      en: 'Recognition for the development of Kiplant Endofit, an innovative biotechnological product that enhances plant protection and growth by promoting beneficial microbial activity in the soil. Collaboration with Asfertglobal.',
    },
  },
  {
    name: {
      pt: 'Prémio de Inovação SFColab',
      en: 'SFColab Innovation Award',
    },
    organization: 'Smart Farm 4.0',
    description: {
      pt: 'Projeto colaborativo com 16 parceiros para desenvolver soluções inteligentes para agricultura sustentável, preditiva e autónoma, integrando IoT, IA e big data.',
      en: 'Collaborative project with 16 partners to develop intelligent solutions for sustainable, predictive, and autonomous agriculture, integrating IoT, AI, and big data.',
    },
  },
];
