<template>
  <div class="container-fluid container-main">
    <b-button
      class="btn-offcanvas-open"
      variant="outline-primary"
      @click="show = !show"
    >
      <i-bi-arrow-bar-right color="primary" />
    </b-button>
    <MainLayout>
      <template #navbar>
        <NavBar/>        
      </template>
      <template #off-canvas>
        <!-- <b-offcanvas responsive="sm" v-model="show"> -->
        <b-offcanvas v-model="show" ref="offcanvas">
          <template #header>
            <b-container>
              <b-row>
                <b-col
                  cols="2"
                  class="align-content-center pl-0 pr-0 pt-2 pb-2 h-100"
                >
                  <img
                    src="@/assets/logo.svg"
                    class="img-fluid img-logo-offcanvas"
                    sm=""
                    alt=""
                  />
                </b-col>
                <b-col
                  cols="8"
                  class="title-offcanvas align-content-center text-muted pt-2 pb-2 h-100"
                >
                  <!-- <span class=""> -->
                  Main Template
                  <!-- </span> -->
                </b-col>
                <b-col cols="2">
                  <b-button
                    class="btn-offcanvas-close float-end"
                    variant="outline-primary"
                    @click="show = !show"
                  >
                    <i-bi-arrow-bar-left color="primary" />
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </template>

          <template #footer>
            <div class="text-center mb-3">
              🌟 Hecho con 💖 por M&A Consultancy 🌟
            </div>
          </template>
        </b-offcanvas>
      </template>

      <template #content>
        <router-view></router-view>
      </template>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/views/Layout/MainLayout.vue";
import NavBar from '@/components/NavBar/NavBar.vue'
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
  },
  components: {
    MainLayout,
    NavBar,
  },
};
</script>