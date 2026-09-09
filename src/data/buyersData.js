/**
 * Mock Buyers Database for KrishiSetu Buyer Marketplace
 */

export const BUYERS_DATABASE = [
  {
    id: 'buyer_raj_traders',
    name: 'Raj Traders',
    nameHindi: 'राज ट्रेडर्स',
    companyType: 'Wholesale Agri Trader',
    phone: '+919822145678',
    locationName: 'Market Yard, Pune',
    locationNameHindi: 'मार्केट यार्ड, पुणे',
    state: 'Maharashtra',
    district: 'pune',
    lat: 18.2785,
    lng: 74.1118,
    rating: 4.9,
    ratingCount: 124,
    crops: ['tomato', 'onion', 'chilli'],
    cropPrices: {
      tomato: 55.0,
      onion: 34.0,
      chilli: 58.0,
      potato: 26.0,
      brinjal: 30.0,
      cucumber: 28.0,
      other: 40.0,
    },
    cropRequirements: {
      tomato: 200,
      onion: 500,
      chilli: 150,
      potato: 400,
      brinjal: 200,
      cucumber: 300,
      other: 250,
    },
    paymentTerms: 'Instant Digital / Cash on Delivery',
    verified: true,
  },
  {
    id: 'buyer_fresh_agro',
    name: 'Fresh Agro Pvt. Ltd.',
    nameHindi: 'फ्रेश ॲग्रो प्रा. लि.',
    companyType: 'Food Processing & Retail Chain',
    phone: '+919850123456',
    locationName: 'Shirur Mega Hub, Pune',
    locationNameHindi: 'शिरूर मेगा हब, पुणे',
    state: 'Maharashtra',
    district: 'pune',
    lat: 18.9277,
    lng: 74.2863,
    rating: 4.8,
    ratingCount: 98,
    crops: ['tomato', 'potato', 'cucumber', 'brinjal'],
    cropPrices: {
      tomato: 52.0,
      potato: 28.0,
      cucumber: 26.0,
      brinjal: 32.0,
      onion: 32.0,
      chilli: 54.0,
      other: 38.0,
    },
    cropRequirements: {
      tomato: 500,
      potato: 800,
      cucumber: 450,
      brinjal: 300,
      onion: 600,
      chilli: 200,
      other: 350,
    },
    paymentTerms: 'Same-day Bank Transfer (NEFT/UPI)',
    verified: true,
  },
  {
    id: 'buyer_abc_foods',
    name: 'ABC Foods & Exports',
    nameHindi: 'एबीसी फूड्स अँड एक्सपोर्ट्स',
    companyType: 'Export Supplier',
    phone: '+919890234567',
    locationName: 'Baramati APMC Hub, Pune',
    locationNameHindi: 'बारामती एपीएमसी हब, पुणे',
    state: 'Maharashtra',
    district: 'pune',
    lat: 18.0479,
    lng: 74.7199,
    rating: 4.7,
    ratingCount: 86,
    crops: ['tomato', 'onion', 'potato', 'chilli'],
    cropPrices: {
      tomato: 48.0,
      onion: 36.0,
      potato: 25.0,
      chilli: 60.0,
      brinjal: 28.0,
      cucumber: 24.0,
      other: 35.0,
    },
    cropRequirements: {
      tomato: 300,
      onion: 1000,
      potato: 700,
      chilli: 250,
      brinjal: 350,
      cucumber: 400,
      other: 300,
    },
    paymentTerms: '24-hour Settlement',
    verified: true,
  },
  {
    id: 'buyer_shree_samarth',
    name: 'Shree Samarth Traders',
    nameHindi: 'श्री समर्थ ट्रेडर्स',
    companyType: 'Regional Wholesale Buyer',
    phone: '+919422345678',
    locationName: 'Karad APMC, Satara',
    locationNameHindi: 'कराड एपीएमसी, सातारा',
    state: 'Maharashtra',
    district: 'satara',
    lat: 17.2890,
    lng: 74.1816,
    rating: 4.6,
    ratingCount: 64,
    crops: ['tomato', 'onion', 'brinjal', 'cucumber'],
    cropPrices: {
      tomato: 45.0,
      onion: 30.0,
      brinjal: 29.0,
      cucumber: 25.0,
      potato: 23.0,
      chilli: 50.0,
      other: 32.0,
    },
    cropRequirements: {
      tomato: 400,
      onion: 500,
      brinjal: 250,
      cucumber: 350,
      potato: 400,
      chilli: 150,
      other: 200,
    },
    paymentTerms: 'Instant Cash Payment',
    verified: true,
  },
  {
    id: 'buyer_kisan_mitra_traders',
    name: 'Kisan Mitra Retail Agro',
    nameHindi: 'किसान मित्र रिटेल ॲग्रो',
    companyType: 'Direct Farm-to-Store Chain',
    phone: '+919765432190',
    locationName: 'Pandharpur Market, Solapur',
    locationNameHindi: 'पंढरपूर मार्केट, सोलापूर',
    state: 'Maharashtra',
    district: 'solapur',
    lat: 17.6778,
    lng: 75.3278,
    rating: 4.5,
    ratingCount: 52,
    crops: ['tomato', 'potato', 'chilli', 'cucumber', 'other'],
    cropPrices: {
      tomato: 42.0,
      potato: 24.0,
      chilli: 52.0,
      cucumber: 23.0,
      onion: 29.0,
      brinjal: 26.0,
      other: 30.0,
    },
    cropRequirements: {
      tomato: 350,
      potato: 600,
      chilli: 180,
      cucumber: 300,
      onion: 400,
      brinjal: 200,
      other: 250,
    },
    paymentTerms: 'Spot Payment on Unloading',
    verified: false,
  },
  {
    id: 'buyer_sangamner_processors',
    name: 'Godavari Agro Processors',
    nameHindi: 'गोदावरी ॲग्रो प्रोसेसर्स',
    companyType: 'Pulp & Canning Industry',
    phone: '+919823456789',
    locationName: 'Sangamner, Ahmednagar',
    locationNameHindi: 'संगमनेर, अहमदनगर',
    state: 'Maharashtra',
    district: 'ahmednagar',
    lat: 19.5761,
    lng: 74.2081,
    rating: 4.7,
    ratingCount: 110,
    crops: ['tomato', 'onion', 'chilli'],
    cropPrices: {
      tomato: 46.0,
      onion: 35.0,
      chilli: 56.0,
      potato: 22.0,
      brinjal: 27.0,
      cucumber: 22.0,
      other: 33.0,
    },
    cropRequirements: {
      tomato: 1200,
      onion: 1500,
      chilli: 400,
      potato: 800,
      brinjal: 500,
      cucumber: 600,
      other: 500,
    },
    paymentTerms: 'Bank Direct Transfer (24 hrs)',
    verified: true,
  },
  {
    id: 'buyer_nashik_onion_mart',
    name: 'Nashik Agro Exports',
    nameHindi: 'नाशिक ॲग्रो एक्सपोर्ट्स',
    companyType: 'Bulk Exporters',
    phone: '+919860123789',
    locationName: 'Pimpalgaon Baswant, Nashik',
    locationNameHindi: 'पिंपळगाव बसवंत, नाशिक',
    state: 'Maharashtra',
    district: 'nashik',
    lat: 20.1706,
    lng: 73.9856,
    rating: 4.8,
    ratingCount: 145,
    crops: ['onion', 'tomato', 'potato'],
    cropPrices: {
      onion: 38.0,
      tomato: 44.0,
      potato: 25.0,
      chilli: 48.0,
      brinjal: 25.0,
      cucumber: 21.0,
      other: 30.0,
    },
    cropRequirements: {
      onion: 2000,
      tomato: 600,
      potato: 1000,
      chilli: 300,
      brinjal: 400,
      cucumber: 400,
      other: 400,
    },
    paymentTerms: 'Immediate RTGS Transfer',
    verified: true,
  },
  {
    id: 'buyer_solapur_bulk_traders',
    name: 'Siddheshwar Vegetable Mart',
    nameHindi: 'सिद्धेश्वर भाजीपाला मार्ट',
    companyType: 'Wholesale Supplier',
    phone: '+919423156789',
    locationName: 'Solapur Market Yard',
    locationNameHindi: 'सोलापूर मार्केट यार्ड',
    state: 'Maharashtra',
    district: 'solapur',
    lat: 17.6599,
    lng: 75.9064,
    rating: 4.4,
    ratingCount: 42,
    crops: ['onion', 'tomato', 'brinjal', 'chilli'],
    cropPrices: {
      onion: 33.0,
      tomato: 40.0,
      brinjal: 28.0,
      chilli: 51.0,
      potato: 21.0,
      cucumber: 20.0,
      other: 29.0,
    },
    cropRequirements: {
      onion: 800,
      tomato: 400,
      brinjal: 350,
      chilli: 200,
      potato: 500,
      cucumber: 300,
      other: 250,
    },
    paymentTerms: 'Direct Cash / UPI',
    verified: true,
  },
];

/**
 * Calculates Haversine distance between two coordinates in kilometers
 * @param {number} lat1
 * @param {number} lon1
 * @param {number} lat2
 * @param {number} lon2
 * @returns {number} distance in km (rounded to 1 decimal)
 */
export function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 50;
  const R = 6371; // Radius of Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10;
}

/**
 * Filters and sorts buyers based on selected crop, farmer coordinates, and radius
 * @param {Object} params
 * @param {Object} params.crop - Current selected crop object
 * @param {number} params.farmerLat - Farmer GPS latitude
 * @param {number} params.farmerLng - Farmer GPS longitude
 * @param {number} params.radiusKm - Search radius in kilometers (default 120)
 * @returns {Array} List of processed buyers sorted by pricePerKg DESC
 */
export function getFilteredBuyers({ crop, farmerLat, farmerLng, radiusKm = 120 }) {
  const cropId = crop?.id || 'tomato';
  
  const matchingBuyers = [];

  for (const buyer of BUYERS_DATABASE) {
    // Check if buyer buys this crop
    const buysCrop = buyer.crops.includes(cropId) || buyer.crops.includes('other');
    if (!buysCrop) continue;

    // Calculate actual distance
    const distanceKm = calculateHaversineDistance(
      farmerLat,
      farmerLng,
      buyer.lat,
      buyer.lng
    );

    // Filter by radius
    if (distanceKm <= radiusKm) {
      const offeredPrice = buyer.cropPrices[cropId] || buyer.cropPrices.other || 30.0;
      const requiredQty = buyer.cropRequirements[cropId] || buyer.cropRequirements.other || 200;
      const totalAmount = Math.round(offeredPrice * requiredQty);

      matchingBuyers.push({
        ...buyer,
        offeredPrice,
        requiredQty,
        distanceKm,
        roundedDistance: Math.round(distanceKm),
        totalAmount,
        cropId,
        cropName: crop?.hindiName || 'टमाटर',
        cropEnglishName: crop?.englishName || 'Tomato',
      });
    }
  }

  // Sort by offeredPrice DESC (Highest price first)
  matchingBuyers.sort((a, b) => b.offeredPrice - a.offeredPrice);

  return matchingBuyers;
}
