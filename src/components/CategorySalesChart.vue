<template>
  <div class="category-sales-chart">
    <h3>Répartition des ventes par catégorie</h3>
    <canvas id="category-sales-chart"></canvas>
  </div>
</template>

<script>
import apiEndpoints from "@/services/apiService"; // Centralisation dans apiService.js
import Chart from "chart.js/auto";

export default {
  name: "CategorySalesChart",
  props: {
    period: {
      type: Object, // La période est un objet attendu avec startDate et endDate
      required: true,
    },
  },
  data() {
    return {
      chart: null, // Référence au graphique Chart.js
    };
  },
  watch: {
    period: {
      handler: "fetchCategorySales",
      immediate: true, // Charge les données au montage
    },
  },
  methods: {
    async fetchCategorySales() {
      try {
        const response = await apiEndpoints.getCategorySales(this.period); // Récupère les données depuis l'API
        const data = response.data || [];

        // Transforme les données pour le graphique
        const categories = data.map((item) => item.category);
        const percentages = data.map((item) => item.percentage);

        // Détruit l'ancien graphique si existant
        if (this.chart) this.chart.destroy();

        // Initialisation du graphique
        const ctx = document.getElementById("category-sales-chart").getContext("2d");
        this.chart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: categories,
            datasets: [
              {
                data: percentages,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                position: "bottom", // Positionne la légende en bas
              },
            },
          },
        });
      } catch (error) {
        console.error("Erreur lors du chargement des ventes par catégorie :", error);
      }
    },
  },
};
</script>

<style scoped>
.category-sales-chart {
  margin: 20px 0;
  text-align: center;
}

canvas {
  max-width: 600px;
  margin: 0 auto;
}
</style>
