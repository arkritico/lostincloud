export interface TeamMember {
  code: string;
  name: string;
  role: { pt: string; en: string };
  institution: string;
  education: string;
  orcid?: string;
  expertise: { pt: string; en: string }[];
}

export const team: TeamMember[] = [
  {
    code: 'MBR.01',
    name: 'Cristina Cruz Houghton',
    role: { pt: 'Cofundadora · Diretora Científica', en: 'Co-founder · Scientific Director' },
    institution: 'FCUL / cE3c',
    education: 'PhD Ecology, Universidade de Lisboa',
    orcid: '0000-0003-3100-463X',
    expertise: [
      { pt: 'Interações Planta-Solo-Microrganismo', en: 'Plant-Soil-Microbe Interactions' },
      { pt: 'Dinâmica do Azoto', en: 'Nitrogen Dynamics' },
      { pt: 'Simbioses Micorrízicas', en: 'Mycorrhizal Symbioses' },
      { pt: 'Design de Inoculantes Microbianos', en: 'Microbial Inoculant Design' },
    ],
  },
  {
    code: 'MBR.02',
    name: 'Juliana Melo',
    role: { pt: 'Gestora de I&D', en: 'R&D Manager' },
    institution: 'FCUL / cE3c',
    education: 'PhD Ecosystem Ecology, Univ. Vila Velha',
    orcid: '0000-0003-3100-463X',
    expertise: [
      { pt: 'Microbiologia do Solo', en: 'Soil Microbiology' },
      { pt: 'PGPMs e Biofertilizantes', en: 'PGPMs & Biofertilizers' },
      { pt: 'Fungos Micorrízicos', en: 'Mycorrhizal Fungi' },
      { pt: 'Ecologia da Rizosfera', en: 'Rhizosphere Ecology' },
    ],
  },
  {
    code: 'MBR.03',
    name: 'Ana Santos',
    role: { pt: 'Assistente de Investigação', en: 'Research Assistant' },
    institution: 'FCUL / cE3c (PhD student)',
    education: 'MSc Applied Microbiology, ULisboa',
    orcid: '0009-0007-9015-0529',
    expertise: [
      { pt: 'Ecologia Microbiana da Rizosfera', en: 'Rhizosphere Microbial Ecology' },
      { pt: 'Consórcios Microbianos', en: 'Microbial Consortia' },
      { pt: 'Antagonismo de Fungos Fitopatogénicos', en: 'Phytopathogenic Fungi Antagonism' },
      { pt: 'Otimização do Microbioma de Sementes', en: 'Seed Microbiome Optimization' },
    ],
  },
  {
    code: 'MBR.04',
    name: 'Rui Santos',
    role: { pt: 'Assistente de Investigação · Engenharia IoT', en: 'Research Assistant · IoT Engineering' },
    institution: 'ISPGAYA',
    education: 'BSc Electronics & Automation, ISPGAYA',
    expertise: [
      { pt: 'Sistemas de Monitorização IoT', en: 'IoT Monitoring Systems' },
      { pt: 'Comunicações LoRa/MQTT', en: 'LoRa/MQTT Communications' },
      { pt: 'Sistemas Fotovoltaicos', en: 'Photovoltaic Systems' },
      { pt: 'Automação Agrícola', en: 'Agricultural Automation' },
    ],
  },
  {
    code: 'MBR.05',
    name: 'Kamran Azmaliyev',
    role: { pt: 'Assistente de Investigação', en: 'Research Assistant' },
    institution: 'IST / ULisboa',
    education: 'MSc Biotechnology, IST/ULisboa',
    expertise: [
      { pt: 'Engenharia Genética', en: 'Genetic Engineering' },
      { pt: 'Fixação de Azoto', en: 'Nitrogen Fixation' },
      { pt: 'Compostos Antimicrobianos', en: 'Antimicrobial Compounds' },
      { pt: 'Técnicas de PCR', en: 'PCR Techniques' },
    ],
  },
];
