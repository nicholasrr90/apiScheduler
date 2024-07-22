import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Definir rotas
app.get('/', (req, res) => {
  res.send({ message: 'DEU CERTO CARAIO!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
