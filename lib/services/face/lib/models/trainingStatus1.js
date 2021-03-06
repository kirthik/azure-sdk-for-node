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
 * Training status object.
 *
 */
class TrainingStatus1 {
  /**
   * Create a TrainingStatus1.
   * @member {string} status Training status: notstarted, running, succeeded,
   * failed. If the training process is waiting to perform, the status is
   * notstarted. If the training is ongoing, the status is running. Status
   * succeed means this person group is ready for Face - Identify. Status
   * failed is often caused by no person or no persisted face exist in the
   * person group. Possible values include: 'nonstarted', 'running',
   * 'succeeded', 'failed'
   * @member {date} [created] A combined UTC date and time string that
   * describes person group created time.
   * @member {date} [lastAction] Person group last modify time in the UTC,
   * could be null value when the person group is not successfully trained.
   * @member {string} [message] Show failure message when training failed
   * (omitted when training succeed).
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrainingStatus1
   *
   * @returns {object} metadata of TrainingStatus1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrainingStatus',
      type: {
        name: 'Composite',
        className: 'TrainingStatus1',
        modelProperties: {
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'nonstarted', 'running', 'succeeded', 'failed' ]
            }
          },
          created: {
            required: false,
            serializedName: 'createdDateTime',
            type: {
              name: 'DateTimeRfc1123'
            }
          },
          lastAction: {
            required: false,
            serializedName: 'lastActionDateTime',
            type: {
              name: 'DateTimeRfc1123'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TrainingStatus1;
