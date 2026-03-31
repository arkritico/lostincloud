export interface Project {
  code: string;
  name: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  status: 'active' | 'completed';
  timeline: string;
  budget?: string;
  euIncentive?: string;
  partners: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    code: 'PRJ.01',
    name: 'AgAPP-e',
    title: {
      pt: 'Analisador Digital da Produção Agrícola para Eficiência do Fósforo',
      en: "Agriculture's Digital Analyzer of Production for Phosphorus Efficiency",
    },
    description: {
      pt: 'Automatização e digitalização do balanço de fósforo (P) e rastreamento de fluxos de nutrientes para melhorar estratégias de gestão de nutrientes à escala da exploração e nacional.',
      en: 'Automating and digitalizing phosphorus (P) balance calculations and nutrient flow tracking to improve farm-scale and national nutrient management strategies.',
    },
    status: 'active',
    timeline: 'Jan 2025 – Dez 2027',
    budget: 'k€ 112',
    euIncentive: 'k€ 45',
    partners: ['Experteam', 'Dogus University', 'Ardic', 'TABIT', 'Move ON', 'Globaz', 'FCUL'],
    featured: true,
  },
  {
    code: 'PRJ.02',
    name: 'BIOFERTILÃ',
    title: {
      pt: 'Biofilme Fertilizante à Base de Lã e Resíduos Agroflorestais',
      en: 'Fertilizing Biofilm from Wool and Agroforestry Waste',
    },
    description: {
      pt: 'Desenvolvimento de biofilme biodegradável inovador e multifuncional para mitigar as alterações climáticas, reduzir o uso de plásticos na agricultura e valorizar resíduos.',
      en: 'Development of an innovative, multifunctional biodegradable biofilm to mitigate climate change, reduce plastic use in agriculture, and valorize waste.',
    },
    status: 'active',
    timeline: 'Jan 2026 – Dez 2029',
    budget: 'k€ 534',
    euIncentive: 'k€ 269',
    partners: ['Solutopus', 'Vivid Foods Farms', 'FCUL'],
  },
  {
    code: 'PRJ.03',
    name: 'BioNIR',
    title: {
      pt: 'Determinação de Características do Solo e Plantas em Tempo Real via Vis-NIR',
      en: 'Real-Time Soil and Plant Characterization via Vis-NIR Technology',
    },
    description: {
      pt: 'Utilização de reflectância para trazer ao mercado um serviço de avaliação simultânea e em tempo real da qualidade do solo, estado nutricional, presença de pesticidas e patogénios.',
      en: 'Using reflectance to bring to market a real-time, simultaneous assessment service for soil quality, crop nutrition, pesticides, and pathogens.',
    },
    status: 'active',
    timeline: 'Jun 2025 – Jun 2027',
    budget: 'k€ 270',
    euIncentive: 'k€ 183',
    partners: [],
  },
  {
    code: 'PRJ.04',
    name: 'DryBound',
    title: {
      pt: 'Consórcio Microbiano Sintético Co-desenhado pela Seca e Plantas de Tomate',
      en: 'Synthetic Microbial Consortium Co-designed by Drought and Tomato Plants',
    },
    description: {
      pt: 'Utilização de microbiomas de espécies vegetais mediterrânicas adaptadas à seca para reforçar a resistência das culturas à escassez de água.',
      en: 'Using microbiomes from drought-adapted Mediterranean plant species to enhance crop resistance to water scarcity.',
    },
    status: 'active',
    timeline: 'Set 2024 – Set 2028',
    budget: 'k€ 77',
    euIncentive: 'k€ 77',
    partners: ['FCUL'],
  },
  {
    code: 'PRJ.05',
    name: 'Serendipita williamsii',
    title: {
      pt: 'Serendipita williamsii como Seletora de Bactérias sob Condições de Stress',
      en: 'Serendipita williamsii as a Selector of Bacteria under Stress Conditions',
    },
    description: {
      pt: 'Compreender se diferentes condições de stress podem moldar a comunidade bacteriana associada ao fungo e influenciar o recrutamento de microrganismos mais adaptados.',
      en: 'Understanding whether different stress conditions can shape the bacterial community associated with the fungus and influence recruitment of better-adapted microorganisms.',
    },
    status: 'completed',
    timeline: 'Jan 2024 – Ago 2024',
    budget: '€ 25K',
    partners: ['Trichodex'],
  },
  {
    code: 'PRJ.06',
    name: 'Pirigene',
    title: {
      pt: 'Genómica Comparativa de Piriformospora e Interação com Bacillus velezensis',
      en: 'Comparative Genomics of Piriformospora and Interaction with Bacillus velezensis',
    },
    description: {
      pt: 'Análise comparativa dos genomas completos de Piriformospora indica e P. williamsii e quantificação da interação com Bacillus velezensis.',
      en: 'Comparative analysis of complete genomes of Piriformospora indica and P. williamsii, and quantification of interaction with Bacillus velezensis.',
    },
    status: 'active',
    timeline: 'Jun 2025 – Jul 2025',
    budget: '€ 13K',
    partners: ['Trichodex'],
  },
  {
    code: 'PRJ.07',
    name: 'Agricultura Luso-Brasileira',
    title: {
      pt: 'Transformação da Agricultura Luso-Brasileira através da Inovação em Biofertilizantes',
      en: 'Transforming Portuguese-Brazilian Agriculture through Biofertilizer Innovation',
    },
    description: {
      pt: 'Co-desenvolvimento e comercialização de uma nova classe de biofertilizantes personalizados para agricultura biológica e sustentável.',
      en: 'Co-development and commercialization of a new class of customized biofertilizers for organic and sustainable agriculture.',
    },
    status: 'active',
    timeline: 'Jan 2025 – Dez 2025',
    budget: 'k€ 10',
    euIncentive: 'k€ 10',
    partners: ['SymbioTech (Brazil)'],
  },
  {
    code: 'PRJ.08',
    name: 'Fight Desert',
    title: {
      pt: 'Combate à Desertificação',
      en: 'Fighting Desertification',
    },
    description: {
      pt: 'Mitigação da desertificação através de soluções biológicas e parcerias com autarquias e empresas agroflorestais.',
      en: 'Desertification mitigation through biological solutions and partnerships with municipalities and agroforestry companies.',
    },
    status: 'completed',
    timeline: 'Jun 2022 – Dez 2023',
    partners: ['Município de Grândola', 'FCUL', 'EDIA', 'Companhia das Lezírias', 'Ferrarias de Baixo', 'Globalmoza'],
  },
];
