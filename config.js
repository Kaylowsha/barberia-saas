// ================================
// CONFIGURACIÓN DE SUPABASE
// ================================

// IMPORTANTE: Reemplaza estos valores con los tuyos de Supabase
const SUPABASE_CONFIG = {
    url: 'https://tlireovgyvnsomovncji.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsaXJlb3ZneXZuc29tb3ZuY2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDYzODksImV4cCI6MjA3MzE4MjM4OX0.7d4WaX-bxlAFJCLS6cPhCOFONsSZxX7Oc0153Dpjrl0',
    barberiaId: '79da96ae-4357-4ede-8c98-9a61c1c3378e' // ID de NATWIN 
};

// Usuarios de prueba (temporal mientras no tengamos auth real)
const TEST_USERS = {
    admin: {
        id: '3fbc31cc-da0a-4f4a-b45b-e7a51320c92c',
        email: 'israelparancan.n@gmail.com',
        nombre: 'Administrador',
        role: 'admin',
        barberia_id: '79da96ae-4357-4ede-8c98-9a61c1c3378e'
    },
    empleado: {
        id: '1a0242b8-bc7a-4e61-9e33-ac182996a950',
        email: 'ispn4trade@gmail.com',
        nombre: 'Misho',
        role: 'empleado',
        barberia_id: '79da96ae-4357-4ede-8c98-9a61c1c3378e'
    }
};

// Lista de servicios
const SERVICIOS_LISTA = [
    { id: 1, nombre: 'Corte Tradicional - Estudiante', precio: 12000 },
    { id: 2, nombre: 'Corte Tijera', precio: 15000 },
    { id: 3, nombre: 'Fade - Degradados', precio: 18000 },
    { id: 4, nombre: 'Barba Rasurado', precio: 8000 },
    { id: 5, nombre: 'Perfilado Barba', precio: 10000 },
    { id: 6, nombre: 'Barba Premium', precio: 12000 },
    { id: 7, nombre: 'Rasurado de Barba con Vapor', precio: 15000 },
    { id: 8, nombre: 'Limpieza Facial Premium', precio: 20000 },
    { id: 9, nombre: 'Servicio Full', precio: 35000 },
    { id: 10, nombre: 'Cejas', precio: 5000 },
    { id: 11, nombre: 'Diseños', precio: 8000 },
    { id: 12, nombre: 'Líneas', precio: 5000 }
];
