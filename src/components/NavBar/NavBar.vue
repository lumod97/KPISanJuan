<template>
  <BNavbar toggleable="sm" variant="primary" v-b-color-mode="'dark'">
    <BNavbarToggle target="nav-text-collapse" />

    <BNavbarBrand>
      <img
        src="@/assets/logo.svg"
        class="img-fluid img-logo-navbar"
        sm="d-none"
        alt=""
      />
      <!-- <span class="title-offcanvas "> -->
      Main Template
      <!-- </span> -->
    </BNavbarBrand>

    <BCollapse id="nav-text-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <!-- <b-nav-item>INICIO</b-nav-item> -->
        <!-- <BNavItemDropdown text="INICIO" right> -->
        <BNavItemDropdown text="INICIO">
          <BDropdownItem>INDICADORES</BDropdownItem>
          <BDropdownItem>BASES DE DATOS</BDropdownItem>
          <BDropdownItem>MAPAS</BDropdownItem>
          <BDropdownItem>PUBLICACIONES</BDropdownItem>
          <BDropdownItem>NÚMEROS DE EMERGENCIA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown text="¿QUIENES SOMOS?">
          <BDropdownItem>NOSOTROS</BDropdownItem>
          <BDropdownItem>COMITÉ</BDropdownItem>
          <BDropdownItem>VISIÓN</BDropdownItem>
          <BDropdownItem>MISIÓN</BDropdownItem>
          <BDropdownItem>JUSTIFICACIÓN</BDropdownItem>
          <BDropdownItem></BDropdownItem>
        </BNavItemDropdown>
        <b-nav-item>NORMATIVIDAD</b-nav-item>
        <b-nav-item>CONTACTO</b-nav-item>
        <b-nav-item @click="downloadFile()">INFORMACIÓN DE INTERES</b-nav-item>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script>
export default{
  methods:{
    downloadFile() {
      // URL del archivo que deseas descargar
      const fileUrl = 'http://56.10.3.24:5173/app-debug.apk';
      // Nombre que tendrá el archivo descargado
      const fileName = 'app-debug.apk';

      // Crear un enlace temporal
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;

      // Agregar el enlace al documento
      document.body.appendChild(link);

      // Disparar el clic en el enlace
      link.click();

      // Remover el enlace del documento
      document.body.removeChild(link);
    }
  }
}
</script>