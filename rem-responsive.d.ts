interface ResponsiveOptionType {
  max?: number;
  root: number;
  watch?: boolean;
}

interface RemResponsiveType {
  config(data: ResponsiveOptionType): void
}

declare const RemResponsive: RemResponsiveType

export { ResponsiveOptionType }
export default RemResponsive