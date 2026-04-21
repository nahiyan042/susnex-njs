interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_path?: string;
  [key: string]: unknown;
}

interface Window {
  gtag?: (command: string, targetId: string, params?: GtagEventParams) => void;
}
