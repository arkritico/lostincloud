export interface Service {
  code: string;
  name: string;
  description: { pt: string; en: string };
  capabilities: { pt: string; en: string }[];
}

export const services: Service[] = [
  {
    code: 'SRV.01',
    name: 'BioID',
    description: {
      pt: 'Identificação molecular precisa de microrganismos associados a culturas, utilizando tecnologia de DNA barcoding e sequenciação completa do genoma via Nanopore, garantindo rastreabilidade e prevenção de fraude.',
      en: 'Precise molecular identification of crop-associated microorganisms using DNA barcoding technology and Nanopore whole genome sequencing, ensuring traceability and fraud prevention.',
    },
    capabilities: [
      { pt: 'DNA Barcoding', en: 'DNA Barcoding' },
      { pt: 'Sequenciação Genómica', en: 'Genome Sequencing' },
      { pt: 'Análise Filogenética', en: 'Phylogenetic Analysis' },
      { pt: 'Identificação de Espécies', en: 'Species Identification' },
    ],
  },
  {
    code: 'SRV.02',
    name: 'SoilCheck',
    description: {
      pt: 'Diagnóstico avançado da qualidade do solo através da análise de atividade enzimática e microbiológica — indicadores-chave da saúde e fertilidade do solo — para detetar alterações na funcionalidade e otimizar práticas agrícolas.',
      en: 'Advanced soil quality diagnostics through enzymatic and microbiological activity analysis — key indicators of soil health and fertility — to detect changes in soil functionality and optimize agricultural practices.',
    },
    capabilities: [
      { pt: 'Atividade Enzimática', en: 'Enzymatic Activity' },
      { pt: 'Quantificação Microbiana', en: 'Microbial Quantification' },
      { pt: 'Deteção de PGPMs', en: 'PGPM Detection' },
      { pt: 'Avaliação Micorrízica', en: 'Mycorrhizal Assessment' },
    ],
  },
  {
    code: 'SRV.03',
    name: 'PhytoTrace',
    description: {
      pt: 'Deteção e caracterização de patogénios do solo e microrganismos fitopatogénicos baseada em PCR, com avaliação de risco e protocolo de tratamento.',
      en: 'PCR-based detection and characterization of soil pathogens and phytopathogenic microorganisms, with risk assessment and treatment protocol.',
    },
    capabilities: [
      { pt: 'Deteção por PCR', en: 'PCR Detection' },
      { pt: 'Identificação de Patogénios', en: 'Pathogen ID' },
      { pt: 'Avaliação de Risco', en: 'Risk Assessment' },
      { pt: 'Protocolo de Tratamento', en: 'Treatment Protocol' },
    ],
  },
  {
    code: 'SRV.04',
    name: 'HortoScan',
    description: {
      pt: 'Avaliação da qualidade de frutas e vegetais, medindo parâmetros críticos que influenciam o prazo de validade, sabor e valor comercial: firmeza, teor de açúcar (°Brix), pH e níveis de nitratos.',
      en: 'Fruit and vegetable quality assessment measuring critical parameters that influence shelf life, taste, and marketability: firmness, sugar content (°Brix), pH, and nitrate levels.',
    },
    capabilities: [
      { pt: 'Teste de Firmeza', en: 'Firmness Testing' },
      { pt: 'Análise de Brix', en: 'Brix Analysis' },
      { pt: 'Medição de pH', en: 'pH Measurement' },
      { pt: 'Quantificação de Nitratos', en: 'Nitrate Quantification' },
    ],
  },
  {
    code: 'SRV.05',
    name: 'BioNIR',
    description: {
      pt: 'Espectroscopia Vis-NIR (400–2500 nm) para avaliação em tempo real da qualidade do solo, estado nutricional das culturas, presença de pesticidas, micotoxinas, microplásticos e patogénios.',
      en: 'Vis-NIR spectroscopy (400–2500 nm) for real-time assessment of soil quality, crop nutritional status, presence of pesticides, mycotoxins, microplastics, and pathogens.',
    },
    capabilities: [
      { pt: 'Matéria Orgânica do Solo', en: 'Soil Organic Matter' },
      { pt: 'Nutrição Vegetal', en: 'Crop Nutrition' },
      { pt: 'Análise de Humidade', en: 'Moisture Analysis' },
      { pt: 'Deteção de Patogénios', en: 'Pathogen Detection' },
    ],
  },
  {
    code: 'SRV.06',
    name: 'Drone Surveys',
    description: {
      pt: 'Inteligência aérea para a agricultura: ortofotografia RGB de alta resolução, modelos de terreno 3D, mapeamento multispectral NDVI e reconstrução por Gaussian Splatting.',
      en: 'Aerial intelligence for agriculture: high-resolution RGB orthophotography, 3D terrain models, multispectral NDVI mapping, and Gaussian Splatting reconstruction.',
    },
    capabilities: [
      { pt: 'Ortofoto RGB', en: 'RGB Orthophoto' },
      { pt: 'Modelo de Terreno 3D', en: '3D Terrain Model' },
      { pt: 'NDVI Multispectral', en: 'Multispectral NDVI' },
      { pt: 'Gaussian Splatting', en: 'Gaussian Splatting' },
    ],
  },
];
