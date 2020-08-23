declare module '*.svg'
declare module '*.png'
declare module '*.gif'
declare module '*.woff'
declare module 'console' {
  export = typeof import("console");
}