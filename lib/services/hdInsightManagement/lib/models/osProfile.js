/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The Linux operation systems profile.
 *
 */
class OsProfile {
  /**
   * Create a OsProfile.
   * @member {object} [linuxOperatingSystemProfile] The Linux OS profile.
   * @member {string} [linuxOperatingSystemProfile.username] The username.
   * @member {string} [linuxOperatingSystemProfile.password] The password.
   * @member {object} [linuxOperatingSystemProfile.sshProfile] The SSH profile.
   * @member {array} [linuxOperatingSystemProfile.sshProfile.publicKeys] The
   * list of SSH public keys.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OsProfile
   *
   * @returns {object} metadata of OsProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OsProfile',
      type: {
        name: 'Composite',
        className: 'OsProfile',
        modelProperties: {
          linuxOperatingSystemProfile: {
            required: false,
            serializedName: 'linuxOperatingSystemProfile',
            type: {
              name: 'Composite',
              className: 'LinuxOperatingSystemProfile'
            }
          }
        }
      }
    };
  }
}

module.exports = OsProfile;
