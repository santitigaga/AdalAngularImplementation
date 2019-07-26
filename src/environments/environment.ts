// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    tenant: '07e1fc2b-0948-4b5b-8b7e-48edb1ff38e2',
    clientId: '159d33f4-aff2-4284-a706-e2386c2a0fc1',
    endpoints: {
      'http://localhost:4200/ok': '159d33f4-aff2-4284-a706-e2386c2a0fc1'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
