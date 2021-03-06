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
 * Origin properties needed for origin creation or update.
 *
 * @extends models['BaseResource']
 */
class OriginUpdateParameters extends models['BaseResource'] {
  /**
   * Create a OriginUpdateParameters.
   * @member {string} [hostName] The address of the origin. Domain names, IPv4
   * addresses, and IPv6 addresses are supported.
   * @member {number} [httpPort] The value of the HTTP port. Must be between 1
   * and 65535.
   * @member {number} [httpsPort] The value of the HTTPS port. Must be between
   * 1 and 65535.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OriginUpdateParameters
   *
   * @returns {object} metadata of OriginUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OriginUpdateParameters',
      type: {
        name: 'Composite',
        className: 'OriginUpdateParameters',
        modelProperties: {
          hostName: {
            required: false,
            serializedName: 'properties.hostName',
            type: {
              name: 'String'
            }
          },
          httpPort: {
            required: false,
            serializedName: 'properties.httpPort',
            constraints: {
              InclusiveMaximum: 65535,
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          httpsPort: {
            required: false,
            serializedName: 'properties.httpsPort',
            constraints: {
              InclusiveMaximum: 65535,
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = OriginUpdateParameters;
