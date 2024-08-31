<template>
    <b-row class="justify-content-center g-5 mt-4">
        <h1>
            INDICADORES CONSOLIDADOS
        </h1>
        <b-col cols="5">
            <b-card>
                <b-card-title>
                    <h3> Indicador Consolidado </h3>
                </b-card-title>
                <b-card-body>
                    <!-- DONUT CON TODO Y VALORES -->
                    <Doughnut :data="donutData" :options="donutOptions" />
                    <div class="position-absolute translate-middle fs-3 fw-bold"
                        style="color: #003366; top: 75%; left: 50%">
                        <h1> {{ donutValue.toFixed(2) }}% </h1>
                    </div>
                    <div class="position-absolute translate-middle fs-3 fw-bold"
                        style="color: #003366; top: 80%; left: 13%">
                        <h6> 0.00% </h6>
                    </div>
                    <div class="position-absolute translate-middle fs-3 fw-bold"
                        style="color: #003366; top: 80%; left: 87%">
                        <h6> 100.00% </h6>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col cols="5">
            <b-card>
                <b-card-title>
                    <h3> Indicador Consolidado </h3>
                </b-card-title>
                <b-card-body>
                    <!-- LINEAR CON TODO Y VALORES -->
                    <Line :data="lineChartData" :options="lineChartOptions" />
                </b-card-body>
            </b-card>
        </b-col>

    </b-row>
</template>

<script>
import { Bar, Doughnut, Line } from 'vue-chartjs'
import { Chart as ChartJS, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ChartDataLabels, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    components: {
        Bar,
        Doughnut,
        Line,
    },
    data() {
        return {
            donutValue: 85.81, // Valor que quieres mostrar
            donutData: {
                labels: ["Completed", "Remaining"],
                datasets: [
                    {
                        data: [85.81, 14.19], // Los datos para el gráfico
                        backgroundColor: ["#003366", "#e0e0e0"],
                        borderWidth: 1,
                        borderColor: ["#003366", "#e0e0e0"],
                        cutout: "70%",
                        rotation: 270,
                        circumference: 180,
                    },
                ],
            },
            donutOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    },
                    tooltip: {
                        enabled: true,
                    },
                    datalabels: {
                        display: true,
                        formatter: (value, context) => {
                            if (context.dataIndex === 0) { // Solo mostrar el valor "Completed"
                                return value.toFixed(2) + '%';
                            }
                            return '';
                        },
                        color: '#003366',
                        font: {
                            weight: 'bold',
                            size: 18,
                        },
                        anchor: 'center',
                        align: 'center',
                    },
                },
            },
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
        }
    }
}
</script>