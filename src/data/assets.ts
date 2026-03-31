export interface LabAsset {
  name: string;
  description: { pt: string; en: string };
  icon: string;
}

export const assets: LabAsset[] = [
  {
    name: 'NIR Spectrophotometer',
    description: {
      pt: 'Combinação HR-4XR300 + NIRQuest+2.5 (Ocean Insight), capaz de detetar radiação refletida entre 400–2500 nm (visível ao infravermelho próximo).',
      en: 'HR-4XR300 + NIRQuest+2.5 combination (Ocean Insight), detecting reflected radiation from 400–2500 nm (visible to near-infrared).',
    },
    icon: 'spectroscopy',
  },
  {
    name: 'OxiTop Respirometric System',
    description: {
      pt: 'Sistema de medição da intensidade de respiração do solo. Mede o consumo de oxigénio pela respiração de microrganismos aeróbios na amostra.',
      en: 'Soil respiration intensity measurement system. Measures oxygen consumption from aerobic microbe respiration in the sample.',
    },
    icon: 'respirometry',
  },
  {
    name: 'PGPM Collection',
    description: {
      pt: 'Mais de 200 microrganismos promotores do crescimento vegetal (PGPMs): fixadores de azoto, solubilizadores de fósforo, AMF, PGPR e agentes de biocontrolo.',
      en: 'Over 200 plant growth-promoting microorganisms (PGPMs): nitrogen fixers, phosphorus solubilizers, AMF, PGPR, and biocontrol agents.',
    },
    icon: 'collection',
  },
];
