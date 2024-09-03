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

        <b-col cols="7">
            <b-card>
                <b-card-title>
                    <h3> Indicador Consolidado </h3>
                </b-card-title>
                <b-card-body>
                    <b-table responsive hover caption-top sticky-column stacked :items="tableItems" :fields="tableFields" empty-text="No existen valores" show-empty />

                    <!-- LINEAR CON TODO Y VALORES -->
                    <!-- <Line :data="lineChartData" :options="lineChartOptions" /> -->
                </b-card-body>
            </b-card>
        </b-col>

    </b-row>
</template>

<script>
import { Bar, Doughnut, Line } from 'vue-chartjs'
import { Chart as ChartJS, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

import axios from '@/axios/axios.js'

ChartJS.register(ChartDataLabels, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    components: {
        Bar,
        Doughnut,
        Line,
    },
    data() {
        return {
            tableItems: [],
            tableFields: [],
            donutValue: 0, // Valor que quieres mostrar
            donutData: {
                labels: ["Completed", "Remaining"],
                datasets: [
                    {
                        data: [0, 0], // Los datos para el gráfico
                        backgroundColor: ["#003366", "#e0e0e0"],
                        borderWidth: 1,
                        borderColor: ["#003366", "#e0e0e0"],
                        cutout: "10%",
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
                            // if (context.dataIndex === 1) { // Solo mostrar el valor "Completed"
                            return value > 0 ? value.toFixed(2) + '%' : '';
                            // }
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
    },
    methods: {
        async obtenerData() {
            try {
                const response = await axios.get('get-data-compras')
                // console.log(response.data.response.cantidades)
                this.setDataCantidades(response.data.response.cantidades)

                this.setDataTable(response.data.response.datos_tabla)
                console.log(this.tableFields)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        },
        setDataCantidades(cantidades) {
            this.donutValue = cantidades.total
            this.donutData = {
                labels: ["Atendido Total", "Atendido Parcial", "Pendientes"],
                datasets: [
                    {
                        data: [cantidades.atendido_total, cantidades.atendido_parcial, cantidades.pendientes], // Los datos para el gráfico
                        backgroundColor: ["#2DEA79", "#F4F92A", "#F92A2A"],
                        borderWidth: 1,
                        borderColor: ["#2DEA79", "#F4F92A", "#F92A2A"],
                        cutout: "60%",
                        rotation: 270,
                        circumference: 180,
                    },
                ],
            }
        },
        setDataTable(data) {
            const fields = []
            for (const [nombre, datos] of Object.entries(data)) {
                fields.push(Object.keys(datos))
            }
            this.tableFields = fields[0]

            const items = Object.entries(data).map(([nombre, datos]) => {
                // Construir un nuevo objeto con las claves y valores
                const formattedItem = {};
                for (const key in datos) {
                    formattedItem[key] = datos[key];
                }
                return formattedItem;
            });
            this.tableItems = items
        }
    },
    mounted() {
        this.obtenerData()
    }
}
</script>