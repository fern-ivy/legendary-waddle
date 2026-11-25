let refreshing: Promise<string> | null = null;

export async function refreshToken(): Promise<string> {
    if (!refreshing) {
        refreshing = doRefresh().finally(() => {
            refreshing = null;
        });
    }
    return refreshing;
}

async function doRefresh(): Promise<string> {
    console.log('触发 Token 刷新');
    return 'mock-new-token';
}