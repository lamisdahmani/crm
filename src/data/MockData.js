export const mockKPIData = [
  {
    id: 1,
    title: "Montant Total des Envois",
    value: "2847500 DA",
    percentage: "+12.5%",
    icon: "TrendingUp",
    color: "greenAccent",
    isPositive: true
  },
  {
    id: 2,
    title: "Nombre Total de Clients",
    value: "15847",
    percentage: "+8.2%",
    icon: "Group",
    color: "blueAccent",
    isPositive: true
  },
  {
    id: 3,
    title: "Nombre de Colis Livrés",
    value: "89234",
    percentage: "+15.3%",
    icon: "LocalShipping",
    color: "redAccent",
    isPositive: true
  }
];

export const mockLineChartData = [
  {
    id: "B2B",
    color: "#dc2626",
    data: [
      { x: "Jan", y: 120000 },
      { x: "Fév", y: 135000 },
      { x: "Mar", y: 148000 },
      { x: "Avr", y: 162000 },
      { x: "Mai", y: 175000 },
      { x: "Jun", y: 185000 }
    ]
  },
  {
    id: "B2C",
    color: "#2563eb",
    data: [
      { x: "Jan", y: 85000 },
      { x: "Fév", y: 88000 },
      { x: "Mar", y: 92000 },
      { x: "Avr", y: 98000 },
      { x: "Mai", y: 105000 },
      { x: "Jun", y: 112000 }
    ]
  },
  {
    id: "C2C",
    color: "#16a34a",
    data: [
      { x: "Jan", y: 45000 },
      { x: "Fév", y: 47000 },
      { x: "Mar", y: 51000 },
      { x: "Avr", y: 53000 },
      { x: "Mai", y: 55000 },
      { x: "Jun", y: 58000 }
    ]
  }
];

export const mockPieChartData = [
  {
    id: "B2B",
    label: "B2B",
    value: 45,
    color: "#dc2626"
  },
  {
    id: "B2C",
    label: "B2C", 
    value: 35,
    color: "#2563eb"
  },
  {
    id: "C2C",
    label: "C2C",
    value: 20,
    color: "#16a34a"
  }
];

export const mockFilterData = {
  regions: ["Toutes régions", "Nord", "Centre", "Est", "Ouest"],
  wilayas: [
    "Toutes les wilaya", "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", 
    "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", 
    "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", 
    "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", 
    "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", 
    "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", 
    "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", 
    "Ouled Djellal", "Béni Abbès", "In Salah", "In Guezzam", "Touggourt", "Djanet", 
    "El M'Ghair", "El Meniaa"
  ],
  stations: [
    "Toutes stations", "Station Alger Centre", "Station Oran Ouest", 
    "Station Constantine Est", "Station Annaba Nord"
  ]
};

// B2C Data - Clients Fidèles
export const clientsData = [
  {
    id: 1,
    name: "Amina Benaissa",
    commandes: 45,
    montant: "2500 DA"
  },
  {
    id: 2,
    name: "Karim Meziane",
    commandes: 38,
    montant: "1800 DA"
  },
  {
    id: 3,
    name: "Fatima Cherif",
    commandes: 42,
    montant: "2200 DA"
  }
];

// B2C Data - Clients Dormants
export const clientsDormantsData = [
  {
    id: 1,
    name: "Yacine Boudiaf",
    derniereCommande: "2023-09-15",
    joursInactif: 128
  },
  {
    id: 2,
    name: "Samira Khelifi",
    derniereCommande: "2023-08-22",
    joursInactif: 152
  },
  {
    id: 3,
    name: "Rachid Mammeri",
    derniereCommande: "2023-10-03",
    joursInactif: 110
  }
];

// B2C Data - Panier Moyen & Fréquence
export const panierFrequenceData = [
  { month: "Jan", panierMoyen: 1800, frequence: 2.3 },
  { month: "Fév", panierMoyen: 1900, frequence: 2.5 },
  { month: "Mar", panierMoyen: 2100, frequence: 2.7 },
  { month: "Avr", panierMoyen: 2000, frequence: 2.6 },
  { month: "Mai", panierMoyen: 2200, frequence: 2.9 },
  { month: "Jun", panierMoyen: 2400, frequence: 3.2 }
];

// B2B Data - Top Entreprises
export const topEntreprises = [
  {
    id: 1,
    name: "Condor Electronics",
    rank: 1,
    value: "188 000 DA",
    month: "Juin 2024"
  },
  {
    id: 2,
    name: "Samsung Algeria",
    rank: 2,
    value: "118 000 DA",
    month: "Juin 2024"
  },
  {
    id: 3,
    name: "LG Electronics",
    rank: 3,
    value: "98 000 DA",
    month: "Juin 2024"
  },
  {
    id: 4,
    name: "Haier Algeria",
    rank: 4,
    value: "84 000 DA",
    month: "Juin 2024"
  }
];

// B2B Data - Evolution Valeur Mensuelle
export const evmData = [
  { month: "Jan", value: 340000 },
  { month: "Fév", value: 360000 },
  { month: "Mar", value: 390000 },
  { month: "Avr", value: 420000 },
  { month: "Mai", value: 450000 },
  { month: "Jun", value: 480000 }
];

//Carte de Chaleur des Envois C2C
export const c2cChartData = [
  { month: "Alger", value: 12456 },
  { month: "Oran", value: 8934 },
  { month: "Constantine", value: 6789 },
  { month: "Annaba", value: 4567 },
  { month: "Blida", value: 3892 },
  { month: "Sétif", value: 3456 },
  { month: "Tlemcen", value: 2890 },
  { month: "Béjaïa", value: 2567 },
];

 export const c2cCards = [
  { 
    name: "Alger", 
    envois: 12456, 
    intensite: 100, 
    niveau: "Très élevée" 
  },
 { 
    name: "Oran", 
    envois: 8934, 
    intensite: 72, 
    niveau: "Élevée" 
  },
  { 
    name: "Constantine", 
    envois: 6789, 
    intensite: 55, 
    niveau: "Moyenne" 
  },
  { 
    name: "Annaba", 
    envois: 4567, 
    intensite: 37, 
    niveau: "Faible" 
  },
  { 
    name: "Blida", 
    envois: 3892, 
    intensite: 31, 
    niveau: "Faible" 
  },
  { 
    name: "Sétif", 
    envois: 3456, 
    intensite: 28, 
    niveau: "Faible" 
  },
  { 
    name: "Tlemcen", 
    envois: 2890, 
    intensite: 23, 
    niveau: "Faible" 
  },
   { 
    name: "Béjaïa", 
    envois: 2567, 
    intensite: 21, 
    niveau: "Faible" 
  },
];
// B2B Segmentation Data
export const b2bSegmentationData = {
  totalClients: 150,
  combinaisons: 27,
  topSegments: [
    { 
      label: "Très récent – Fréquent – Gros compte", 
      value: 45, 
      percentage: 30 
    },
    { 
      label: "Très récent – Régulier – Moyen compte", 
      value: 38, 
      percentage: 25 
    },
    { 
      label: "Moyen – Fréquent – Gros compte", 
      value: 30, 
      percentage: 20 
    }
  ]
};

// B2C Segmentation Data
export const b2cSegmentationData = {
  totalClients: 5420,
  combinaisons: 125,
  topSegments: [
    { 
      label: "5-5-5 (Gold)", 
      value: 542, 
      percentage: 10 
    },
    { 
      label: "4-4-4 (Silver)", 
      value: 1084, 
      percentage: 20 
    },
    { 
      label: "3-3-3 (Bronze)", 
      value: 1626, 
      percentage: 30 
    }
  ]
};

export const rfmDetailsData = [
  {
    id: 1,
    name: "Condor Electronics",
    code: "C001",
    type: "B2B",
    recence: "Très récent",
    frequence: "Fréquent",
    montant: "Gros compte",
    segment: "Premium",
    isNumeric: false,
    scoreRFM: "Très récent - Fréquent - Gros compte",
    wilaya: "Alger",
    station: "Station Alger Centre",
    dateInscription: "12/01/2022",
    historique: "245",
    clv: "$ 2 160 000 DA"
  },
  {
    id: 2,
    name: "Ahmed Benali",
    code: "C002",
    type: "B2C",
    recence: "4/5",
    frequence: "3/5",
    montant: "4/5",
    segment: "Silver",
    isNumeric: true,
    scoreRFM: "4 - 3 - 4",
    wilaya: "Oran",
    station: "Station Oran Ouest",
    dateInscription: "15/03/2022",
    historique: "87",
    clv: "$ 456 000 DA"
  },
  {
    id: 3,
    name: "Jumia Algeria",
    code: "C003",
    type: "B2B",
    recence: "Très récent",
    frequence: "Fréquent",
    montant: "Gros compte",
    segment: "Premium",
    isNumeric: false,
    scoreRFM: "Très récent - Fréquent - Gros compte",
    wilaya: "Alger",
    station: "Station Alger Centre",
    dateInscription: "20/02/2022",
    historique: "312",
    clv: "$ 3 840 000 DA"
  },
  {
    id: 4,
    name: "Fatima Zohra",
    code: "C004",
    type: "B2C",
    recence: "2/5",
    frequence: "2/5",
    montant: "2/5",
    segment: "Bronze",
    isNumeric: true,
    scoreRFM: "2 - 2 - 2",
    wilaya: "Constantine",
    station: "Station Constantine Est",
    dateInscription: "10/06/2023",
    historique: "23",
    clv: "$ 125 000 DA"
  },
  {
    id: 5,
    name: "TechCorp SARL",
    code: "C005",
    type: "B2B",
    recence: "Moyen",
    frequence: "Régulier",
    montant: "Moyen compte",
    segment: "Standard",
    isNumeric: false,
    scoreRFM: "Moyen - Régulier - Moyen compte",
    wilaya: "Blida",
    station: "Station Alger Centre",
    dateInscription: "05/04/2023",
    historique: "156",
    clv: "$ 980 000 DA"
  }
];

export const MonthlyComparisonData = [
  {
    periode: "Janvier 2024",
    clients: 15234,
    chiffreAffaires: "2 534 200 DA",
    colis: 78456,
    clvMoyen: "145 000 DA",
    evolution: "+8.2%",
  },
  {
    periode: "Décembre 2023",
    clients: 14087,
    chiffreAffaires: "2 342 100 DA",
    colis: 72341,
    clvMoyen: "138 000 DA",
    evolution: "+5.1%",
  },
  {
    periode: "Novembre 2023",
    clients: 13401,
    chiffreAffaires: "2 228 900 DA",
    colis: 68923,
    clvMoyen: "132 000 DA",
    evolution: "+3.7%",
  },
];

export const mockScheduledExports = [
  {
    rapport: "Résumé activité globale",
    prochainExport: "2024-02-01",
    statut: "Programmé",
  },
  {
    rapport: "Analyse RFM détaillée",
    prochainExport: "2024-02-01",
    statut: "Programmé",
  },
  {
    rapport: "Rapport CLV",
    prochainExport: "2024-04-01",
    statut: "Programmé",
  },
];

export const mockExportFiles = [
  {
    title: "Résumé activité globale",
    description: "Vue d'ensemble complète de l'activité",
    formats: "PDF, Excel, CSV",
    frequency: "Mensuel",
    lastExport: "2024-01-15",
  },
  {
    title: "Tableau clients complet",
    description: "Liste complète avec toutes les données clients",
    formats: "Excel, CSV",
    frequency: "Mensuel",
    lastExport: "2024-01-14",
  },
  {
    title: "Top clients du mois (CLV)",
    description: "Classement des meilleurs clients par CLV",
    formats: "PDF, Excel",
    frequency: "Mensuel",
    lastExport: "2024-01-01",
  },
  {
    title: "Analyse RFM détaillée",
    description: "Scores RFM par type de client (B2B/B2C)",
    formats: "Excel, CSV",
    frequency: "Mensuel",
    lastExport: "2024-01-01",
  },
  {
    title: "Rapport CLV",
    description: "Customer Lifetime Value par segment",
    formats: "PDF, Excel",
    frequency: "Trimestriel",
    lastExport: "2024-01-01",
  },
  {
    title: "Export régional",
    description: "Données par région/wilaya",
    formats: "Excel, CSV",
    frequency: "Mensuel",
    lastExport: "2024-01-15",
  },
];

export const mockFilterOptions  = {
  segments: [
    "Tous Segments",
    "Premium (Top 20%)",
    "Standard (50%)",
    "À Surveiller (Bottom 30%)",
  ],
  types: [
    "Tout Type",
    "B2B",
    "B2C",
    "C2C",
  ],
  wilayas: [
    "Toutes les Wilayas",
    "01 - Adrar",
    "02 - Chlef",
    "03 - Laghouat",
    "04 - Oum El Bouaghi",
    "05 - Batna",
    "06 - Béjaïa",
    "07 - Biskra",
    "08 - Béchar",
    "09 - Blida",
    "10 - Bouira",
    "11 - Tamanrasset",
    "12 - Tébessa",
    "13 - Tlemcen",
    "14 - Tiaret",
    "15 - Tizi Ouzou",
    "16 - Alger",
    "17 - Djelfa",
    "18 - Jijel",
    "19 - Sétif",
    "20 - Saïda",
    "21 - Skikda",
    "22 - Sidi Bel Abbès",
    "23 - Annaba",
    "24 - Guelma",
    "25 - Constantine",
    "26 - Médéa",
    "27 - Mostaganem",
    "28 - M'Sila",
    "29 - Mascara",
    "30 - Ouargla",
    "31 - Oran",
    "32 - El Bayadh",
    "33 - Illizi",
    "34 - Bordj Bou Arreridj",
    "35 - Boumerdès",
    "36 - El Tarf",
    "37 - Tindouf",
    "38 - Tissemsilt",
    "39 - El Oued",
    "40 - Khenchela",
    "41 - Souk Ahras",
    "42 - Tipaza",
    "43 - Mila",
    "44 - Aïn Defla",
    "45 - Naâma",
    "46 - Aïn Témouchent",
    "47 - Ghardaïa",
    "48 - Relizane",
    "49 - Timimoun",
    "50 - Bordj Badji Mokhtar",
    "51 - Ouled Djellal",
    "52 - Béni Abbès",
    "53 - In Salah",
    "54 - In Guezzam",
    "55 - Touggourt",
    "56 - Djanet",
    "57 - El M'Ghair",
    "58 - El Meniaa",
  ],
};

export const mockClientsData = [
  {
    id: 1,
    name: "Condor Electronics",
    code: "C001",
    type: "B2B",
    wilaya: "Alger",
    station: "Station Alger Centre",
    segmentCLV: "Premium",
    segmentationRFM: "Premium",
    historiqueEnvoi: 245,
    clvDA: 2160000,
    dateInscription: "12/01/2022",
    scoreRFM: "Très récent - Fréquent - Gros compte",
    recence: "Très récent",
    frequence: "Fréquent",
    montant: "Gros compte",
    panierMoyen: 18000,
    frequenceAchat: 2.5,
  },
  {
    id: 2,
    name: "Ahmed Benali",
    code: "C002",
    type: "B2C",
    wilaya: "Oran",
    station: "Station Oran Ouest",
    segmentCLV: "Standard",
    segmentationRFM: "Silver",
    historiqueEnvoi: 89,
    clvDA: 65000,
    dateInscription: "05/03/2022",
    scoreRFM: "Récent - Moyen - Petit compte",
    recence: "Récent",
    frequence: "Moyen",
    montant: "Petit compte",
    panierMoyen: 7300,
    frequenceAchat: 1.8,
  },
  {
    id: 3,
    name: "Jumia Algeria",
    code: "C003",
    type: "B2B",
    wilaya: "Constantine",
    station: "Station Constantine Est",
    segmentCLV: "Premium",
    segmentationRFM: "Premium",
    historiqueEnvoi: 567,
    clvDA: 3240000,
    dateInscription: "18/11/2021",
    scoreRFM: "Très récent - Très fréquent - Gros compte",
    recence: "Très récent",
    frequence: "Très fréquent",
    montant: "Gros compte",
    panierMoyen: 25000,
    frequenceAchat: 3.2,
  },
  {
    id: 4,
    name: "Fatima Zohra",
    code: "C004",
    type: "B2C",
    wilaya: "Blida",
    station: "Station Blida Sud",
    segmentCLV: "À surveiller",
    segmentationRFM: "Bronze",
    historiqueEnvoi: 23,
    clvDA: 18000,
    dateInscription: "22/08/2023",
    scoreRFM: "Ancien - Rare - Petit compte",
    recence: "Ancien",
    frequence: "Rare",
    montant: "Petit compte",
    panierMoyen: 4500,
    frequenceAchat: 0.8,
  },
  {
    id: 5,
    name: "Sonatrach Distribution",
    code: "C005",
    type: "B2B",
    wilaya: "Annaba",
    station: "Station Annaba Nord",
    segmentCLV: "Premium",
    segmentationRFM: "Premium",
    historiqueEnvoi: 423,
    clvDA: 2890000,
    dateInscription: "03/06/2021",
    scoreRFM: "Très récent - Très fréquent - Gros compte",
    recence: "Très récent",
    frequence: "Très fréquent",
    montant: "Gros compte",
    panierMoyen: 22000,
    frequenceAchat: 3.0,
  },
  {
    id: 6,
    name: "Karim Messaoudi",
    code: "C006",
    type: "B2C",
    wilaya: "Sétif",
    station: "Station Sétif Centre",
    segmentCLV: "Standard",
    segmentationRFM: "Silver",
    historiqueEnvoi: 156,
    clvDA: 124000,
    dateInscription: "14/09/2022",
    scoreRFM: "Récent - Fréquent - Moyen compte",
    recence: "Récent",
    frequence: "Fréquent",
    montant: "Moyen compte",
    panierMoyen: 9500,
    frequenceAchat: 2.1,
  },
  {
    id: 7,
    name: "Naftal Service",
    code: "C007",
    type: "B2B",
    wilaya: "Tlemcen",
    station: "Station Tlemcen Ouest",
    segmentCLV: "Premium",
    segmentationRFM: "Premium",
    historiqueEnvoi: 389,
    clvDA: 1980000,
    dateInscription: "28/02/2022",
    scoreRFM: "Très récent - Fréquent - Gros compte",
    recence: "Très récent",
    frequence: "Fréquent",
    montant: "Gros compte",
    panierMoyen: 19500,
    frequenceAchat: 2.8,
  },
  {
    id: 8,
    name: "Samira Boutique",
    code: "C008",
    type: "B2C",
    wilaya: "Béjaïa",
    station: "Station Béjaïa Centre",
    segmentCLV: "Standard",
    segmentationRFM: "Silver",
    historiqueEnvoi: 67,
    clvDA: 45000,
    dateInscription: "19/04/2023",
    scoreRFM: "Moyen - Moyen - Petit compte",
    recence: "Moyen",
    frequence: "Moyen",
    montant: "Petit compte",
    panierMoyen: 6200,
    frequenceAchat: 1.5,
  },
  {
    id: 9,
    name: "Atlas Trading",
    code: "C009",
    type: "B2B",
    wilaya: "Batna",
    station: "Station Batna Sud",
    segmentCLV: "Premium",
    segmentationRFM: "Premium",
    historiqueEnvoi: 298,
    clvDA: 1560000,
    dateInscription: "11/01/2022",
    scoreRFM: "Récent - Fréquent - Gros compte",
    recence: "Récent",
    frequence: "Fréquent",
    montant: "Gros compte",
    panierMoyen: 17800,
    frequenceAchat: 2.6,
  },
  {
    id: 10,
    name: "Yacine Logistics",
    code: "C010",
    type: "B2C",
    wilaya: "Tizi Ouzou",
    station: "Station Tizi Ouzou Nord",
    segmentCLV: "À surveiller",
    segmentationRFM: "Bronze",
    historiqueEnvoi: 34,
    clvDA: 28000,
    dateInscription: "07/10/2023",
    scoreRFM: "Ancien - Rare - Petit compte",
    recence: "Ancien",
    frequence: "Rare",
    montant: "Petit compte",
    panierMoyen: 5100,
    frequenceAchat: 0.9,
  },
];

// Stations List by Wilaya
export const mockStationsList = {
  Alger: ["Station Alger Centre", "Station Alger Est", "Station Alger Ouest"],
  Oran: ["Station Oran Ouest", "Station Oran Centre", "Station Oran Est"],
  Constantine: ["Station Constantine Est", "Station Constantine Sud"],
  Blida: ["Station Blida Sud", "Station Blida Nord"],
  Annaba: ["Station Annaba Nord", "Station Annaba Centre"],
  Sétif: ["Station Sétif Centre", "Station Sétif Est"],
  Batna: ["Station Batna Sud", "Station Batna Centre"],
  Tlemcen: ["Station Tlemcen Ouest", "Station Tlemcen Centre"],
  Béjaïa: ["Station Béjaïa Centre", "Station Béjaïa Port"],
  "Tizi Ouzou": ["Station Tizi Ouzou Nord", "Station Tizi Ouzou Sud"],
};

