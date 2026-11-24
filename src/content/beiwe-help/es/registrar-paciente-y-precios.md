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

El precio anterior no se borra: Beiwe guarda el historial. Cuando una cita pasa a un estado facturable, recibe el precio vigente en la fecha de la cita, y ese monto queda registrado. Así, un reajuste no cambia el valor de las citas ya cobradas. Si el precio de un servicio no está registrado, la cita aparece sin precio en Finanzas. La **Tabla de valores por paciente** (*Tabela de Valores por Paciente*) muestra todos los precios registrados.

## Editar el registro

En **Detalles del paciente** (*Detalhes do Paciente*), elija al paciente para ver y editar sus datos y sus responsables.

Siguiente paso: [Cómo agendar una cita](/products/beiwe/es/agendar-cita/) · Volver a [Primeros pasos](/products/beiwe/es/primeros-pasos/)

¿Dudas? Escríbanos a contato@kukaisolutions.com.
