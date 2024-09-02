import axios from 'axios';

// Crear una instancia de Axios con la configuración global
const axiosInstance = axios.create({
  baseURL: 'http://56.10.3.24:8080/api/', // Reemplaza con la URL base de tu API
  timeout: 10000, // Tiempo máximo de espera para una solicitud en milisegundos
  headers: {
    'Content-Type': 'application/json',
    // Aquí puedes añadir cualquier encabezado que necesites, por ejemplo:
    // 'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
});

// Interceptor de solicitudes
axiosInstance.interceptors.request.use(
  config => {
    // Puedes modificar la solicitud antes de enviarla, por ejemplo, agregar un token de autenticación:
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Manejar errores de solicitud
    return Promise.reject(error);
  }
);

// Interceptor de respuestas
axiosInstance.interceptors.response.use(
  response => {
    // Puedes manejar la respuesta antes de que sea pasada a tu código
    return response;
  },
  error => {
    // Manejar errores de respuesta
    if (error.response) {
      // El servidor respondió con un código de estado diferente de 2xx
      console.error('Error en la respuesta:', error.response.status, error.response.data);
      if (error.response.status === 401) {
        // Manejar errores de autenticación, como redirigir a la página de login
        // window.location.href = '/login';
      }
    } else if (error.request) {
      // La solicitud fue hecha pero no hubo respuesta
      console.error('Error en la solicitud:', error.request);
    } else {
      // Algo pasó al configurar la solicitud que provocó un error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
