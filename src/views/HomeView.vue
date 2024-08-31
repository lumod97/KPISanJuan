<template>
  <div>
    <div class="justify-content-end d-flex cursor-pointer">
      <span class="badge rounded-pill bg-success mb-2 px-4">
        <i-bi-cloud-download class="me-2" color="primary"></i-bi-cloud-download> Descargar reporte
      </span>
    </div>
    <b-container class="custom-bg rounded pt-3 pe-5 ps-5 pt-5 capture-container">
      <div ref="capture"> 

        <profile></profile>

        <consolidated-indicators />

        <!-- OTROS INDICADORES -->
        <b-row class="mt-5">
          <h1 class="mb-4">
            INDICADORES LINEALES
          </h1>
          <b-col cols="4" class="mt-5">
            <b-card>

              <b-card-body>
                <!-- LINEAR CON TODO Y VALORES -->
                <Line :data="lineChartData" :options="lineChartOptions" />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="4" class="mt-5">
            <b-card>

              <b-card-body>
                <!-- LINEAR CON TODO Y VALORES -->
                <Line :data="lineChartData" :options="lineChartOptions" />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="4" class="mt-5">
            <b-card>

              <b-card-body>
                <!-- LINEAR CON TODO Y VALORES -->
                <Line :data="lineChartData" :options="lineChartOptions" />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="4" class="mt-5">
            <b-card>

              <b-card-body>
                <!-- LINEAR CON TODO Y VALORES -->
                <Line :data="lineChartData" :options="lineChartOptions" />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="4" class="mt-5">
            <b-card>

              <b-card-body>
                <!-- LINEAR CON TODO Y VALORES -->
                <Line :data="lineChartData" :options="lineChartOptions" />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="4" class="mt-5">
            <b-card>

              <b-card-body>
                <!-- LINEAR CON TODO Y VALORES -->
                <Line :data="lineChartData" :options="lineChartOptions" />
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <text-indicators />
      </div>
    </b-container>
    <img v-if="image" :src="image" alt="Screenshot" />
  </div>

</template>

<script>
import Profile from "@/components/Profile/Profile.vue";
import ConsolidatedIndicators from "@/components/ConsolidatedIndicators/ConsolidatedIndicators.vue";

import TextIndicators from "@/components/TextIndicators/TextIndicators.vue";

import html2canvas from 'html2canvas';

import IconCustom from "@/components/IconCustom/IconCustom.vue";
import { Bar, Doughnut, Line } from 'vue-chartjs'
import { Chart as ChartJS, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: {
    Profile,
    ConsolidatedIndicators,
    TextIndicators,
    IconCustom,
    Bar,
    Doughnut,
    Line,
  },
  data() {
    return {
      image: null,
      lineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Etiquetas en el eje x
        datasets: [
          {
            label: 'Ventas en 2024', // Título de la línea
            data: [65, 59, 80, 81, 56, 55, 40], // Datos del gráfico
            fill: false, // No llenar el área debajo de la línea
            borderColor: '#003366', // Color de la línea
            tension: 0.1, // Suavizado de la línea
          },
          {
            label: 'Ventas en 2023',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#FF5733',
            tension: 0.1,
          },
        ],
      },
      lineChartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top', // Posición de la leyenda
          },
          title: {
            display: true,
            text: 'Comparativa de Ventas', // Título del gráfico
          },
        },
        scales: {
          y: {
            beginAtZero: true, // Comenzar el eje y en cero
          },
        },
      },
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true
      },
      cardData: [
        {
          title: "Accidentes Vehiculares",
          total: 2485,
          percent: 3.48,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
        {
          title: "Robos a Mano armada",
          total: 160,
          percent: 20.36,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
        {
          title: "Homicidios",
          total: 57,
          percent: 16,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
        {
          title: "Secuestros",
          total: 19,
          percent: 70,
          subtitle: "Ocurridos el último mes",
          icon: "alarm",
        },
      ],
    };
  },
  methods: {
    mostrarAlerta() {
      alert("finolis");
    },
    downloadReport() {
      const element = document.querySelector('.capture-container');
      html2canvas(element, {
        scale: 1,
        useCORS: true,
      }).then(canvas => {
        const imageUrl = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'screenshot.png';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
  },
};
</script>

<style>
.custom-bg {
  background: url('/img/images/bg/background2.jpg');
}

.cursor-pointer{
  cursor: pointer;
}

@media screen and (max-width: 992px) {
  
}

</style>
