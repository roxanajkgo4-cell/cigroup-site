export const base44 = {
  entities: new Proxy({}, {
    get: () => ({
      list: async () => [],
      get: async () => null,
      create: async (payload:any) => ({ ok: true, payload }),
      update: async (id:any, payload:any) => ({ ok: true, id, payload }),
      delete: async () => ({ ok: true }),
    }),
  }),
}
