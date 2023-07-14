declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: string;
    }
  }
}

export {};
