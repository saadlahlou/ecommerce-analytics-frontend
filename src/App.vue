<template>
  <div id="app">
    <!-- Affichage du composant Dashboard -->
    <Dashboard />
  </div>
</template>

<script>
// Importation du composant Dashboard
import Dashboard from './views/Dashboard.vue';

export default {
  name: 'App', // Nom du composant principal de l'application
  components: {
    Dashboard // Déclaration du composant Dashboard à utiliser dans le template
  }
};
</script>

<style>
/* Style global de l'application */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; /* Police par défaut */
  -webkit-font-smoothing: antialiased; /* Amélioration de l'affichage des polices */
  -moz-osx-font-smoothing: grayscale; /* Amélioration de l'affichage sur macOS */
  text-align: center; /* Centrage du texte */
  color: #2c3e50; /* Couleur du texte */
  margin-top: 60px; /* Espacement en haut de la page */
}
</style>
