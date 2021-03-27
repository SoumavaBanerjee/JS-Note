export interface onLoadInterface {
  importer?: string | undefined;
  kind?: string;
  namespace: string;
  path: string;
  pluginData?: string | undefined;
  resolveDir?: string;
}

export interface onResolveInterface {
  importer?: string | undefined;
  kind?: string;
  namespace: string;
  path: string;
  pluginData?: string | undefined;
  resolveDir?: string;
}
