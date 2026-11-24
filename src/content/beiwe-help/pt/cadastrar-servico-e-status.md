---
title: "Como cadastrar um serviço e os seus status"
key: cadastrar-servico-e-status
order: 4
group: setup
---

Os **serviços** são o que a clínica oferece: Terapia Ocupacional, Fonoaudiologia, Psicoterapia, Avaliação. Cada serviço tem **status**, que dizem em que situação está cada consulta: agendada, realizada, cancelada, falta. A agenda e o financeiro dependem dos serviços.

🎬 Vídeo: [Como parametrizar serviços](https://www.youtube.com/watch?v=LpNsFz1vfvo)

## Passo a passo

1. Entre na Beiwe como **administrador** e abra **Parametrização**.
2. Vá até **🛠️ Serviços Prestados**.
3. Preencha:
   - **Nome do Serviço** (por exemplo, "Terapia Ocupacional").
   - **Intervalo ideal de ajuste de preço (em meses)**: depois desse tempo, a Beiwe lembra de reavaliar o preço do serviço (por inflação, custos, salários). O padrão é 12 meses.
   - **Alerta de periodicidade de atendimento (meses)**: se o último atendimento de um paciente nesse serviço foi há mais tempo que isso, aparece um aviso no prontuário dele. Útil para reavaliações periódicas. Deixe em 0 para desativar.
4. Clique em **Próximo: Registrar Status**.
5. **Passo 2 de 2:** a Beiwe já sugere dois status, **Agendado** (não cobrado) e **Realizado** (cobrado). Ajuste a lista:
   - escreva o nome do status e clique em **Adicionar Status**;
   - marque **É cobrado?** nos status em que o paciente deve pagar;
   - remova com 🗑️ os que não quiser.
6. Clique em **Salvar Serviço**.

## Status cobrado ou não cobrado

Essa marcação define o que entra como valor a receber no **Financeiro**:

- **Cobrado** ✅: a consulta gera cobrança, pelo preço do paciente para aquele serviço. Exemplos: Realizado, Falta sem aviso (se a clínica cobra).
- **Não cobrado** ❌: a consulta fica registrada, mas não gera cobrança. Exemplos: Agendado, Cancelado pela clínica.

Na prática, uma consulta nasce **Agendado** e, depois do atendimento, passa para **Realizado**: nesse momento ela passa a contar como valor a receber. O vídeo [Fluxo de caixa visto a partir da plataforma](https://www.youtube.com/watch?v=R_wjvddsbJM) mostra o que acontece no Financeiro.

## Depois de criado

Abra o serviço em **Serviços e Status Cadastrados** para mudar o nome, os intervalos, ou adicionar e remover status. A pasta do serviço no armazenamento é fixa.

Próximo passo: [Como cadastrar um colaborador](/products/beiwe/pt/cadastrar-colaborador/) · Voltar para [Primeiros passos](/products/beiwe/pt/primeiros-passos/)

Dúvidas? Fale com a gente em contato@kukaisolutions.com.
