/* tslint:disable */
/* eslint-disable */
/**
 * Earthpoints API
 * Earthpoints API description
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ClientCredentialsDto
 */
export interface ClientCredentialsDto {
    /**
     * 
     * @type {string}
     * @memberof ClientCredentialsDto
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof ClientCredentialsDto
     */
    clientSecret: string;
}

export function ClientCredentialsDtoFromJSON(json: any): ClientCredentialsDto {
    return ClientCredentialsDtoFromJSONTyped(json, false);
}

export function ClientCredentialsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientCredentialsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': json['client_id'],
        'clientSecret': json['client_secret'],
    };
}

export function ClientCredentialsDtoToJSON(value?: ClientCredentialsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client_id': value.clientId,
        'client_secret': value.clientSecret,
    };
}

