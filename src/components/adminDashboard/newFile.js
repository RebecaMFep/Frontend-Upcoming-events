import { ref, onMounted } from 'vue';
import { formData } from './ModifyEvent.vue';

<script setup>
import {ref, onMounted} from 'vue';

const formData = ref({name}: '',
age: null
});

async function fetchData() {
// Simulando una llamada GET para obtener los datos actuales
// En un entorno real, esto se haría con axios o fetch
formData.value = await fetchCurrentData()};
}

async function submitForm() {
// Simulando una llamada POST o PUT para enviar los cambios
// En un entorno real, esto se haría con axios o fetch
await sendUpdatedData(formData.value)};
}

onMounted(fetchData);
</script>;
