---
title: "Cómo registrar un servicio y sus estados"
key: cadastrar-servico-e-status
order: 4
group: setup
---

Los **servicios** son lo que ofrece la clínica: Terapia Ocupacional, Fonoaudiología, Psicoterapia, Evaluación. Cada servicio tiene **estados**, que indican en qué situación está cada cita: agendada, realizada, cancelada, inasistencia. La agenda y las finanzas dependen de los servicios.

🎬 Video: [Cómo configurar servicios](https://www.youtube.com/watch?v=LpNsFz1vfvo) (en portugués)

## Paso a paso

1. Entre en Beiwe como **administrador** y abra **Configuración**.
2. Vaya a **🛠️ Servicios Prestados**.
3. Complete:
   - **Nombre del servicio** (*Nome do Serviço*), por ejemplo "Terapia Ocupacional".
   - **Intervalo ideal de ajuste de precio (en meses)** (*Intervalo ideal de ajuste de Preço (em meses)*): pasado ese tiempo, Beiwe le recuerda revisar el precio del servicio (por inflación, costos, salarios). El valor predeterminado es 12 meses.
   - **Alerta de periodicidad de atención (meses)** (*Alerta de periodicidade de atendimento (meses)*): si la última atención de un paciente en este servicio fue hace más tiempo que eso, aparece un aviso en su expediente. Útil para reevaluaciones periódicas. Déjelo en 0 para desactivarlo.
4. Haga clic en **Siguiente: Registrar Estados**.
5. **Paso 2 de 2** (*Passo 2 de 2*): Beiwe ya sugiere dos estados, **Agendado** (no facturable) y **Realizado** (facturable). Ajuste la lista:
   - escriba el nombre del estado y haga clic en **Agregar Estado**;
   - marque **¿Es facturable?** (*É cobrado?*) en los estados en que el paciente debe pagar;
   - quite con 🗑️ los que no quiera.
6. Haga clic en **Guardar Servicio**.

Los estados sugeridos vienen en portugués. Puede quitarlos y agregar los suyos.

## Estado facturable o no facturable

Esta marca define qué entra como monto por cobrar en **Finanzas**:

- **Facturable** ✅: la cita genera un cobro, al precio del paciente para ese servicio. Ejemplos: Realizado, Inasistencia sin aviso (si la clínica la cobra).
- **No facturable** ❌: la cita queda registrada, pero no genera cobro. Ejemplos: Agendado, Cancelado por la clínica.

En la práctica, una cita nace como **Agendado** y, después de la atención, pasa a **Realizado**: en ese momento empieza a contar como monto por cobrar. El video [El flujo de caja visto desde la plataforma](https://www.youtube.com/watch?v=R_wjvddsbJM) (en portugués) muestra lo que pasa en Finanzas.

## Después de crearlo

Abra el servicio en **Servicios y Estados Registrados** para cambiar el nombre o los intervalos, o para agregar y quitar estados. La carpeta del servicio en el almacenamiento no cambia.

Siguiente paso: [Cómo registrar a un colaborador](/products/beiwe/es/registrar-colaborador/) · Volver a [Primeros pasos](/products/beiwe/es/primeros-pasos/)

¿Dudas? Escríbanos a contato@kukaisolutions.com.
