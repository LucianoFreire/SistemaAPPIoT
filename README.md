# SistemaAPPIoT

# Descrição

* Trabalho Interdisciplinar

> Suponha que você foi contratado para automatizar uma casa e o dono gostaria de agendar o ligamento e desligamento de itens da casa por uma interface web.

> Os itens que devem ser ligados ou desligados conforme o agendamento programado são:

- Ventilador
- Luz da Sala
- Luz do Quarto
- Televisor

> Faça um sistema que seja possível cadastrar agendamentos para ligar ou desligar esses itens. Os dados de um agendamento compreende-se em: 

- Data: Dia, mês e ano que os itens vão ser ligados ou desligados.
- Hora: Horário que os itens vão ser ligados ou desligado.
- Estado do ventilador: Indica se o ventilador vai ser ligado ou desligado.
- Estado da luz da sala: Indica se a luz da sala vai ser ligado ou desligado.
- Estado da luz do quarto: Indica se a luz do quarto vai ser ligado ou desligado.

```sh
Seu sistema deverá ser composto por:
```

> Um WebService REST (back end) em Java com banco de dados, com os seguintes serviços: 

> Listagens de agendamentos (GET) 

> Inclusão de agendamento (POST) 

> Alteração de agendamento (PUT) 

> Exclusão de agendamento (DELETE)

> Uma interface gráfica web (front-end) utilizando AngularJS e Bootstrap, conforme o protótipo:

> Um cliente em Java desktop que consuma o webservice e envie os comandos para o arduino via porta Serial no horário do angendamento;
