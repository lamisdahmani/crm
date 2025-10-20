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