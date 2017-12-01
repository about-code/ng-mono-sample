// We export some package info here to satisfy initial builds with ngc/rollup
// which require something to be exported. Feel free to remove `packageInfo`
// once you have got something else to export.
export const packageInfo = {
    "name": "@foo/foo-feature",
    "description": "Demonstrating a feature package",
    "author": "@about-code",
    "copyright": "@about-code"
};

// Export the package's __public__ api, here.
export {FeatureModule} from "./src/FeatureModule";
// :: export {{{exported_name}}} from "{{internal_path}}";
