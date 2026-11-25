---
title: "Cómo registrar a un paciente y sus precios"
key: cadastrar-paciente-e-precos
order: 6
group: setup
---

El registro reúne los datos del paciente, sus **responsables** y el **precio** de cada servicio. Registre antes los servicios (vea [Cómo registrar un servicio y sus estados](/products/beiwe/es/registrar-servicio-y-estados/)), porque los precios se definen por servicio.

🎬 Video: [Cómo agregar pacientes y configurar precios](https://www.youtube.com/watch?v=Zc8wkCIsI2I) (en portugués)

## Paso a paso

1. Entre en Beiwe como **administrador** y abra **Registro → Pacientes**.
2. En **Datos del Paciente** (*Dados do Paciente*), complete:
   - **Nombre completo** (*Nome completo*);
   - **Fecha de nacimiento** (*Data de nascimento*), en formato año-mes-día (AAAA-MM-DD, por ejemplo 2018-05-23);
   - **Dirección** (*Endereço*), **Diagnóstico / Derivación** (*Diagnóstico / Encaminhamento*) y **Observaciones** (*Observações*), si quiere;
   - **Moneda de cobro** (*Moeda de cobrança*): reales, dólares o euros. Todos los servicios del paciente se cobran en esa moneda, y **no se puede cambiar después**.
3. En **Responsables** (*Responsáveis*), complete al menos un responsable: **Nombre** (*Nome*), **Parentesco** (*Parentesco*) y **Correo electrónico** son obligatorios.
   - Si el paciente es adulto y responde por sí mismo, marque **El responsable 1 es el propio paciente** (*Responsável 1 é o próprio paciente*).
   - Use **Agregar Responsable** para incluir a otros (padre, madre, cuidador).
   - Para cada uno, marque lo que corresponda:
     - **Contacto de urgencia** (*Contato de urgência*): se le llama en emergencias;
     - **Recibir comunicados de evolución e invitaciones a citas** (*Receber comunicados de evolução e convites de agendamentos*): recibe por correo los informes y las invitaciones a las citas;
     - **Acceso al expediente** (*Acesso ao prontuário*): puede entrar en Beiwe y ver el expediente del paciente. Para eso, el responsable ya debe haber creado una cuenta con ese correo. Este acceso ocupa un **asiento** del plan, y la pantalla muestra cuánto se debitará.
4. En **Valores cobrados** (*Valores cobrados*), indique para cada servicio el **Monto** (*Valor*) y la **Fecha de vigencia** (*Data de vigência*, desde cuándo vale ese precio).
5. Haga clic en **Registrar Paciente**.

## Ajustar los precios después

Los precios están en **Finanzas**, en **🪙 Valores practicados** (*Valores Praticados*) → **Registro y ajuste de valores cobrados** (*Cadastro e Ajuste de Valores Cobrados*):

1. elija el **Paciente** (*Paciente*) y el **Servicio** (*Serviço*);
2. indique el nuevo **Precio** (*Preço*) y la **Fecha de vigencia** (*Data de vigência*);
3. haga clic en **Agregar precio** (*Adicionar preço*).

El precio anterior no se borra: Beiwe guarda el historial. Cuando una cita pasa a un estado facturable, recibe el precio vigente en la fecha de la cita, y ese monto queda registrado. Cambiar el estado a otro estado facturable o reprogramar la cita no cambia ese monto. La **Tabla de valores por paciente** (*Tabela de Valores por Paciente*) muestra todos los precios registrados.

### Un precio con fecha de vigencia en el pasado

Si el nuevo precio vale desde una fecha en la que ya hay citas cobradas, Beiwe trata cada caso así:

- **Citas cobradas sin precio** (que aparecen como **Sin precio** (*Sem preço*) en Finanzas) reciben el nuevo precio en el momento.
- **Citas todavía sin pago**, cobradas con otro precio: Beiwe muestra una lista con el precio cobrado y el nuevo precio. Marque las que deben cambiar y haga clic en **Aplicar el nuevo precio a las marcadas** (*Aplicar o novo preço às marcadas*), o en **Mantener los precios actuales** (*Manter os preços atuais*).
- **Citas con algún pago registrado**, total o parcial: mantienen el precio cobrado. La lista las muestra para que usted lo sepa; si hay una diferencia que ajustar, regístrela aparte.

Por ejemplo: el precio era R$ 200 y, el 20 de noviembre, usted registra R$ 300 con vigencia desde el 1 de octubre. Una cita del 1 de noviembre todavía sin pago aparece en la lista y pasa a R$ 300 si la marca. Si ya tiene un pago, sigue en R$ 200.

### Citas canceladas después de un pago

Si una cita cobrada pasa a un estado sin cobro (por ejemplo, Cancelado) y ya tiene un pago registrado, sigue en Finanzas como **Sin cobro (con pago)** (*Sem cobrança (com pagamento)*), para que el pago no se pierda. Sin pago, sale de Finanzas.

## Editar el registro

En **Detalles del paciente** (*Detalhes do Paciente*), elija al paciente para ver y editar sus datos y sus responsables.

Siguiente paso: [Cómo agendar una cita](/products/beiwe/es/agendar-cita/) · Volver a [Primeros pasos](/products/beiwe/es/primeros-pasos/)

¿Dudas? Escríbanos a contato@kukaisolutions.com.
