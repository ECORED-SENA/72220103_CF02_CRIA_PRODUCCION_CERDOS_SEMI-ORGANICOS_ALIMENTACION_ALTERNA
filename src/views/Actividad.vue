<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Recepción, beneficio porcino y manejo sostenible de subproductos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la recepción, beneficio, bienestar animal, bioseguridad, inocuidad y manejo sostenible de subproductos en la producción porcina.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de la recepción de porcinos antes del beneficio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar requisitos sanitarios, documentales y de bienestar animal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar características comerciales, productivas y genéticas del lote.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer parámetros reproductivos, alimentarios y económicos del animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar características físicas, musculares y comerciales de la canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué permite la trazabilidad durante la recepción de los porcinos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar únicamente el peso individual de cada porcino recibido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar el seguimiento del lote desde su predio de origen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer solamente la calidad comercial de la carne obtenida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular exclusivamente el rendimiento productivo de cada animal recibido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una consecuencia del estrés durante la recepción de los porcinos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar la resistencia sanitaria y mejorar la calidad de la canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir las posibilidades de contaminación durante el proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Generar alteraciones como PSE o DFD que disminuyen la calidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Favorecer la conservación natural y prolongar la vida útil cárnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué condición debe cumplir el vehículo utilizado para transportar porcinos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permanecer cerrado, húmedo y acondicionado para limitar el movimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener espacios reducidos para controlar el desplazamiento de animales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conservar residuos orgánicos para facilitar la adaptación durante el traslado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estar limpio, desinfectado y adecuado para trasladar los porcinos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es el propósito de la inspección ante mortem?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar el estado sanitario de los porcinos antes del sacrificio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Examinar las características comerciales de las canales después del sacrificio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar el rendimiento económico de los productos después del beneficio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar los residuos generados durante las operaciones posteriores del beneficio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Quién realiza la inspección ante mortem de los porcinos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El productor encargado de transportar y entregar los animales recibidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El médico veterinario oficial o autorizado según la normatividad vigente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El operario responsable de efectuar únicamente la limpieza de instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El conductor encargado de realizar exclusivamente el traslado de porcinos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué acción debe realizarse ante sospecha de una enfermedad infectocontagiosa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que el animal continúe normalmente hacia el proceso de beneficio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener al animal junto al lote hasta finalizar completamente la recepción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Notificar la situación y aislar inmediatamente al animal como medida sanitaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Trasladar directamente al animal hacia el área destinada para la refrigeración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué práctica corresponde al manejo de bajo estrés durante la recepción?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar movimientos rápidos para acelerar el desplazamiento hacia los corrales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Emplear sonidos fuertes para orientar continuamente el movimiento del lote.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conducir grupos numerosos para disminuir el tiempo utilizado durante la recepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Realizar movimientos tranquilos y utilizar elementos de manejo autorizados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué debe garantizarse permanentemente durante el descanso previo al beneficio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disponibilidad de agua limpia y potable para los porcinos alojados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Disponibilidad permanente de alimento concentrado durante todo el periodo previo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicación frecuente de medicamentos preventivos durante todo el periodo previo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Movilización permanente de animales dentro de los corrales durante el descanso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes prácticas está prohibida durante la recepción?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar paneles apropiados para facilitar la conducción tranquila de animales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Golpear o patear animales porque puede causar lesiones y sufrimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Supervisar las condiciones sanitarias y de bienestar durante la recepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Movilizar los porcinos con técnicas que disminuyan el miedo y estrés.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito fundamental de la bioseguridad en la recepción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejorar exclusivamente las características comerciales y productivas de cada canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar principalmente la velocidad de movilización de todos los animales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Prevenir el ingreso y la propagación de enfermedades en la planta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar únicamente el peso comercial de los porcinos antes del sacrificio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué debe hacerse con los vehículos después de cada transporte?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantenerlos temporalmente sin limpieza para conservar las condiciones del traslado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizarlos nuevamente antes de realizar cualquier procedimiento sanitario de control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dejarlos exclusivamente en ventilación para eliminar naturalmente todos los contaminantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limpiarlos para reducir residuos y prevenir contaminantes entre diferentes lotes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el propósito principal del proceso de beneficio porcino?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener carne inocua y apta para el consumo mediante procedimientos controlados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar únicamente el peso final de los animales destinados al sacrificio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mejorar exclusivamente las características reproductivas de los porcinos del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar solamente la cantidad de animales recibidos diariamente para su procesamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el objetivo de la insensibilización o aturdimiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar temporalmente la actividad física del porcino antes de la sangría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Provocar pérdida inmediata de conciencia para evitar dolor y sufrimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Facilitar el desplazamiento del porcino hacia los corrales destinados al descanso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar la identificación documental del animal antes de iniciar el sacrificio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la finalidad principal de la sangría durante el beneficio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar la cantidad de sangre presente en los tejidos de la canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir el tiempo destinado a la inspección sanitaria posterior del animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Extraer la mayor cantidad posible de sangre para favorecer su conservación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Incrementar la temperatura corporal para facilitar las operaciones posteriores del beneficio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué práctica contribuye directamente a garantizar la inocuidad de la carne?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener temperaturas elevadas durante todo el almacenamiento posterior de la carne.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir los procedimientos de limpieza para acelerar las operaciones del beneficio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Suspender la inspección veterinaria cuando los animales presenten apariencia saludable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar BPM, higiene, inspección veterinaria y mantener la cadena de frío.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué función cumplen las Buenas Prácticas Porcícolas durante la recepción?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar sanidad, bioseguridad, trazabilidad, bienestar animal e inocuidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar exclusivamente características comerciales, reproductivas y económicas de cada animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentar únicamente la velocidad de recepción, sacrificio y comercialización del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar completamente la inspección sanitaria realizada por el profesional veterinario responsable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué permite la correcta identificación de los porcinos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar solamente las características físicas observables de cada animal recibido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Relacionar cada animal o lote con su procedencia y documentación sanitaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer únicamente el rendimiento económico esperado después de realizar el beneficio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los registros sanitarios requeridos durante las diferentes etapas del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué medida contribuye al control de plagas en la planta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir el acceso controlado de aves hacia las instalaciones destinadas a recepción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener residuos temporalmente acumulados para facilitar posteriormente su clasificación general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Implementar monitoreo, limpieza y manejo adecuado de residuos en las instalaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Suspender periódicamente la limpieza para disminuir el uso de productos autorizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué responsabilidad tiene el personal durante el beneficio porcino?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar procedimientos libremente sin considerar los protocolos establecidos para cada operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modificar los procedimientos sanitarios según las necesidades particulares de cada jornada laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Delegar exclusivamente las medidas de higiene y bioseguridad al médico veterinario responsable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar procedimientos establecidos y mantener condiciones de higiene y bienestar animal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
