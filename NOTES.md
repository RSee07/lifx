# Notes

## PWA Features

This app features a homescreen icon for both iOS and Android, along with a splash screen when opening the app.

For Android, the homescreen icon and splash screen is declared in the `manifest.json`. For iOS, it is slightly more difficult. The homescreen icon and splash screen must be declared as individual tags in the `index.html`

### Generate homescreen icons

https://makeappicon.com/

### Generate splash screens

https://appsco.pe/developer/splash-screens

### iOS Homescreen icon tag

```html
<link rel="apple-touch-icon" href="%PUBLIC_URL%/images/homescreen/homescreen-background.png">
```

### Splash screen example

```html
<link href="%PUBLIC_URL%/images/splashscreens/iphonexsmax_splash.png"
  media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
  rel="apple-touch-startup-image" />
```

### Useful Links

- https://medium.com/appscope/designing-native-like-progressive-web-apps-for-ios-1b3cdda1d0e8
- https://www.netguru.com/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native

### Gotchas

#### Adding iOS splash screens

You **MUST** add this tag before declaring the splash screens or it will not work

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
```
