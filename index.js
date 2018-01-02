var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
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
var WeiboSDK = (function (_super) {
    __extends(WeiboSDK, _super);
    function WeiboSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Weibo ssoLogin
    */
    WeiboSDK.prototype.ssoLogin = function () {
        return;
    };
    WeiboSDK.prototype.logout = function () {
        return;
    };
    WeiboSDK.prototype.checkClientInstalled = function () {
        return;
    };
    WeiboSDK.prototype.shareToWeibo = function (options) {
        return;
    };
    WeiboSDK.prototype.shareImageToWeibo = function (options) {
        return;
    };
    WeiboSDK.prototype.shareTextToWeibo = function (options) {
        return;
    };
    WeiboSDK.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeiboSDK.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WeiboSDK.prototype, "ssoLogin", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WeiboSDK.prototype, "logout", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WeiboSDK.prototype, "checkClientInstalled", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WeiboSDK.prototype, "shareToWeibo", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WeiboSDK.prototype, "shareImageToWeibo", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WeiboSDK.prototype, "shareTextToWeibo", null);
    WeiboSDK = __decorate([
        Plugin({
            pluginName: 'WeiboSDK',
            plugin: 'cordova-plugin-weibosdk',
            pluginRef: 'WeiboSDK',
            repo: 'https://github.com/iVanPan/cordova_weibo',
            install: 'ionic cordova plugin add cordova-plugin-weibosdk --variable WEIBO_APP_ID=YOUR_WEIBO_APPID',
            installVariables: ['WEIBO_APP_ID'],
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], WeiboSDK);
    return WeiboSDK;
}(IonicNativePlugin));
export { WeiboSDK };
//# sourceMappingURL=index.js.map