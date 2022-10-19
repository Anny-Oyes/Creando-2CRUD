export default {
    appPort: process.env.APP_PORT || 3000,
    db: {
        // si la conexion es segura faltaria agregar una contraseña
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'test'
    }
};