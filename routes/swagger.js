const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger.json');

const isProduction = process.env.NODE_ENV === 'production';
swaggerSpec.servers = [
  {
    url: isProduction ? process.env.FRONTEND_URL : process.env.LOCAL_URL,
    description: isProduction ? 'Production server' : 'Development server'
  }
];

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerSpec));

module.exports = router;