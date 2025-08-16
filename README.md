La Plataforma IA Empresarial es una aplicación web diseñada para ofrecer a empresas una herramienta integral en la que puedan gestionar usuarios, administrar datos y experimentar con modelos de Inteligencia Artificial en un entorno accesible y moderno.

Funcionalidades principales

Gestión de usuarios: registro, inicio de sesión y administración de cuentas.

Entrenamiento de modelos de IA: permite cargar datos, iniciar entrenamientos y monitorear su progreso.

Gestión de datos empresariales: almacenamiento y consulta estructurada de información.

Interfaz interactiva: frontend dinámico y responsivo que mejora la experiencia del usuario.

Arquitectura modular: frontend y backend separados para facilitar mantenimiento y escalabilidad.

Propósito

El propósito principal de la plataforma es democratizar el acceso a la inteligencia artificial para pequeñas y medianas empresas, reduciendo las barreras técnicas y proporcionando un espacio unificado para la gestión de proyectos de IA.

Tecnologías utilizadas

Frontend: React, Next.js, Tailwind CSS, Framer Motion.

Backend: PHP 8 con API REST, MySQL como sistema de base de datos.

Entorno de desarrollo: Node.js, NPM y XAMPP.

Control de versiones: Git y GitHub.

Dificultades encontradas

Durante el desarrollo y los intentos de despliegue se presentaron algunos retos:

Incompatibilidades entre Node.js, PHP y MySQL al intentar hostear la aplicación.

Fallos entre entornos de desarrollo local y servidores de producción.

Limitaciones de servicios gratuitos de hosting que no permitieron correr correctamente la API y el frontend juntos.

Se reinició el proyecto desde cero en varias ocasiones para corregir configuraciones y reestructurar el código.

Estado actual

Actualmente la plataforma cuenta con la estructura base implementada, permitiendo la gestión de usuarios y la integración entre frontend y backend. Se encuentra en fase de desarrollo y pruebas, con miras a mejorar su despliegue en la nube y ampliar la variedad de modelos de IA soportados.

Futuras mejoras

Implementación de contenedores con Docker para unificar entornos.

Migración del backend a Node.js/Express o Django.

Integración de autenticación avanzada (JWT, OAuth2).

Mayor variedad de algoritmos y modelos de inteligencia artificial.

Despliegue en plataformas escalables como AWS, Google Cloud o Vercel.
