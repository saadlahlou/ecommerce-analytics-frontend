import axios from 'axios';

// Configuration de base pour Axios
const apiService = axios.create({
  baseURL: 'http://localhost:3100', 
});

// Regroupement des appels API
const apiEndpoints = {
  // Récupère le montant total des ventes pour une période donnée
  getTotalSales(startDate, endDate) {
    // On envoie les dates au format de requête
    const params = { startDate, endDate };
    return apiService.get('/analytics/total_sales', { params });
  },

  // Méthode pour récupérer les produits les plus vendus
  getTrendingProducts() {
    return apiService.get('/analytics/trending_products');
  },

  // Récupère la répartition des ventes par catégorie pour une période donnée
  getCategorySales: (startDate, endDate) => 
    apiService.get('/analytics/category_sales', { params: { startDate, endDate } }),

  // Récupère la liste des produits avec leurs ventes totales
  getProducts: () => apiService.get('/products'),
};

export default apiEndpoints;
