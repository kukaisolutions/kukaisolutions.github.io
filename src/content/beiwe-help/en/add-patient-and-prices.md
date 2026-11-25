---
title: "How to register a patient and their prices"
key: cadastrar-paciente-e-precos
order: 6
group: setup
---

The registration brings together the patient's details, their **guardians** and the **price** of each service. Add the services first (see [How to add a service and its statuses](/products/beiwe/en/add-service-and-statuses/)), because prices are set per service.

🎬 Video: [How to add patients and set up prices](https://www.youtube.com/watch?v=Zc8wkCIsI2I) (in Portuguese)

## Step by step

1. Sign in to Beiwe as an **administrator** and open **Registration → Patients**.
2. Under **Patient Data** (*Dados do Paciente*), fill in:
   - **Full name** (*Nome completo*);
   - **Date of birth** (*Data de nascimento*), in year-month-day format (YYYY-MM-DD, for example 2018-05-23);
   - **Address** (*Endereço*), **Diagnosis / Referral** (*Diagnóstico / Encaminhamento*) and **Notes** (*Observações*), if you want;
   - **Billing currency** (*Moeda de cobrança*): Brazilian reais, US dollars or euros. All of the patient's services are charged in this currency, and it **can't be changed later**.
3. Under **Guardians** (*Responsáveis*), fill in at least one guardian: **Name** (*Nome*), **Relationship** (*Parentesco*) and **Email** are required.
   - If the patient is an adult and responsible for themselves, tick **Guardian 1 is the patient themselves** (*Responsável 1 é o próprio paciente*).
   - Use **Add Guardian** to add others (father, mother, caregiver).
   - For each one, tick what applies:
     - **Emergency contact** (*Contato de urgência*): called in emergencies;
     - **Receive progress updates and appointment invitations** (*Receber comunicados de evolução e convites de agendamentos*): receives the reports and the appointment invitations by email;
     - **Access to the patient record** (*Acesso ao prontuário*): can sign in to Beiwe and see the patient's record. For this, the guardian must already have created an account with that email address. This access takes up one **seat** in the plan, and the screen shows how much will be debited.
4. Under **Prices charged** (*Valores cobrados*), enter the **Amount** (*Valor*) and the **Effective date** (*Data de vigência*, the date from which the price applies) for each service.
5. Click **Register Patient**.

## Adjusting prices later

Prices are kept in **Finance**, under **🪙 Prices charged** (*Valores Praticados*) → **Register and adjust prices** (*Cadastro e Ajuste de Valores Cobrados*):

1. choose the **Patient** (*Paciente*) and the **Service** (*Serviço*);
2. enter the new **Price** (*Preço*) and the **Effective date** (*Data de vigência*);
3. click **Add price** (*Adicionar preço*).

The previous price isn't deleted: Beiwe keeps the history. When an appointment moves to a billable status, it gets the price that applied on the appointment date, and that amount is recorded. Changing the status to another billable status, or rescheduling the appointment, doesn't change that amount. The **Patient price table** (*Tabela de Valores por Paciente*) shows all registered prices.

### A price with an effective date in the past

If the new price applies from a date on which there are already charged appointments, Beiwe handles each case like this:

- **Charged appointments without a price** (shown as **No price** (*Sem preço*) in Finance) get the new price right away.
- **Appointments not yet paid**, charged at another price: Beiwe shows a list with the charged price and the new price. Tick the ones that should change and click **Apply the new price to the ticked ones** (*Aplicar o novo preço às marcadas*), or **Keep the current prices** (*Manter os preços atuais*).
- **Appointments with a payment recorded**, in full or in part, keep the charged price. The list shows them so you know about them; if there is a difference to settle, record it separately.

For example: the price was R$ 200 and, on November 20, you register R$ 300 effective from October 1. An appointment on November 1 that hasn't been paid yet appears in the list and moves to R$ 300 if you tick it. If it already has a payment, it stays at R$ 200.

### Appointments cancelled after a payment

If a charged appointment moves to a non-billable status (for example, Cancelled) and already has a payment recorded, it stays in Finance as **Not billable (with payment)** (*Sem cobrança (com pagamento)*), so the payment isn't lost. Without a payment, it leaves Finance.

## Editing the registration

Under **Patient details** (*Detalhes do Paciente*), choose the patient to see and edit their details and guardians.

Next step: [How to book an appointment](/products/beiwe/en/schedule-appointment/) · Back to [Getting started](/products/beiwe/en/getting-started/)

Questions? Write to us at contato@kukaisolutions.com.
