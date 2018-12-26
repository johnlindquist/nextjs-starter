//
export const isServer = !(typeof window !== "undefined" && window.document);

export const isClient = typeof window !== "undefined";
