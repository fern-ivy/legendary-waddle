// import axios from 'axios';
// import { refreshToken } from './auth';

// const http = axios.create({
//     baseURL: '/api',
//     timeout: 10000,
// });

// http.interceptors.request.use((config) => {
//     const token = localStorage.getItem('access_token');
//     const tenantId = localStorage.getItem('tenant_id') || 'hospital_a';

//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     if (tenantId) config.headers['X-Tenant-ID'] = tenantId;

//     return config;
// });

import axios from 'axios';
import { refreshToken } from './auth';

const http = axios.create({
    baseURL: '/api',
    timeout: 10000,
});

http.interceptors.request.use((config) => {
    // 直接从 localStorage 取，避免因为循环依赖导致 Pinia 还没初始化
    const token = localStorage.getItem('access_token');
    const tenantId = localStorage.getItem('tenant_id') || 'hospital_a';

    if (token) config.headers.Authorization = `Bearer ${token}`;
    if (tenantId) config.headers['X-Tenant-ID'] = tenantId;

    return config;
});

http.interceptors.response.use(
    (res) => res.data,
    async (err) => {
        const status = err.response?.status;
        if (status === 401) {
            const newToken = await refreshToken();
            err.config.headers.Authorization = `Bearer ${newToken}`;
            return http(err.config);
        }
        if (status === 409) {
            console.warn('409 冲突：可能是号源已满');
        }
        return Promise.reject(err);
    }
);

export default http;