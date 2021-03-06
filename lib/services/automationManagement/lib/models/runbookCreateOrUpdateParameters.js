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
 * The parameters supplied to the create or update runbook operation.
 *
 */
class RunbookCreateOrUpdateParameters {
  /**
   * Create a RunbookCreateOrUpdateParameters.
   * @member {boolean} [logVerbose] Gets or sets verbose log option.
   * @member {boolean} [logProgress] Gets or sets progress log option.
   * @member {string} runbookType Gets or sets the type of the runbook.
   * Possible values include: 'Script', 'Graph', 'PowerShellWorkflow',
   * 'PowerShell', 'GraphPowerShellWorkflow', 'GraphPowerShell'
   * @member {object} [draft] Gets or sets the draft runbook properties.
   * @member {boolean} [draft.inEdit] Gets or sets whether runbook is in edit
   * mode.
   * @member {object} [draft.draftContentLink] Gets or sets the draft runbook
   * content link.
   * @member {string} [draft.draftContentLink.uri] Gets or sets the uri of the
   * runbook content.
   * @member {object} [draft.draftContentLink.contentHash] Gets or sets the
   * hash.
   * @member {string} [draft.draftContentLink.contentHash.algorithm] Gets or
   * sets the content hash algorithm used to hash the content.
   * @member {string} [draft.draftContentLink.contentHash.value] Gets or sets
   * expected hash value of the content.
   * @member {string} [draft.draftContentLink.version] Gets or sets the version
   * of the content.
   * @member {date} [draft.creationTime] Gets or sets the creation time of the
   * runbook draft.
   * @member {date} [draft.lastModifiedTime] Gets or sets the last modified
   * time of the runbook draft.
   * @member {object} [draft.parameters] Gets or sets the runbook draft
   * parameters.
   * @member {array} [draft.outputTypes] Gets or sets the runbook output types.
   * @member {object} [publishContentLink] Gets or sets the published runbook
   * content link.
   * @member {string} [publishContentLink.uri] Gets or sets the uri of the
   * runbook content.
   * @member {object} [publishContentLink.contentHash] Gets or sets the hash.
   * @member {string} [publishContentLink.contentHash.algorithm] Gets or sets
   * the content hash algorithm used to hash the content.
   * @member {string} [publishContentLink.contentHash.value] Gets or sets
   * expected hash value of the content.
   * @member {string} [publishContentLink.version] Gets or sets the version of
   * the content.
   * @member {string} [description] Gets or sets the description of the
   * runbook.
   * @member {number} [logActivityTrace] Gets or sets the activity-level
   * tracing options of the runbook.
   * @member {string} [name] Gets or sets the name of the resource.
   * @member {string} [location] Gets or sets the location of the resource.
   * @member {object} [tags] Gets or sets the tags attached to the resource.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RunbookCreateOrUpdateParameters
   *
   * @returns {object} metadata of RunbookCreateOrUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RunbookCreateOrUpdateParameters',
      type: {
        name: 'Composite',
        className: 'RunbookCreateOrUpdateParameters',
        modelProperties: {
          logVerbose: {
            required: false,
            serializedName: 'properties.logVerbose',
            type: {
              name: 'Boolean'
            }
          },
          logProgress: {
            required: false,
            serializedName: 'properties.logProgress',
            type: {
              name: 'Boolean'
            }
          },
          runbookType: {
            required: true,
            serializedName: 'properties.runbookType',
            type: {
              name: 'String'
            }
          },
          draft: {
            required: false,
            serializedName: 'properties.draft',
            type: {
              name: 'Composite',
              className: 'RunbookDraft'
            }
          },
          publishContentLink: {
            required: false,
            serializedName: 'properties.publishContentLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          logActivityTrace: {
            required: false,
            serializedName: 'properties.logActivityTrace',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = RunbookCreateOrUpdateParameters;
