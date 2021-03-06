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

/**
 * The participant profile property reference.
 *
 */
class ParticipantProfilePropertyReference {
  /**
   * Create a ParticipantProfilePropertyReference.
   * @member {string} interactionPropertyName The source interaction property
   * that maps to the target profile property.
   * @member {string} profilePropertyName The target profile property that maps
   * to the source interaction property.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ParticipantProfilePropertyReference
   *
   * @returns {object} metadata of ParticipantProfilePropertyReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ParticipantProfilePropertyReference',
      type: {
        name: 'Composite',
        className: 'ParticipantProfilePropertyReference',
        modelProperties: {
          interactionPropertyName: {
            required: true,
            serializedName: 'interactionPropertyName',
            type: {
              name: 'String'
            }
          },
          profilePropertyName: {
            required: true,
            serializedName: 'profilePropertyName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ParticipantProfilePropertyReference;
