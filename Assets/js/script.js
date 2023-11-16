
/* MENU TOGGLE */
document.getElementById('mobile-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu-mobile').classList.toggle('active');

  const icon = document.querySelector('.menu-toggle i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

/* SEÇÃO AGENDA */

var botaoProximoServico = document.getElementById('botao-proximo-servico');
var botaoProximoCalendario = document.getElementById('botao-proximo-calendario');
var botaoProximoHorario = document.getElementById('botao-proximo-hora');
var botaoVoltarCalendario = document.getElementById('botao-voltar-calendario');
var botaoVoltarHora = document.getElementById('botao-voltar-hora');
var botaoVoltarDetalhes = document.getElementById('botao-voltar-detalhes');
var agendaServico = document.getElementById('agenda-servico');
var agendaCalendario = document.getElementById('agenda-calendario');
var agendaHorario = document.getElementById('agenda-hora');
var agendaDetalhes = document.getElementById('agenda-detalhes');

/* SEÇÃO AGENDA - SERVIÇOS */

botaoProximoServico.addEventListener('click', function (e) {
  agendaServico.classList.add('deslocar-direita');
  agendaCalendario.classList.remove('deslocar-esquerda');
  e.preventDefault();
});

/* SEÇÃO AGENDA - CALENDÁRIO */

botaoProximoCalendario.addEventListener('click', function (e) {
  agendaCalendario.classList.add('deslocar-direita');
  agendaHorario.classList.remove('deslocar-esquerda');
  e.preventDefault();
});

botaoVoltarCalendario.addEventListener('click', function (e) {
  agendaServico.classList.remove('deslocar-direita');
  e.preventDefault();
});

/* SEÇÃO AGENDA - HORÁRIO */

botaoProximoHorario.addEventListener('click', function (e) {
  agendaHorario.classList.add('deslocar-direita');
  agendaDetalhes.classList.remove('deslocar-esquerda');
  e.preventDefault();
});

botaoVoltarHora.addEventListener('click', function (e) {
  agendaCalendario.classList.remove('deslocar-direita');
  e.preventDefault();
});

/* SEÇÃO AGENDA - DETALHES */
botaoVoltarDetalhes.addEventListener('click', function (e) {
  agendaHorario.classList.remove('deslocar-direita');
  e.preventDefault();
});


