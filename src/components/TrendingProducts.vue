<template>
  <div class="trending-products">
    <h2>Top 5 des produits les plus vendus</h2>
    <table>
      <thead>
        <tr>  
          <th>Nom du produit</th>
          <th>Quantité vendue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in trendingProducts" :key="index">
          <td>{{ product.productName }}</td>
          <td>{{ product.quantitySold }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import apiEndpoints from "@/services/apiService";

export default {
  name: "TrendingProducts",
  data() {
    return {
      trendingProducts: [], // Tableau pour stocker les produits les plus vendus
    };
  },
  methods: {
    // Récupère les produits les plus vendus depuis l'API
    async fetchTrendingProducts() {
      try {
        const response = await apiEndpoints.getTrendingProducts();
        this.trendingProducts = response.data.map(product => ({
          productName: product.productName,
          quantitySold: product.quantitySold,
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des produits les plus vendus :", error);
      }
    },
  },
  mounted() {
    // Récupération des données lorsque le composant est monté
    this.fetchTrendingProducts();
  },
};
</script>

<style scoped>
.trending-products {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 12px;
  max-width: 600px; /* Taille du tableau agrandie */
  margin: 30px auto; /* Centré sur la page avec plus de marge */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-size: 24px; /* Agrandissement du titre */
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
}

thead {
  background-color: #007bff;
  color: white;
}

thead th {
  text-align: left;
  padding: 12px 16px; /* Agrandissement du padding pour l'en-tête */
  font-size: 16px; /* Taille de police plus grande */
}

tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

tbody tr:nth-child(even) {
  background-color: #ffffff;
}

tbody td {
  padding: 12px 16px; /* Agrandissement du padding pour les cellules */
  font-size: 16px; /* Taille de police plus grande pour le texte */
  text-align: left;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

th, td {
  border-bottom: 2px solid #ddd; 
}
</style>
