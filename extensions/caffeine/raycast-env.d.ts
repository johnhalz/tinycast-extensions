/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `caffeinate` command */
  export type Caffeinate = ExtensionPreferences & {}
  /** Preferences accessible in the `decaffeinate` command */
  export type Decaffeinate = ExtensionPreferences & {}
  /** Preferences accessible in the `status` command */
  export type Status = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `caffeinate` command */
  export type Caffeinate = {}
  /** Arguments passed to the `decaffeinate` command */
  export type Decaffeinate = {}
  /** Arguments passed to the `status` command */
  export type Status = {}
}

