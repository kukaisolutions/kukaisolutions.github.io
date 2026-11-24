---
title: "How to add a service and its statuses"
key: cadastrar-servico-e-status
order: 4
group: setup
---

**Services** are what the clinic offers: Occupational Therapy, Speech Therapy, Psychotherapy, Assessment. Each service has **statuses**, which tell you where each appointment stands: scheduled, completed, cancelled, no-show. The schedule and the finances depend on the services.

🎬 Video: [How to set up services](https://www.youtube.com/watch?v=LpNsFz1vfvo) (in Portuguese)

## Step by step

1. Sign in to Beiwe as an **administrator** and open **Settings**.
2. Go to **🛠️ Services Provided**.
3. Fill in:
   - **Service name** (*Nome do Serviço*), for example "Occupational Therapy".
   - **Ideal price adjustment interval (in months)** (*Intervalo ideal de ajuste de Preço (em meses)*): after this time, Beiwe reminds you to review the service's price (for inflation, costs, salaries). The default is 12 months.
   - **Appointment frequency alert (months)** (*Alerta de periodicidade de atendimento (meses)*): if a patient's last appointment in this service was longer ago than this, a notice appears in their record. Useful for periodic reassessments. Leave it at 0 to turn it off.
4. Click **Next: Register Statuses**.
5. **Step 2 of 2** (*Passo 2 de 2*): Beiwe already suggests two statuses, **Agendado** (scheduled, not billable) and **Realizado** (completed, billable). Adjust the list:
   - type the status name and click **Add Status**;
   - tick **Billable?** (*É cobrado?*) on the statuses the patient must pay for;
   - remove the ones you don't want with 🗑️.
6. Click **Save Service**.

The suggested statuses come in Portuguese. You can remove them and add your own, such as "Scheduled" and "Completed".

## Billable and non-billable statuses

This setting decides what counts as an amount receivable in **Finance**:

- **Billable** ✅: the appointment is charged, at the patient's price for that service. Examples: Completed, No-show without notice (if the clinic charges for it).
- **Not billable** ❌: the appointment is recorded but not charged. Examples: Scheduled, Cancelled by the clinic.

In practice, an appointment starts as **Scheduled** and, after the session, moves to **Completed**: from that moment it counts as an amount receivable. The video [Cash flow as seen from the platform](https://www.youtube.com/watch?v=R_wjvddsbJM) (in Portuguese) shows what happens in Finance.

## After it is created

Open the service in **Registered Services and Statuses** to change the name or the intervals, or to add and remove statuses. The service's storage folder stays the same.

Next step: [How to register a collaborator](/products/beiwe/en/add-collaborator/) · Back to [Getting started](/products/beiwe/en/getting-started/)

Questions? Write to us at contato@kukaisolutions.com.
