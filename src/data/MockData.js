// src/data/MockData.js

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