<template>
    <!-- INDICADORES CON TEXTO -->
    <b-row class="mt-5">
        <h1 class="mb-4">
            RANKINGS
        </h1>
        <b-col cols="4" v-for="(table, index) in tables">
            <b-card>
                <b-card-title>
                    <h5>
                        {{ table.title }}
                    </h5>
                </b-card-title>
                <b-card-body>
                    <!-- {{ table }} -->
                    <b-table responsive hover :sort-by="[{ key: table.key }]" :items="table.items" :fields="table.fields" empty-text="No existen valores" show-empty/>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            itemsTable1: [
                {
                    provider: 'Hewlet Packard - Perú S.R.L.',
                    total: '$64,510.00'
                },
                {
                    provider: 'INGEODRILLING SAC',
                    total: '$64,510.00'
                },
                {
                    provider: 'SERVICIOS GENERALES DE TELECOMUNICACIONES',
                    total: '$64,510.00'
                },
                {
                    provider: 'SIMON CARPIO RAFAEL',
                    total: '$64,510.00'
                },
                {
                    provider: 'CORPORACION MACROCHIPS SAC',
                    total: '$64,510.00'
                }
            ],
            fieldsTable1: [
                { key: 'provider', label: 'PROVEEDOR' },
                { key: 'total', label: 'NOMBRE' },
            ],
            itemsTable2: [
                {
                    material: 'Tornillos Spax',
                    total: '$13,510.00'
                },
                {
                    material: 'Anillos de expansión',
                    total: '$21,690.00'
                },
                {
                    material: 'Destornillador plano',
                    total: '$52,510.00'
                },
                {
                    material: 'Destornillador estrella',
                    total: '$27,510.00'
                },
                {
                    material: 'Alambre AWG Cal 12',
                    total: '$180,910.00'
                }
            ],
            fieldsTable2: [
                { key: 'material', label: 'MATERIAL' },
                { key: 'total', label: 'NOMBRE' },
            ],
            tables: [],
            items: [
                {
                    material: 'Hewlet Packard - Perú S.R.L.',
                    total: '$64,510.00'
                },
                {
                    material: 'INGEODRILLING SAC',
                    total: '$64,510.00'
                },
                {
                    material: 'SERVICIOS GENERALES DE TELECOMUNICACIONES',
                    total: '$64,510.00'
                },
                {
                    material: 'SIMON CARPIO RAFAEL',
                    total: '$64,510.00'
                },
                {
                    material: 'CORPORACION MACROCHIPS SAC',
                    total: '$64,510.00'
                }
            ],
            fields: [
                { key: 'material', label: 'ID' },
                { key: 'total', label: 'NOMBRE' },
            ],
        }
    },
    mounted() {
        this.tables = [
        {
            title: 'Top 5 de Proveedores',
            key: 'provider',
            test: 'hola',
            items: this.itemsTable1,
            fields: this.fieldsTable1
        },
        {
            title: 'Top 5 de Materiales',
            key: 'material',
            test: 'hola',
            items: this.itemsTable2,
            fields: this.fieldsTable2
        },
        this.tables = {
            title: 'Top 5 de Proveedores',
            key: 'provider',
            test: 'hola',
            items: this.itemsTable3,
            fields: this.fieldsTable1
        
        }]
    }
}
</script>