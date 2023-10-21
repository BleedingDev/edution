export type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer NoFcProps>
  ? NoFcProps
  : never
