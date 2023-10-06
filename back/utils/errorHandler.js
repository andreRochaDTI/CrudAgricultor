const errorHandler = (error, res) => {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor", status: 500 });
  };
  
  module.exports = errorHandler;
  