<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({
    topic: {
        default: "Node.js",
        validator: (value: string) => {
            return ["Node.js", "VS Code", "Git & GitHub"].includes(value)
        },
    },
})

const textContent = {
    "Node.js": ["Node.js è un ambiente di runtime open-source basato sul motore JavaScript V8 di Google Chrome, creato da Ryan Dahl nel 2009. Consente l'esecuzione di codice JavaScript lato server",
        "(Node Package Manager), un sistema di gestione dei pacchetti che offre agli sviluppatori accesso a un vasto ecosistema di moduli preconfezionati, semplificando così lo sviluppo e migliorando la produttività.",
        "NVM offre la flessibilità di installare, gestire e passare tra diverse versioni di Node.js su una singola macchina, semplificando il processo di sviluppo e garantendo la compatibilità delle applicazioni con versioni specifiche di Node.js."
    ],
    "VS Code": ["VS Code è un editor di codice sorgente gratuito realizzato da Microsoft per Windows, Linux e macOS.", "Visual Studio Code è un potente editor di codice leggero e altamente personalizzabile, progettato per sviluppatori di software.",
        "Il Marketplace di Visual Studio Code consente agli sviluppatori di installare ed eseguire estensioni di terze parti per Visual Studio Code. Le estensioni aggiungono nuove funzionalità all'editor che consentono agli utenti di eseguire attività specifiche.",
    ],
    "Git & GitHub": ["Git consente agli sviluppatori di tenere traccia delle diverse versioni del loro progetto, collaborare con altri membri del team e gestire facilmente le modifiche apportate al codice", "GitHub fornisce un luogo centralizzato in cui gli sviluppatori possono archiviare i loro progetti Git e collaborare con altri membri del team."],
}

const imageUrls = {
    "Node.js": "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    "VS Code": "https://miro.medium.com/v2/resize:fit:1400/0*SGbxc-dbU0gyaVWm.jpg",
    "Git & GitHub": "https://res.cloudinary.com/practicaldev/image/fetch/s--8CA40E5L--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/721lt9kj92i3ov2cthfc.png",
}
const options = ["Node.js", "VS Code", "Git & GitHub"]
const topic = ref(props.topic)
const handleSelect = (e: Event) => {
    topic.value = (e.target as HTMLSelectElement).value
}
</script>

<template>
    <div grid="~ cols-2 gap-4 items-center">
        <div>
            <select @change=handleSelect>
                <option v-for="option in options" :value="option">
                    {{ option }}
                </option>
            </select>
            <div>
                <p v-for="text in textContent[topic]">{{ text }}</p>
                <div flex="~ col gap-1" v-if="topic === 'Node.js'">
                    <a href="https://nodejs.org/en/" target="_blank">Node.js</a>
                    <a href="https://www.npmjs.com/" target="_blank">npm</a>
                    <a href="https://github.com/nvm-sh/nvm" target="_blank">NVM</a>
                </div>
                <div flex="~ col gap-1" v-if="topic === 'VS Code'">
                    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
                    <a href="https://marketplace.visualstudio.com/" target="_blank">VS Code Marketplace</a>
                    <a href="https://github.com/omardeangelis/VS-CCODE-SETUP" target="_blank">Mio Set Up</a>
                </div>
                <div flex="~ col gap-1" v-if="topic === 'Git & GitHub'">
                    <a href="https://git-scm.com/" target="_blank">Git</a>
                    <a href="https://github.com/" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
        <div>
            <img :src="imageUrls[topic]" />
        </div>
    </div>
</template>

<style scoped>
p {
    font-size: 13px;
}

a {
    font-size: 13px;
    color: #0078d4;
    text-decoration: none;
    width: fit-content;
}
</style>



