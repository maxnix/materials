---
theme: seriph
background: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*odW0CyTVxMVt5s3yhjjOhw.png
class: text-center
highlighter: shikiji
lineNumbers: false
info: |
  Corso React Typescript
drawings:
  persist: false
transition: slide-left
title:  Corso React Typescript
mdc: true
---

# Corso React Typescript

Introduzione al corso, agli argomenti e ai requisiti

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

```yml
preload: false
transition: fade-out
layout: center
```

# Cosa devo sapere per seguire il corso?

Qui di seguito trovi una lista di argomenti che dovresti conoscere per seguire il corso ? Non ne conosci qualcuno? Nessun problema, ti aiuteremo a colmare le lacune.

<ul
v-motion
:initial="{
    opacity: 0,
    y: 100,
  }"
  :enter="{
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: '100',
      delay: 1000,
      duration: 500,
    },
  }">


- **HTML** Linguaggio di markup per la struttura delle pagine web
- **CSS** Linguaggio per la formattazione e lo styling delle pagine web
- **Javascript** Linguaggio di programmazione per il web
- **Typescript** Superset che aggiunge tipizzazione statica a Javascript

</ul>


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Typescript è necessario per imparare React ? No. L'ho inserito io ? Si. 
Questo corso è stato pensato per rendere veramente preparati gli studenti sia dal punto lavorativo che della comprensione, per questo motivo ho deciso di inserire Typescript come al suo interno. 
Esso ci permetterà di capire meglio come funziona React obblindoci e obbligandomi a spiegare alcuni concetti che molto spesso rimangono "sotto al tappeto".
-->

---
layout: section
class: text-center
background: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*odW0CyTVxMVt5s3yhjjOhw.png
---

# Tool e dev environment

All'interno del corso ci serviremo di alcuni tool e di configurare un ambiente di sviluppo che ci permetta di eseguire React e Typescript.

<!--

Prima di iniziare il corso è necessario configurare il proprio ambiente di sviluppo e assicurarsi di avere tutti i tool, i pacchetti e le dipendenze necessarie per poter seguire eseguire React.

-->


---
layout: image-right
image: /graphic_1.png
---

# Dev environment

- **Node.js** Runtime Javascript[^1]
- **NPM Yarn Pnpm** Package manager per Node.js[^2]
- **VSCode** Editor di testo[^3]
- **Git** Version control system[^4]


<!-- <arrow v-click="[3, 4]" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" /> -->

[^1]: [Node.js](https://nodejs.org/it/)
[^2]: [NPM](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/), [Pnpm](https://pnpm.io/)
[^3]: [VSCode](https://code.visualstudio.com/)
[^4]: [Git](https://git-scm.com/)


<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>


<!--
 V8 è un motore JavaScript open source sviluppato da Google incorporato nel browser Google Chrome. È progettato per eseguire il codice JavaScript in modo efficiente e veloce e la compilazione JIT (Just-In-Time), che traduce il codice JavaScript in codice nativo della macchina in tempo reale per migliorare le prestazioni di esecuzione.
-->

---

# Dev environment Deep Dive

<SelectTopic/>

[^1]: [NVM](https://github.com/nvm-sh/nvm)
<!--
 V8 è un motore JavaScript open source sviluppato da Google incorporato nel browser Google Chrome. È progettato per eseguire il codice JavaScript in modo efficiente e veloce e la compilazione JIT (Just-In-Time), che traduce il codice JavaScript in codice nativo della macchina in tempo reale per migliorare le prestazioni di esecuzione.
-->

---
theme: seriph
background: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*odW0CyTVxMVt5s3yhjjOhw.png
class: text-center
layout: cover
---

# Che cosa è React?

Che cosa è React? Perché è così popolare? Come funziona?

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
preload: false
transition: fade-out
layout: two-cols
class: px-2
---

# React, una libreria non un framework


React è una libreria Javascript per la creazione di interfacce utente. Non è un framework, non è un linguaggio di programmazione, non è un toolchain. 

React permette di creare componenti riutilizzabili che gestiscono il proprio stato e si aggiornano in modo efficiente quando lo stato cambia.

<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50, opacity: 0}"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="/react-logo.png"
      alt=""
    />
  </div>

  <div
    class="text-4xl absolute top-10 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Components
  </div>
</div>


::right::

```tsx
const Counter:React.FC<{count?: number}> = (props) => {
  const [counter, setCounter] = useState(props.count ?? 0)
  return (
    <div className="flex flex-row gap-2">
      <button 
      onClick={() => setCounter(counter - 1)}>-</button>
      <span>{counter}</span>
      <button 
      onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

<Counter count={10} />
<Counter count={200} />
```

<Contatore id="bcwbcew" :count=10 mt='10'/>
<Contatore id="bshbcsbckhd" :count=100 mt='10'/>
<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<!-- <div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://sli.dev/guide/animations.html#motion)

</div> -->

---
preload: false
transition: slide-left
---

# React e il Virtual DOM

<div grid="~ cols-2 gap-4">
<div>

il Virtual DOM, abbreviazione di "Virtual Document Object Model", è un concetto chiave nell'ambito di React e di altri framework JavaScript. Si tratta di una rappresentazione virtuale del DOM (Document Object Model), che è la struttura ad albero che rappresenta la struttura di un documento HTML o XML e fornisce un'interfaccia per interagire con esso tramite JavaScript.

Quando avvengono modifiche nello stato o nelle proprietà di un componente React, React non aggiorna immediatamente il DOM reale. Invece, compara la nuova rappresentazione virtuale del DOM (dopo la modifica) con la versione precedente

Quando avvengono modifiche nello stato o nelle proprietà di un componente React, React non aggiorna immediatamente il DOM reale. Invece, compara la nuova rappresentazione virtuale del DOM (dopo la modifica) con la versione precedente


</div>


<img src="https://miro.medium.com/v2/resize:fit:1276/1*InX4By1HRVlNV2qqAMXtMA.jpeg" alt="Virtual DOM" class="w-80"/>
</div>


<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<style>

  p{
    font-size: 0.9rem;
  }

</style>

<!-- <div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://sli.dev/guide/animations.html#motion)

</div> -->

---
preload: false
layout: two-cols
transition: fade-out
class: px-2
---

# Che cosa è anche React

In realtà, React non è stato creato per il web. È importante capire che React stesso non è ciò che rende visibile l'applicazione sul web; React è il livello virtuale del DOM, l'insieme di componenti e gestione dello stato che dice a qualcos'altro, il nostro bel browser (v8 Engine) che cosa renderizzare.

La maggior parte delle volte, quando si utilizza React, si fa uso di un pacchetto chiamato React DOM, che consente al DOM virtuale gestito da React di dire al vero DOM cosa renderizzare e cosa vada cambiato.

<div class="w-100 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50, opacity: 0}"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="/react-logo.png"
      alt=""
    />
  </div>

  <div
    class="text-4xl absolute top-10 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Not only web
  </div>
</div>

::right::

## Altri utilizzi di React

- [remotion](https://www.remotion.dev/) - React per la creazione di video
- [react-email](https://react.email/)
- [react-pdf](https://react-pdf.org/)
- [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

Questi esempi dimostrano come React abbia raggiunto un tale livello di astrazione, per poter essere utilizzato al di fuori del contesto tradizionale del web, dimostrando la sua versatilità e la sua capacità di gestire una vasta gamma di interfacce utente.

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<!-- <div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://sli.dev/guide/animations.html#motion)
 
</div> -->


---
layout: end
---

# Learn More & Resources

- [Slide fatto con DevSlide](https://sli.dev)
- [Download Slides](https://github.com/slidevjs/slidev)
