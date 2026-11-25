import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePatientStore = defineStore('patient', () => {
    // 存放实时新增的患者
    const livePatients = ref<{ name: string, breed: string, time: string }[]>([])

    const addPatient = (patient: { name: string, breed: string, time: string }) => {
        livePatients.value.push(patient)
    }

    return { livePatients, addPatient }
})