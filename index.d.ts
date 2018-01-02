import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name weibosdk
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { weibosdk } from '@ionic-native/weibosdk';
 *
 *
 * constructor(private weibosdk: weibosdk) { }
 *
 * ...
 *
 *
 * this.weibosdk.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class WeiboSDK extends IonicNativePlugin {
    /**
    * Weibo ssoLogin
    */
    ssoLogin(): Promise<any>;
    logout(): Promise<any>;
    checkClientInstalled(): Promise<any>;
    shareToWeibo(options: any): Promise<any>;
    shareImageToWeibo(options: any): Promise<any>;
    shareTextToWeibo(options: any): Promise<any>;
}
