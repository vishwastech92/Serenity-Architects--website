import React, { createContext, useContext, useEffect, useState } from 'react';

export interface AppConfig {
  business: {
    name: string;
    phones: string[];
    email: string;
    address: string;
    youtube: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

const ConfigContext = createContext<AppConfig | null>(null);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<AppConfig | null>(null);

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        // Update SEO
        document.title = data.seo.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', data.seo.description);
        }
      })
      .catch((err) => console.error('Failed to load config:', err));
  }, []);

  if (!config) return null; // Or a loading spinner

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
