export interface Product {
  code: string;
  name: string;
  status: 'available' | 'development';
  description: { pt: string; en: string };
  benefits: { pt: string; en: string }[];
}

export const products: Product[] = [
  {
    code: 'PRD.01',
    name: 'BioPrime-Gel',
    status: 'available',
    description: {
      pt: 'Bioestimulante e agente de priming vegetal de nova geração, formulado para ativar mecanismos naturais de defesa das plantas antes do stress. Powered by Bacillus amyloliquefaciens (≥10⁸ CFU/mL).',
      en: 'Next-generation biostimulant and plant priming agent, formulated to activate natural plant defense mechanisms before stress hits. Powered by Bacillus amyloliquefaciens (≥10⁸ CFU/mL).',
    },
    benefits: [
      { pt: 'Estabelecimento mais forte de plântulas', en: 'Stronger seedling establishment' },
      { pt: 'Recuperação acelerada do stress', en: 'Faster stress recovery' },
      { pt: 'Melhoria da saúde radicular', en: 'Improved root health' },
      { pt: 'Redução de inputs químicos', en: 'Reduced chemical inputs' },
    ],
  },
  {
    code: 'PRD.02',
    name: 'InsideSeed™',
    status: 'development',
    description: {
      pt: 'Plataforma pioneira de biofertilização que utiliza o pólen como vetor biológico para introduzir microrganismos benéficos em sementes em desenvolvimento, criando sementes pré-equipadas com parceiros microbianos.',
      en: 'Pioneering biofertilizer platform that uses pollen as a biological vector to introduce beneficial microorganisms into developing seeds, creating seeds pre-equipped with microbial partners.',
    },
    benefits: [
      { pt: 'Germinação e emergência melhoradas', en: 'Enhanced germination and emergence' },
      { pt: 'Tolerância melhorada à seca', en: 'Improved drought tolerance' },
      { pt: 'Suscetibilidade reduzida a patogénios', en: 'Reduced pathogen susceptibility' },
      { pt: 'Menor dependência de fertilizantes', en: 'Lower fertilizer dependency' },
    ],
  },
];
