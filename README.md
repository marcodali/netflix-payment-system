# Stripe external payment PoC

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

## 🚀 How to use

- Publish the app on expo.dev to share the QR code and allow everyone to test it
  ```sh
  yarn update
  ```
- Run the app locally for ios, android and web
  ```sh
  yarn start
  ```
- Prior to publish the app in Google Play and App Store, you must generate builds
  ```sh
  yarn build
  ```
- Submit the iOS build to the App Store
  ```sh
  yarn submit:ios
  ```
- Submit the Android build to the Google Play Store
  ```sh
  yarn submit:android
  ```

## 📝 Notes

- This example using the [`tailwind-rn`](https://github.com/vadimdemedes/tailwind-rn) library to allow you to use [Tailwind CSS](https://tailwindcss.com/) in React Native.
