---
title: "Como cadastrar um paciente e os preços"
key: cadastrar-paciente-e-precos
order: 6
group: setup
---

O cadastro reúne os dados do paciente, os seus **responsáveis** e o **preço** de cada serviço. Cadastre os serviços antes (veja [Como cadastrar um serviço e os seus status](/products/beiwe/pt/cadastrar-servico-e-status/)), porque os preços são definidos por serviço.

🎬 Vídeo: [Como adicionar pacientes e parametrizar preços](https://www.youtube.com/watch?v=Zc8wkCIsI2I)

## Passo a passo

1. Entre na Beiwe como **administrador** e abra **Cadastro → Pacientes**.
2. Em **Dados do Paciente**, preencha:
   - **Nome completo**;
   - **Data de nascimento**, no formato ano-mês-dia (AAAA-MM-DD, por exemplo 2018-05-23);
   - **Endereço**, **Diagnóstico / Encaminhamento** e **Observações**, se quiser;
   - **Moeda de cobrança**: Reais, Dólares ou Euros. Todos os serviços do paciente são cobrados nessa moeda, e ela **não pode ser alterada depois**.
3. Em **Responsáveis**, preencha pelo menos um responsável: **Nome**, **Parentesco** e **Email** são obrigatórios.
   - Se o paciente é adulto e responde por si, marque **Responsável 1 é o próprio paciente**.
   - Use **Adicionar Responsável** para incluir outros (pai, mãe, cuidador).
   - Para cada um, marque o que se aplica:
     - **Contato de urgência**: é acionado em emergências;
     - **Receber comunicados de evolução e convites de agendamentos**: recebe por e-mail os relatórios e os convites das consultas;
     - **Acesso ao prontuário**: pode entrar na Beiwe e ver o prontuário do paciente. Para isso, o responsável precisa já ter criado uma conta com esse e-mail. Esse acesso ocupa um **assento** do plano, e a tela mostra quanto será debitado.
4. Em **Valores cobrados**, informe para cada serviço o **Valor** e a **Data de vigência** (a partir de quando esse preço vale).
5. Clique em **Cadastrar Paciente**.

## Ajustar os preços depois

Os preços ficam no **Financeiro**, em **🪙 Valores Praticados → Cadastro e Ajuste de Valores Cobrados**:

1. escolha o **Paciente** e o **Serviço**;
2. informe o novo **Preço** e a **Data de vigência**;
3. clique em **Adicionar preço**.

O preço anterior não é apagado: a Beiwe guarda o histórico. Quando uma consulta passa para um status cobrado, ela recebe o preço que valia na data da consulta, e esse valor fica registrado. Assim, um reajuste não muda o valor de consultas já cobradas. Se o preço de um serviço não estiver cadastrado, a consulta aparece sem preço no Financeiro. A **Tabela de Valores por Paciente** mostra todos os preços cadastrados.

## Editar o cadastro

Em **Detalhes do Paciente**, escolha o paciente para ver e editar os dados e os responsáveis.

Próximo passo: [Como marcar uma consulta](/products/beiwe/pt/marcar-consulta/) · Voltar para [Primeiros passos](/products/beiwe/pt/primeiros-passos/)

Dúvidas? Fale com a gente em contato@kukaisolutions.com.
