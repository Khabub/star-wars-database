import "styled-components";
import { CSSGlobalInterface } from "./components/App/theme/theme";
import { CSSProp } from "styled-components";

interface MyTheme {}

declare module "styled-components" {
  export interface DefaultTheme extends CSSGlobalInterface {}
}


// aby fungovalo macro css
declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributed<T> {
    css?: CSSProp<MyTheme>;
  }
}
// DefaultTheme is being used as an interface of props.theme out of the box.
// By default the interface DefaultTheme is empty so that's why we need to
// extend it.
