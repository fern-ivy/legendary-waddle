import { defineStore } from 'pinia'
import { ref } from 'vue'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string>(localStorage.getItem('access_token') || '')
    const tenantId = ref<string>(localStorage.getItem('tenant_id') || '')
    const roles = ref<string[]>([])

    // 1. 新增 account 变量
    const account = ref<string>(localStorage.getItem('user_account') || '')

    // 修改 setLoginInfo 方法，接收并保存 account
    const setLoginInfo = (newToken: string, newTenantId: string, newAccount?: string) => {
        token.value = newToken
        tenantId.value = newTenantId
        if (newAccount) {
            account.value = newAccount
            localStorage.setItem('user_account', newAccount)
        }

        localStorage.setItem('access_token', newToken)
        localStorage.setItem('tenant_id', newTenantId)

        try {
            const decoded: any = jwtDecode(newToken)
            roles.value = decoded.roles || []
        } catch (e) {
            roles.value = []
        }
    }

    // 修改 logout，清除 account
    const logout = () => {
        token.value = ''
        tenantId.value = ''
        roles.value = []
        account.value = ''
        localStorage.removeItem('access_token')
        localStorage.removeItem('tenant_id')
        localStorage.removeItem('user_account') // 清除账号
    }

    // 2. 记得 return 出去
    return { token, tenantId, roles, account, setLoginInfo, logout }
})