import React from 'react'
import insta1 from '../img/insta1.PNG'
import insta2 from '../img/insta2.PNG'
import insta3 from '../img/insta3.PNG'
import insta4 from '../img/insta4.PNG'
import insta5 from '../img/insta5.PNG'
import insta6 from '../img/insta6.png'
import insta7 from '../img/insta7.PNG'
import insta8 from '../img/insta8.png'
import insta9 from '../img/insta9.PNG'
import insta10 from '../img/insta10.png'
import insta11 from '../img/insta11.PNG'
import insta12 from '../img/insta12.PNG'
import insta13 from '../img/insta13.PNG'
import insta14 from '../img/insta14.png'
import insta15 from '../img/insta15.PNG'
import insta16 from '../img/insta16.png'
import insta17 from '../img/insta17.PNG'
import insta18 from '../img/insta18.PNG'
import insta19 from '../img/insta19.PNG'
import insta20 from '../img/insta20.PNG'
import insta21 from '../img/insta21.PNG'
import insta22 from '../img/insta22.PNG'
import insta23 from '../img/insta23.PNG'
import insta24 from '../img/insta24.PNG'
import insta25 from '../img/insta25.PNG'
import insta26 from '../img/insta26.PNG'
import insta27 from '../img/insta27.PNG'
import insta28 from '../img/insta28.PNG'
import insta29 from '../img/insta29.PNG'
import insta30 from '../img/insta30.PNG'
import insta31 from '../img/insta31.PNG'

import { useState } from 'react'


export const Uno = () => {

  const [boton, setBoton] = useState(1)


const handleClick = () => {
  if (boton === 0) {
    setBoton(1);

  } if (boton === 1) {
    setBoton(0);

  }
}

  return (
    <div className='Uno'>

<button className='BotonIdioma' onClick={handleClick}>
        {boton === 0 ? 'English' : 'Español'}
      </button>

      {boton === 0 ?
          <p className='IntroUno'>El análisis de datos en redes sociales genera información específica 
              relacionada con el consumo de productos y servicios, el sentimiento de los usuarios sobre 
              empresas, productos o el nivel de satisfacción social o política. Te permite generar y 
              refinar campañas de acuerdo a objetivos específicos. Además, los resultados son medibles, 
              por lo que el análisis de datos es esencial para determinar el ROI (Return on Investment) 
              de cualquier campaña en las redes sociales.
          </p>
      :   <p className='IntroUno'>Data analysis in social networks generates specific information 
              related to product and service consumption, user related to the consumption of products 
              and services, user sentiment about companies, products or the level of social or political 
              satisfaction. companies, products or the level of social or political satisfaction. It allows 
              you to generate and refine campaigns according to specific objectives. In addition, the results 
              are measurable, so data analysis is essential to determine the ROI (Return on Investment) of any 
              social media campaign. of any social media campaign.
          </p>}

      <p className='IntroUno'>Instagram es una de las aplicaciones de redes sociales más populares en la actualidad. 
        Las personas que la usan profesionalmente lo hacen para promocionar su negocio, crear una cartera, 
        un blog y diferentes tipos de contenido. Debido a que cambia constantemente, afecta el alcance de 
        nuestras publicaciones y nos afecta a largo  plazo. Entonces, si los creadores quieren tener éxito en 
        Instagram a largo plazo, deben mirar sus datos de alcance. Aquí es donde debemos saber cómo usar nuestros 
        datos para tareas de análisis de alcance, por lo tanto, se propone el análisis de alcance de Instagram con 
        Python, que ayudará a los creadores de contenido a comprender cómo adaptarse a los cambios en Instagram a largo plazo.
      </p>

      <h1 className='TituloUno'>Análisis del alcance de Instagram con Python</h1>

      <p className='Contenido'>Ahora se empieza la tarea de analizar el alcance de la cuenta de Instagram importando 
        las librerías Python necesarias y el conjunto de datos:
      </p>

      <img src={insta1} alt='insta1' className='imgUno' />
      <img src={insta2} alt='insta2' className='imgUno' />

      <p className='Contenido'>
      Antes de empezar, se buscan conjuntos de datos que contienen valores nulos:
      </p>

      <img src={insta3} alt='insta3' className='imgUno' />

      <p className='Contenido'>
        No se evidencian valores nulos en el conjunto de datos, por lo que se procede a realizar 
        el análisis de alcance de Instagram.
      </p>

      <p className='Contenido'>
        Se observa la información de las columnas para entender el tipo de datos de todas las columnas:
      </p>

      <img src={insta4} alt='insta4' className='imgUno' />


      <h1 className='TituloUno'>Analizar el alcance de Instagram</h1>

      <p className='Contenido'>
        Ahora se empieza analizando el alcance de las publicaciones en Instagram. 
        Primero se observa la distribución de impresiones que se han recibido desde casa:
      </p>

      <img src={insta5} alt='insta5' className='imgUno' />
      <img src={insta6} alt='insta6' className='graficos' />

      <p className='Contenido'>
          Las impresiones que se obtienen de la sección de inicio en Instagram muestran cuánto llegan 
          las publicaciones a los seguidores. Mirando las impresiones desde la home, se puede decir 
          que es difícil llegar a todos los seguidores diariamente. Ahora se observa la distribución 
          de las impresiones que se reciben de los hashtags:
      </p>

      
      
      <img src={insta7} alt='insta7' className='imgUno' />
      <img src={insta8} alt='insta8' className='graficos' />

      <p className='Contenido'>
        Los hashtags son herramientas que se utilizan para categorizar las publicaciones en Instagram 
        y así poder llegar a más personas en función del tipo de contenido que se crea. Observar las 
        impresiones de los hashtags muestra que no se puede llegar a todas las publicaciones utilizando 
        hashtags, pero se puede llegar a muchos usuarios nuevos a partir de hashtags. Ahora se ve la 
        distribución de impresiones que se ha recibido desde la sección explorar de Instagram:
      </p>

      <img src={insta9} alt='insta9' className='imgUno' />
      <img src={insta10} alt='insta10' className='graficos' />

      <p className='Contenido'>
      La sección de exploración de Instagram es el sistema de recomendación de Instagram. 
      Recomienda publicaciones a los usuarios en función de sus preferencias e intereses. 
      Mirando las impresiones que se ha recibido de la sección de exploración, se puede decir que 
      Instagram no recomienda con demasiada frecuencia las publicaciones a los usuarios. 
      Algunas publicaciones han recibido un buen alcance de la sección de exploración, 
      pero sigue siendo muy bajo en comparación con el alcance que se recibe de los hashtags.
      </p>

      <p className='Contenido'>
      Ahora se observa al porcentaje de impresiones que se recibe de varias fuentes en Instagram:
      </p>


      <img src={insta11} alt='insta11' className='imgUno' />
      <img src={insta12} alt='insta12' className='graficos' />

    <p className='Contenido'>
    Así, el gráfico anterior muestra que 44% del alcance procede de los seguidores, 
    el 33,6% de los hashtags, el 19,2% de la sección de exploración y el 3,05% de otras fuentes.
    </p>
    <h1 className='TituloUno'>
      Análisis del contenido
    </h1>
    <p className='Contenido'>
    Ahora se analiza el contenido de las publicaciones en Instagram. El conjunto de datos tiene dos columnas, a saber, pie de foto y hashtags, que ayudarán a comprender el tipo de contenido que se publica en Instagram.
    </p>

    <p className='Contenido'>
Se va a crear una nube de palabras de la columna del pie de foto para ver las palabras más utilizadas en las publicaciones de Instagram:
</p>

      <img src={insta13} alt='insta13' className='imgUno' />
      <img src={insta14} alt='insta14' className='graficos' />


      <p className='Contenido'>
        Ahora se crea una nube de palabras de la columna de hashtags para ver los más utilizados en 
        las publicaciones de Instagram:
      </p>

      <img src={insta15} alt='insta15' className='imgUno' />
      <img src={insta16} alt='insta16' className='graficos' />


      

      <h1 className='TituloUno'> Analizar las relaciones</h1>
      <p className='Contenido'>
        Ahora se van a analizar las relaciones para encontrar los factores más importantes de el 
        alcance en Instagram. También ayudará a entender cómo funciona el algoritmo.
      </p>
      <p className='Contenido'>
        Se observa la relación entre el número de me gusta y el número de impresiones en las 
        publicaciones de Instagram:
</p>

      <img src={insta17} alt='insta19' className='imgUno' />
      <img src={insta18} alt='insta20' className='graficos' />

      <p className='Contenido'>
        Existe una relación lineal entre el número de me gusta y el alcance que se obtuvo en Instagram. 
        Ahora se observa la relación entre el número de comentarios y el número de impresiones en las 
        publicaciones de Instagram:
      </p>

      <img src={insta19} alt='insta21' className='imgUno' />
      <img src={insta20} alt='insta22' className='graficos' />

      <p className='Contenido'>
          Se observa que el número de comentarios que se recibe en un post no afecta a su alcance. 
          Ahora se observa la relación entre el número de compartidos y el número de impresiones:
      </p>

      <img src={insta21} alt='insta23' className='imgUno' />
      <img src={insta22} alt='insta24' className='graficos' />

      <p className='Contenido'>
          Un mayor número de compartidos se traducirá en un mayor alcance, pero los compartidos no 
          afectan al alcance de una publicación tanto como los me gusta. Veamos ahora la relación entre 
          el número de guardados y el número de impresiones:
      </p>

      <img src={insta23} alt='insta25' className='imgUno' />
      <img src={insta24} alt='insta26' className='graficos' />

      <p className='Contenido'>
        Existe una relación lineal entre el número de veces que se guarda la publicación y el alcance 
        en Instagram. Ahora se observa la correlación de todas las columnas con la columna Impresiones:
      </p>

      <img src={insta25} alt='insta27' className='imgUno' />

      <p className='Contenido'>
          Así que, se puede decir que un mayor número de likes y selfies ayudarán a conseguir más 
          alcance en Instagram. El mayor número de compartidos también ayudará a conseguir más alcance, 
          pero un número bajo de compartidos tampoco afectará el alcance.
      </p>

      <h1 className='TituloUno'>
          Analizar la tasa de conversión
      </h1>

      <p className='Contenido'>
          En Instagram, la tasa de conversación significa cuántos seguidores está obteniendo a partir 
          del número de visitas al perfil desde una publicación. La fórmula que puedes utilizar para 
          calcular la tasa de conversión es (Seguidores/Visitas al perfil) * 100. Ahora se observa la 
          tasa de conversación de esta cuenta de Instagram:
      </p>


      <img src={insta26} alt='insta28' className='imgUno' />

      <p className='Contenido'>
          Así que la tasa de conversación de la cuenta de Instagram es del 41%, lo que parece una tasa de 
          conversación muy buena. Ahora se observa la relación entre el total de visitas al perfil y el 
          número de seguidores obtenidos:
      </p>

      <img src={insta27} alt='insta29' className='imgUno' />
      <img src={insta28} alt='insta30' className='graficos' />


      <p className='Contenido'>
      La relación entre las visitas al perfil y los seguidores ganados también es lineal.
      </p>
      <h1 className='TituloUno'>
      Modelo de predicción del alcance de Instagram</h1>
    <p className='Contenido'>
        Ahora, en esta sección, se entrenará un modelo de aprendizaje automático para predecir 
        el alcance de una publicación de Instagram. se va a dividir los datos en conjuntos de 
        entrenamiento y de prueba antes de entrenar el modelo:
    </p>

      <img src={insta29} alt='insta31' className='imgUno' />

    <p className='Contenido'>
        De la siguiente forma se puede entrenar un modelo de aprendizaje automático para predecir 
        el alcance de una publicación en Instagram usando Python:
    </p>

      <img src={insta30} alt='insta32' className='imgUno' />
    
    <p className='Contenido'>
        Ahora se va a predecir el alcance de una publicación de Instagram introduciendo datos en el 
        modelo de aprendizaje automático:
    </p>

      <img src={insta31} alt='insta33' className='imgUno' />

    </div>
  )
}
