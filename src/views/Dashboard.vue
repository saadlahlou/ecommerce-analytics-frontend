<template>
    <div>
      <!-- Composant de filtrage de la période -->
      <PeriodFilter @period-change="updatePeriod" />
  
      <!-- Statistiques et graphiques liés à la période sélectionnée -->
      <DashboardStats :period="selectedPeriod" />
      <TrendingProducts :startDate="selectedPeriod.startDate" :endDate="selectedPeriod.endDate" />
      <CategorySalesChart :startDate="selectedPeriod.startDate" :endDate="selectedPeriod.endDate" />
      <ProductTable />
    </div>
  </template>
  
  <script>
  // Importation des composants
  import DashboardStats from "@/components/DashboardStats.vue";
  import TrendingProducts from "@/components/TrendingProducts.vue";
  import CategorySalesChart from "@/components/CategorySalesChart.vue";
  import ProductTable from "@/components/ProductTable.vue";
  
  export default {
    name: "Dashboard",
    components: {
      DashboardStats, // Composant des statistiques générales
      TrendingProducts, // Composant pour les produits les plus vendus
      CategorySalesChart, // Composant des ventes par catégorie
      ProductTable, // Tableau de produits
    },
    data() {
      return {
        selectedPeriod: {
          startDate: new Date().toISOString().split("T")[0], // Date du jour par défaut
          endDate: new Date().toISOString().split("T")[0], 
        },
      };
    },
    methods: {
      // Met à jour la période sélectionnée
      updatePeriod(period) {
        this.selectedPeriod = period;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles pour la sélection de la période */
  .period-selector {
    margin-bottom: 20px;
  }
  
  /* Styles pour les statistiques */
  .stats {
    display: flex;
    justify-content: space-between;
  }
  
  .stat {
    padding: 10px;
    border: 1px solid #ddd;
    width: 30%;
  }
  
  /* Styles pour le tableau des produits */
  .products-table {
    margin-top: 40px;
  }
  
  .products-table table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .products-table th,
  .products-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  /* Styles pour les graphiques */
  .charts {
    margin-top: 40px;
  }
  </style>
  