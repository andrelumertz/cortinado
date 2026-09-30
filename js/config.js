/* ============ CONTEÚDO EDITÁVEL ============ */
const SITE = {
  whatsapp: "5551999999999", // DDI + DDD + número
  mensagemPadrao: "Olá! Gostaria de solicitar uma consulta com a Cortinado.",
  mensagemArquiteto: "Olá! Sou profissional de arquitetura/design e gostaria de conhecer as condições de parceria.",
};

// Para usar foto real: preencha "img" com o caminho, ex.: "assets/images/sala-01.jpg"
const PROJETOS = [
  { titulo: "Sala com degradê", categoria: "Residenciais", local: "Porto Alegre", tecido: "Linho tingido", descricao: "Linho tingido à mão em degradê, do branco ao azul-petróleo, com caimento até o piso.", img: "assets/images/0c6be9e8-3718-4337-9cb4-03d98399b6ee.jpg", cor: "linear-gradient(180deg,#f5f0e8 40%,#8fb8a8 75%,#0b5f6b)" },
  { titulo: "Living em tons terrosos", categoria: "Residenciais", local: "Gramado", tecido: "Voil + blackout", descricao: "Camadas de voil e blackout com prega americana.", img: "assets/images/1bf5c43e-6645-4dac-96f0-40a54ebcfee8.jpg", cor: "linear-gradient(180deg,#e8dccb,#b9936b)" },
  { titulo: "Sala de estar", categoria: "Residenciais", local: "Moinhos de Vento", tecido: "Screen solar", descricao: "Controle de luz para salas de reunião, com acabamento discreto.", img: "assets/images/5104ce75-357f-4f0d-9b51-a0f2b5331bae.jpg", cor: "linear-gradient(180deg,#e8e8e8,#8a8f8a)" },
  { titulo: "Suíte automatizada", categoria: "Linha Automatizada", local: "Porto Alegre", tecido: "Blackout motorizado", descricao: "Trilho motorizado com cenas programadas pelo aplicativo.", img: "", cor: "linear-gradient(180deg,#d9c9b4,#00510b)" },
  { titulo: "Casa de campo", categoria: "Residenciais", local: "Serra Gaúcha", tecido: "Linho cru", descricao: "Linho cru em pé-direito duplo, com varão em latão.", img: "assets/images/214f9954-24d6-4ee8-aa64-9913f27d731d.jpg", cor: "linear-gradient(180deg,#f5f0e8,#c9b79c)" },
  { titulo: "Quarto infantil", categoria: "Residenciais", local: "Porto Alegre", tecido: "Linho cru", descricao: "Linho cru em pé-direito duplo, com varão em latão.", img: "assets/images/1568e44d-0e6e-407a-85bb-2529717392da.jpg", cor: "linear-gradient(180deg,#f5f0e8,#c9b79c)" },
  
  { titulo: "Hall de hotel boutique", categoria: "Corporativos", local: "Porto Alegre", tecido: "Veludo", descricao: "Cortinas de grande altura com acabamento em veludo.", img: "", cor: "linear-gradient(180deg,#04611c,#002500)" },
];

const DEPOIMENTOS = [
  { texto: "Execução impecável e prazo cumprido. Indico aos meus clientes sem hesitar.", autor: "Arquiteta parceira", cargo: "Porto Alegre" },
  { texto: "O degradê ficou exatamente como imaginei. A equipe cuidou de cada detalhe.", autor: "Cliente residencial", cargo: "Porto Alegre" },
  { texto: "Suporte técnico desde a fase de projeto. Um parceiro de confiança.", autor: "Designer de interiores", cargo: "Gramado" },
];
