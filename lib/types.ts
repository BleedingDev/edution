export type Prettify<T> = {
  [K in keyof T]: T[K];
};

export type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never;

export type ExcludeFromTypeInference<T> = [T][T extends any ? 0 : never];
