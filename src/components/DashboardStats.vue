<template>
    <div>
      <h1>Total des Ventes</h1>
      <select v-model="selectedPeriod" @change="fetchTotalSales">
        <option value="7d">Derniers 7 jours</option>
        <option value="30d">Derniers 30 jours</option>
        <option value="12m">Derniers 12 mois</option>
      </select>
      
      <p>Montant des ventes : {{ totalSalesAmount }} €</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        selectedPeriod: '30d', // Période par défaut
        totalSalesAmount: 0, // Montant des ventes récupéré depuis l'API
      };
    },
    methods: {
      async fetchTotalSales() {
        try {
          const response = await axios.get(`http://localhost:3100/analytics/total_sales`, {
            params: { period: this.selectedPeriod },
          });
          this.totalSalesAmount = response.data.totalSalesAmount;
        } catch (error) {
          console.error('Erreur lors de la récupération des ventes:', error);
          alert('Impossible de récupérer les données des ventes.');
        }
      },
    },
    mounted() {
      
      this.fetchTotalSales();
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez votre style ici */
  </style>
  