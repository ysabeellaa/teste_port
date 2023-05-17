import one from '../assets/png/projects/form.png';
import nine from '../assets/png/projects/transactionLogger.jfif';
import two from '../assets/png/projects/trybetunes.png';
import three from '../assets/png/projects/trivia.png';
import four from '../assets/svg/projects/four.svg';
import five from '../assets/svg/projects/five.svg';
import six from '../assets/png/projects/shoppingcart.png';
import seven from '../assets/png/projects/tryunfo.png';
import eight from '../assets/png/projects/solarsystem.png';

export const projectsData = [
  {
    id: 1,
    projectName: 'Casa Planta',
    projectDesc: 'Casa Planta é um e-commerce de alimentos naturais,'
    + 'Hooks, Context API e consumo de APIs externas.'
    + 'Hooks e consumo de APIs externas.',
    tags: ['React', 'TypeScript', 'SCSS', 'Context API', 'Hooks'],
    code: 'https://github.com/ysabeellaa/CasaPlanta',
    demo: 'https://casa-planta.vercel.app/',
    image: nine,
    
  },
  {
    id: 2,
    projectName: 'Compra de serviços',
    projectDesc: 'App de seleção de plano de serviços de jogo, add-ons '
    + 'e resumo de tudo que foi escolhido mensalmente/anualmente.',
    tags: ['JS', 'CSS', 'LocalStorage', 'Responsividade',],
    code: 'https://github.com/ysabeellaa/update_advanced_form',
    demo: 'https://repositorio-transaction-logger-qwxb.vercel.app/',
    image: one,
  },
  {
    id: 3,
    projectName: 'Transaction Logger',
    projectDesc: 'Aplicação que tem como objetivo demonstrar as transações monetárias ,'
    + 'Utiliza mockagem para simular o comportamento de determinados componentes durante os testes de unidade.',
    tags: ['React', 'SCSS', 'TypeScript', 'React Hooks', 'Mock'],
    code: 'https://github.com/ysabeellaa/repositorio_transaction_logger',
    demo: 'https://repositorio-transaction-logger.vercel.app/',
    image: nine,
  },
  {
    id: 4,
    projectName: 'FinKids',
    projectDesc: 'Foi desenvolvida em colaboração uma aplicação voltada para a venda de planos de estudo de programação destinados a crianças'
    + 'Trivia utilizando React e Redux.',
    tags: ['JS', 'CSS', 'LocalStorage', 'Consumo de API'],
    code: 'https://github.com/ysabeellaa/FinKids',
    demo: 'https://ysabeellaa.github.io/FinKids/',
    image: three,
  },
  {
    id: 5,
    projectName: 'Travel Form',
    projectDesc: 'Planeje o destino da sua viagem, descrição e acompanhantes!',
    tags: ['JS', 'CSS'],
    code: 'https://github.com/ysabeellaa/calculator_2_themes',
    demo: 'https://ysabeellaa.github.io/calculator_2_themes/',
    image: four,
  },
  {
    id: 6,
    projectName: '2 Themes Calculator',
    projectDesc: 'Faça contas complexas! Não se preocupe se gosta do tema claro ou escuro, aqui tem ambos!',
    tags: ['React', 'TS', 'CSS'],
    code: 'https://github.com/ysabeellaa/form_travel_react-ts',
    demo: 'https://ysabeellaa.github.io/form_travel_react-ts/',
    image: four,
  },
 
]; export default projectsData;

