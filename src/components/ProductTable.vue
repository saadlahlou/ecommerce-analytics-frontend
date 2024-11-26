<template>
    <div class="product-table">
      <h3>Liste des produits</h3>
      <table>
        <thead>
          <tr>
            <th>Nom du produit</th>
            <th>Date d'ajout</th>
            <th>Prix (€)</th>
            <th>Nombre total de ventes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.productId">
            <td>{{ product.productName }}</td>
            <td>{{ product.addedDate }}</td>
            <td>{{ product.price.toFixed(2) }}</td>
            <td>{{ product.quantitySold }}</td>
          </tr>
          <tr v-if="products.length === 0">
            <td colspan="4" class="no-data">Aucun produit disponible.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import apiEndpoints from "@/services/apiService";
  
  export default {
    name: "ProductTable",
    data() {
      return {
        products: [], // Stocke la liste des produits récupérés
      };
    },
    methods: {
      // Méthode pour récupérer la liste des produits depuis l'API
      async fetchProducts() {
        try {
          const response = await apiEndpoints.getProducts(); // Appel à l'API pour récupérer les produits
          this.products = response.data || []; // Si aucune donnée, on utilise un tableau vide
        } catch (error) {
          console.error("Erreur lors de la récupération des produits :", error);
        }
      },
    },
    mounted() {
      this.fetchProducts(); // Charge les produits lorsque le composant est monté
    },
  };
  </script>
  
  <style scoped>
  .product-table {
    margin: 20px 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  th,
  td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  .no-data {
    text-align: center;
    font-style: italic;
    color: #888;
  }
  </style>
  