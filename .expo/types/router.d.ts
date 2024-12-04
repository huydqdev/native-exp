/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/authen/login`; params?: Router.UnknownInputParams; } | { pathname: `/feature/counterSlice`; params?: Router.UnknownInputParams; } | { pathname: `/store/store`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/authen/login`; params?: Router.UnknownOutputParams; } | { pathname: `/feature/counterSlice`; params?: Router.UnknownOutputParams; } | { pathname: `/store/store`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/authen/login${`?${string}` | `#${string}` | ''}` | `/feature/counterSlice${`?${string}` | `#${string}` | ''}` | `/store/store${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/authen/login`; params?: Router.UnknownInputParams; } | { pathname: `/feature/counterSlice`; params?: Router.UnknownInputParams; } | { pathname: `/store/store`; params?: Router.UnknownInputParams; };
    }
  }
}
