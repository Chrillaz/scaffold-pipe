import _Hooks from './hooks/createHooks'
import { WPElement } from './element/create-interpolate-element'

export interface Wp {
  blockEditor: any;
  blocks: any;
  components: any;
  compose: any;
  data: any;
  editor: any;
  editPost: any;
  element: WPElement;
  hooks: typeof _Hooks;
  plugins: any;
}